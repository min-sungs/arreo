import React, { useCallback, useEffect, useRef, useState } from 'react';
import BaseButton from '../../Atom/BaseButton';
import BaseInput from '../../Atom/BaseInput';
import BaseSelect from '../../Atom/BaseSelect';
import { useAddressTable } from '../../hooks/customs/addressBook/useAddressTable';
import { useGroupList } from '../../hooks/customs/addressBook/useGroupList';
import { useModal } from '../../hooks/customs/useModal';
import { CustomModal } from './AddressModal';
import DaumPostcode from 'react-daum-postcode';
import * as S from './styles/AddressListDetail.style';
import { BuddyData } from './types/AddressTable.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchEditDetail } from '../../../apis/api/addressApis';
import {
  validateEmail,
  validateNumber015,
  validatePhoneNumber,
  validateRequired,
  validateStringHyphen,
} from '../../hooks/utils/AddressUtils';

const AddressListDetail = ({ list }: { list: BuddyData }) => {
  // 받아온 데이터 상세페이지에 띄울 값들
  const tableRows = [
    { key: 'buddyNm', label: '이름', value: list.buddyNm },
    { key: 'groupNm', label: '그룹', value: list.groupNm },
    { key: 'keyCommNo', label: '휴대폰번호', value: list.keyCommNo },
    { key: 'emailId', label: '이메일', value: list.emailId },
    { key: 'coNm', label: '회사이름', value: list.coNm },
    { key: 'birthday', label: '생일', value: list.birthday },
    { key: 'coHandle', label: '직함', value: list.coHandle },
    { key: 'coDept', label: '부서', value: list.coDept },
    { key: 'regDt', label: '등록일', value: list.regDt },
    { key: 'genderFlag', label: '성별', value: list.genderFlag },
    { key: 'homeZipCd', label: '집우편번호', value: list.homeZipCd },
    { key: 'homeAddr', label: '집주소', value: list.homeAddr },
    { key: 'homeNumber', label: '집전화', value: list.homeNumber },
    { key: 'coZipCd', label: '회사우편번호', value: list.coZipCd },
    { key: 'coAddr', label: '회사주소', value: list.coAddr },
    { key: 'coNumber', label: '회사전화', value: list.coNumber },
    { key: 'faxNumber', label: '팩스', value: list.faxNumber },
    { key: 'homepageUrl', label: '홈페이지', value: list.homepageUrl },
    { key: 'accountNo', label: '계좌번호', value: list.accountNo },
    { key: 'marriageDay', label: '결혼기념일', value: list.marriageDay },
    { key: 'messenger', label: '메신저', value: list.messenger },
    { key: 'number015', label: '015번호', value: list.number015 },
    { key: 'etcInfo', label: '메모', value: list.etcInfo },
    { key: 'residentNo', label: '주민번호', value: list.residentNo },
    /* 추가 컬럼은 interface BuddyData에서 추가후 생성 */
  ];

  // 성별라벨 셀렉트 옵션 값지정
  const selectOptions2 = [
    { label: '선택안함', value: '' },
    { label: '여자', value: '0' },
    { label: '남자', value: '1' },
  ];

  const [isEditing, setIsEditing] = useState(false); // 수정 상태
  const [editedValues, setEditedValues] = useState<BuddyData>(list); // 수정 인풋 벨류
  const [isModalActive, setIsModalActive] = useState(false); // 모달창 토글 상태
  const [groupDetail, setGroupDetail] = useState([]); // 그룹 선택 담기는 배열
  const [antiBtn, setAntiBtn] = useState(false); // 중복 수정 방지
  const [modalState, setModalState] = useState(false); // 집주소 검색 모달창
  const [modalState1, setModalState1] = useState(false); // 회사주소 검색 모달창

  const queryClient = useQueryClient();
  // 커스텀훅 호출
  const { groupList } = useGroupList();
  const { deleteRemoveItem } = useAddressTable();
  const { successModal, confirmModal, warningModal } = useModal();

  const inputRef = useRef<HTMLInputElement>(null);

  // 모달 로직 시작
  const onClickToggleModal = useCallback(() => {
    setIsEditing(false);
    setIsModalActive(!isModalActive);
  }, [isModalActive]);

  useEffect(() => {
    const body = document.querySelector('html');
    if (body) {
      body.style.overflow = isModalActive ? 'hidden' : 'auto';
      body.style.paddingRight = isModalActive ? '17px' : '';
      return () => {
        body.style.overflow = 'auto';
      };
    }
    return undefined;
  }, [isModalActive]);
  // 모달 로직 종료

  /** 주소 검색 */
  const postCodeStyle: any = {
    width: '400px',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 1000,
    display: modalState ? 'block' : 'none',
    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.75)',
  };

  const postCodeStyle1: any = {
    width: '400px',
    height: '400px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    zIndex: 1000,
    display: modalState1 ? 'block' : 'none',
    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.75)',
  };

  const closeOverlay = () => {
    setModalState(false);
    setModalState1(false);
  };

  const onCompletePost = (data: any) => {
    setEditedValues((prev) => ({
      ...prev,
      homeAddr: data.address + data.buildingName,
      homeZipCd: data.zonecode,
    }));
    setModalState(false);
  };

  const onCompletePost1 = (data: any) => {
    setEditedValues((prev) => ({
      ...prev,
      coAddr: data.address + data.buildingName,
      coZipCd: data.zonecode,
    }));
    setModalState1(false);
  };

  /** 상세페이지 수정로직
   * 1.뮤테이션 반환 값
   * 2.토글버튼 클릭 이벤트
   * 3.뮤테이트로 보낼 값
   */
  // 1 - 뮤테이트로 값 보내기
  const { mutate: patchEditItemDetail } = useMutation(
    (data: { editedValues: BuddyData }) => patchEditDetail(data.editedValues),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['maingrouplist']);
        successModal('연락처 수정', '연락처를 수정했습니다.', true);
        setIsEditing(false);
        setAntiBtn(false);
      },
      onError: () => {
        warningModal('연락처 수정', '연락처 수정을 실패했습니다.', true);
        setAntiBtn(false);
      },
    },
  );

  // 2 - 해당페이지 input 태그로 토글하고 각 태그 value변화 각각 감지
  const toggleEditing = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  const handleInputChange = (key: keyof BuddyData, value: string) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [key]: value === null ? '' : value,
    }));
  };

  // 3 - 저장버튼 클릭시 유효성 검사후 뮤테이트로 수정 값 보내기

  // // 디테일 수정 유효성검사 로직
  // const validateInput = (value: string, regex: any, errorMessage: string) => {
  //   const trimmedValue = value?.trim() || '';
  //   if (trimmedValue.length >= 1 && !regex.test(trimmedValue)) {
  //     warningModal('대량 추가', errorMessage, true);
  //     return false;
  //   }
  //   return true;
  // };

  // 저장버튼 클릭 핸들러
  const saveChanges = () => {
    if (antiBtn) return; // 중복 수정 방지

    const {
      groupSeqNo,
      buddyNm,
      keyCommNo,
      emailId,
      homeZipCd,
      coZipCd,
      homeNumber,
      coNumber,
      faxNumber,
      accountNo,
      residentNo,
      number015,
    } = editedValues;

    if (!groupSeqNo || !validateRequired(buddyNm, inputRef) || !validateRequired(keyCommNo, inputRef)) {
      return;
    }

    if (
      !validatePhoneNumber(keyCommNo, inputRef) ||
      !validateEmail(emailId, inputRef) ||
      !validateStringHyphen(homeZipCd, inputRef) ||
      !validateStringHyphen(coZipCd, inputRef) ||
      !validateStringHyphen(homeNumber, inputRef) ||
      !validateStringHyphen(coNumber, inputRef) ||
      !validateStringHyphen(faxNumber, inputRef) ||
      !validateStringHyphen(accountNo, inputRef) ||
      !validateStringHyphen(residentNo, inputRef) ||
      !validateNumber015(number015, inputRef)
    ) {
      return;
    }
    setAntiBtn(true);
    patchEditItemDetail({ editedValues });
  };

  const cancelChanges = () => {
    setEditedValues(list);
    toggleEditing(); // 수정을 하지않고 편집 모드를 종료합니다.
  };

  useEffect(() => {
    if (groupList && groupList.groupList) {
      const listDetail = groupList?.groupList?.map((el: any) => ({ label: el.groupNm, value: el.groupSeqNo }));

      setGroupDetail(listDetail);
    }
  }, [groupList]);

  const generateRow = (key: string | undefined, label: string, value: any) => (
    <S.AddressListItemTr key={label}>
      <S.AddressListItemColumnTh>{label}</S.AddressListItemColumnTh>
      {isEditing ? (
        <S.AddressListItemTd>
          {(() => {
            switch (label) {
              case '그룹':
              case '성별':
                return (
                  <BaseSelect
                    value={editedValues[key as keyof BuddyData] as string}
                    onChange={(e) => handleInputChange(key as keyof BuddyData, e)}
                    options={label === '그룹' ? groupDetail : selectOptions2}
                  />
                );
              case '생일':
              case '결혼기념일':
                return (
                  <BaseInput
                    ref={inputRef}
                    type="date"
                    value={editedValues[key as keyof BuddyData] as string}
                    onChange={(e) => handleInputChange(key as keyof BuddyData, e.target.value)}
                  />
                );
              case '집우편번호':
                return (
                  <S.AddressBtnWrap>
                    <BaseInput
                      key={label}
                      ref={inputRef}
                      type="text"
                      name="editdetailhomepost"
                      value={(editedValues[key as keyof BuddyData] ?? '') as string}
                      onChange={(e) => handleInputChange(key as keyof BuddyData, e.target.value)}
                    />
                    <BaseButton
                      type="button"
                      width=""
                      color="#6D6C6D"
                      fontSize="1.1rem"
                      fontWeight="300"
                      backgroundColor="rgb(245, 245, 245);"
                      onClick={() => setModalState(true)}
                    >
                      검색
                    </BaseButton>
                  </S.AddressBtnWrap>
                );
              case '회사우편번호':
                return (
                  <S.AddressBtnWrap>
                    <BaseInput
                      key={label}
                      ref={inputRef}
                      type="text"
                      name="editdetailcompost"
                      value={(editedValues[key as keyof BuddyData] ?? '') as string}
                      onChange={(e) => handleInputChange(key as keyof BuddyData, e.target.value)}
                    />
                    <BaseButton
                      type="button"
                      width=""
                      color="#6D6C6D"
                      fontSize="1.1rem"
                      fontWeight="300"
                      backgroundColor="rgb(245, 245, 245);"
                      onClick={() => setModalState1(true)}
                    >
                      검색
                    </BaseButton>
                  </S.AddressBtnWrap>
                );
              case '등록일':
                return <span>{value}</span>;
              default:
                return (
                  <BaseInput
                    ref={inputRef}
                    type="text"
                    name="editdetailgroup"
                    value={(editedValues[key as keyof BuddyData] ?? '') as string}
                    onChange={(e) => handleInputChange(key as keyof BuddyData, e.target.value)}
                  />
                );
            }
          })()}
        </S.AddressListItemTd>
      ) : (
        <S.AddressListItemTd>
          {label === '성별'
            ? selectOptions2.map((el) => {
                if (el.value === value) {
                  return el.label;
                }
                return null;
              })
            : value}
        </S.AddressListItemTd>
      )}
    </S.AddressListItemTr>
  );

  const tableBody = tableRows.map(({ key, label, value }) => generateRow(key, label, value));

  // 디테일 모달에서 삭제 로직
  const deleteItem = () => {
    confirmModal(() => deleteRemoveItem([list.buddySeqNo]), '연락처 삭제', '삭제 하시겠습니까?', true);
  };

  return (
    <div>
      {/* 여기부터 모달창입니다 */}
      <S.DetailButtonWrap>
        <BaseButton
          type="button"
          width=""
          color="#6D6C6D"
          fontSize="1.1rem"
          fontWeight="300"
          backgroundColor="rgb(245, 245, 245);"
          onClick={onClickToggleModal}
        >
          상세보기
        </BaseButton>
      </S.DetailButtonWrap>
      {isModalActive ? (
        <CustomModal
          modal={isModalActive}
          setModal={setIsModalActive}
          width="700"
          height="900"
          overflow="scroll"
          element={
            <div>
              {modalState && (
                <S.ModalOverlay onClick={closeOverlay}>
                  <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} autoClose />
                </S.ModalOverlay>
              )}
              {modalState1 && (
                <S.ModalOverlay onClick={closeOverlay}>
                  <DaumPostcode style={postCodeStyle1} onComplete={onCompletePost1} autoClose />
                </S.ModalOverlay>
              )}
              <S.AddressListItemTable>
                <S.AddressListItemTbody>{tableBody}</S.AddressListItemTbody>
              </S.AddressListItemTable>
              {isEditing ? (
                <S.BtnWrap>
                  <BaseButton
                    type="button"
                    width=""
                    color="#6D6C6D"
                    fontSize="1.1rem"
                    fontWeight="300"
                    backgroundColor="rgb(245, 245, 245);"
                    onClick={saveChanges}
                    disabled={antiBtn}
                  >
                    저장
                  </BaseButton>
                  <BaseButton
                    type="button"
                    width=""
                    color="#6D6C6D"
                    fontSize="1.1rem"
                    fontWeight="300"
                    backgroundColor="rgb(245, 245, 245);"
                    onClick={cancelChanges}
                  >
                    취소
                  </BaseButton>
                </S.BtnWrap>
              ) : (
                <S.BtnWrap>
                  <BaseButton
                    type="button"
                    width=""
                    color="#6D6C6D"
                    fontSize="1.1rem"
                    fontWeight="300"
                    backgroundColor="rgb(245, 245, 245);"
                    onClick={() => setIsEditing(true)}
                  >
                    수정
                  </BaseButton>
                  <BaseButton
                    type="button"
                    width=""
                    color="#6D6C6D"
                    fontSize="1.1rem"
                    fontWeight="300"
                    backgroundColor="rgb(245, 245, 245);"
                    onClick={deleteItem}
                  >
                    삭제
                  </BaseButton>
                </S.BtnWrap>
              )}
            </div>
          }
        />
      ) : (
        ''
      )}
      {/* 여기까지 모달창입니다 */}
    </div>
  );
};

export default AddressListDetail;

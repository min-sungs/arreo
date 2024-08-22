import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { deleteRemoveItems, getDuplicationList } from '../../../apis/api/addressApis';
import { currentPageState3 } from '../../../recoil/atoms/addressList';
import BaseButton from '../../Atom/BaseButton';
import Loader from '../../common/Loader';
import Paginations01Index from '../../common/paginations/Paginations01.index';
import { useModal } from '../../hooks/customs/useModal';
import { CustomModal } from './AddressModal';
import * as S from './styles/AddressDuplicateCheck.style';
import { DuplicationData } from './types/AddressTable.types';
import { v4 as uuidv4 } from 'uuid';
import { useGroupList } from '../../hooks/customs/addressBook/useGroupList';
import { useDelete, useFetch } from '../../../apis/utils/reactQuery';

const AddressDuplicateCheck = () => {
  const [currentPage3, setCurrentPage3] = useRecoilState(currentPageState3); // 현재페이지
  const [addressTotalElement3, setAddressTotalElement3] = useState<number>(0);
  const [startPage3, setStartPage3] = useState<number>(1);
  const [activePage3, setActivePage3] = useState<number>(1);
  const [delDupState, setdelDupState] = useState(false); // 버튼 중복 클릭 방지
  const [isModalActive, setIsModalActive] = useState(false);

  const { successModal, warningModal, confirmModal } = useModal();
  const { groupList } = useGroupList();

  const queryClient = useQueryClient();

  // const { mutate: deleteDuplicateItem } = useDelete('/contacts/delete', { params: 'groupList2' }, 'all'); // 연락처 삭제

  // const { data: duplicationList, isLoading: duplicationisLoading }: any = useFetch('/contacts/duplicate', {
  //   pageNumber: currentPage3 - 1,
  //   pageSize: 10,
  // });
  const { data: duplicationList, isLoading: duplicationisLoading } = useQuery(
    ['duplicationList', currentPage3, isModalActive, groupList],
    () => getDuplicationList({ currentPage: currentPage3 - 1 }),
  );
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage3(pageNumber);
  };

  const duplicationGroup = Array.isArray(duplicationList?.content)
    ? duplicationList.content.reduce((acc: any, item: any) => {
        const keyCommNo = item?.keyCommNo;
        if (!acc[keyCommNo]) {
          acc[keyCommNo] = [];
        }
        acc[keyCommNo]?.push(item);

        return acc;
      }, {})
    : {};

  const duplicationGroupList = duplicationGroup ? Object.values(duplicationGroup) : [];

  useEffect(() => {
    if (!duplicationisLoading && duplicationList) {
      setAddressTotalElement3(duplicationList?.totalElements);
      setStartPage3(Math.floor(duplicationList && duplicationList.pageable.pageNumber / 10) * 10 + 1);
      setActivePage3(duplicationList && duplicationList.pageable.pageNumber + 1);
    }
  }, [duplicationisLoading, duplicationList, isModalActive]);

  const onClickToggleModal = useCallback(() => {
    setCurrentPage3(1);
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

  /** 중복아이템 삭제 로직
   * 1. 아이템 삭제에 대한 뮤테이션
   * 2. 아이템 버튼 이벤트
   */
  // 1 - 뮤테이션 성공시 duplicationList api 재호출
  const { mutate: deleteDuplicateItem } = useMutation(deleteRemoveItems, {
    onSuccess: () => {
      setdelDupState(false);
      queryClient.invalidateQueries(['groupList2']);
      queryClient.invalidateQueries(['newBuddyList']);
      successModal('중복연락처 삭제', '연락처를 삭제하였습니다.', true);
    },
    onError: (error: Error) => {
      setdelDupState(false);
      warningModal('중복연락처 삭제', `에러 발생: ${error.message}`, true);
    },
  });

  // 2 - 아이템 삭제 버튼 클릭시 모달로 확인 후 뮤테이트로 보내는 값
  const deleteDuplicateItemOnClick = (buddySeqNo: number) => {
    setdelDupState(true);
    const buddySeqNoArray = [buddySeqNo];
    confirmModal(
      () =>
        deleteDuplicateItem(
          buddySeqNoArray,
          //   {
          //   onSuccess: () => {
          //     queryClient.invalidateQueries(['groupList2']);
          //     successModal('중복연락처 삭제', '연락처를 삭제하였습니다.', true);
          //   },
          //   onError: (error: Error) => {
          //     warningModal('중복연락처 삭제', `에러 발생: ${error.message}`, true);
          //   },
          // }
        ),
      '중복연락처 삭제',
      '주소록에서 삭제됩니다. 삭제 하시겠습니까?',
      true,
      undefined,
      () => setdelDupState(false),
    );
  };

  return (
    <div className="DuplicateCheckZone">
      {/* 여기부터 모달창입니다 */}
      <BaseButton
        width="100px"
        height="30px"
        fontSize="12px"
        fontWeight="bold"
        color="#FFFFFF"
        backgroundColor="#0D42E5"
        onClick={onClickToggleModal}
        className="DuplicateCheckBtn"
      >
        중복정리
      </BaseButton>
      {isModalActive ? (
        <CustomModal
          modal={isModalActive}
          setModal={setIsModalActive}
          width="650"
          height="600"
          overflow="scroll"
          element={
            <S.DuplicateContainer>
              <S.ComponentSpace>
                {!duplicationList ? (
                  <Loader />
                ) : (
                  <S.DuplicateTable>
                    <S.DuplicateThead>
                      <S.DuplicateHTr>
                        <S.DuplicateTh>그룹</S.DuplicateTh>
                        <S.DuplicateTh>이름</S.DuplicateTh>
                        <S.DuplicateTh>휴대폰번호</S.DuplicateTh>
                        <S.DuplicateTh>등록일</S.DuplicateTh>
                      </S.DuplicateHTr>
                    </S.DuplicateThead>
                    {duplicationGroupList &&
                      duplicationGroupList?.map((group: any) => (
                        <S.DuplicateGroup key={uuidv4()}>
                          {group.map((list: DuplicationData) => (
                            <S.DuplicateTbody key={list?.buddySeqNo}>
                              <S.DuplicateBTr key={list?.buddySeqNo}>
                                <S.DuplicateTd>{list?.groupNm}</S.DuplicateTd>
                                <S.DuplicateTd>{list?.buddyNm}</S.DuplicateTd>
                                <S.DuplicateTd>{list?.keyCommNo}</S.DuplicateTd>
                                <S.DuplicateTd>{list?.regDt}</S.DuplicateTd>
                                <S.DuplicateTd>
                                  <S.ButtonWrap>
                                    <BaseButton
                                      width=""
                                      color="#6D6C6D"
                                      fontSize="1.1rem"
                                      fontWeight="300"
                                      backgroundColor="transparent"
                                      disabled={delDupState}
                                      onClick={() => deleteDuplicateItemOnClick(list?.buddySeqNo)}
                                    >
                                      <img src="/img/addressbook/Delete.svg" alt="add" width="12px" height="12px" />
                                    </BaseButton>
                                  </S.ButtonWrap>
                                </S.DuplicateTd>
                              </S.DuplicateBTr>
                            </S.DuplicateTbody>
                          ))}
                        </S.DuplicateGroup>
                      ))}
                  </S.DuplicateTable>
                )}
              </S.ComponentSpace>
              <S.PainationInner>
                <Paginations01Index
                  dataCount={addressTotalElement3}
                  startPage={startPage3}
                  setStartPage={setStartPage3}
                  activePage={activePage3}
                  setActivePage={setActivePage3}
                  eventHook={handlePageChange}
                />
              </S.PainationInner>
            </S.DuplicateContainer>
          }
        />
      ) : null}
      {/* 여기까지 모달창입니다 */}
    </div>
  );
};
export default AddressDuplicateCheck;

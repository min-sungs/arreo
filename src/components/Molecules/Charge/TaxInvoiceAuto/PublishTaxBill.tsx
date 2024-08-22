import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import ATitle from '../../../Atom/ATitle';
import * as S from './style/PublishTaxBill.styles';
import BaseButton from '../../../Atom/BaseButton';
import Loader from '../../../common/Loader';
import { v4 as uuidv4 } from 'uuid';
import DaumPostcode from 'react-daum-postcode';
import { usePublishTaxBill } from "../../../hooks/customs/charge/TaxInvoiceAuto/usePublishTaxBill";
import { formatDateBase } from '../../../../apis/utils/formats/dateFormatUtil';
import { string } from 'yup';

interface BuisnessInfoInsertProps {
  isInsertVisible: boolean;
  setIsInsertVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface mbrCorpListType {
  corpId: number;
  등록상태초기: string;
  confirmState: string;
  corpName: string;
  corpNum: string;
  corpCeo: string;
  corpAddress: string;
  corpType: string;
  corpClass: string;
  corpFile: FileList;
  managerDept: string;
  managerName: string;
  managerPhone: string;
  managerEmail: string;
};

interface payListType {
  msgId: string;
  wrtDttm: string;
  payAmt: number;
}

const PublishTaxBill: React.FC<BuisnessInfoInsertProps> = ({ isInsertVisible, setIsInsertVisible }) => {

  const {
    modalState,
    setModalState,
    closeOverlay,
    postCodeStyle,
    onCompletePost,
    insertOpen,
    thead,
    MbrCorpData,
    selectedOption,
    onValue,
    handleArrowClick,
    setIsOn,
    expandedItem,
    handleSubmit,
    handleDelete,
    onSubmit,
    onSubmit2,
    register,
    fileDownload,
    CorpLoading,
    payLoading,
    payThead,
    payResultData,
    checkedBox,
    handleCheckBoxClick,
    isOn,
    getStateCategory,
  } = usePublishTaxBill(isInsertVisible, setIsInsertVisible);


  return (
    <>
      {modalState && (
        <S.ModalOverlay onClick={closeOverlay}>
          <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} autoClose />
        </S.ModalOverlay>
      )}
      <S.ListContainer>
        <S.CorpInfoListContainer>
          <S.titleCover>
            <ATitle type='sub' text='등록된 사업자 리스트' color='#0D42E5' />
            <BaseButton
              type="button"
              width="100px"
              height="30px"
              backgroundColor="#222"
              fontWeight="bold"
              color="#fff"
              fontSize='1.4rem'
              onClick={insertOpen}
            >추가하기</BaseButton>
          </S.titleCover>
          <S.CorpUlHead>
            {thead.map((head) => (
              <S.CorpLi key={head}>{head}</S.CorpLi>
            ))}
          </S.CorpUlHead>
          {MbrCorpData?.map((data: mbrCorpListType, index: any) => (
            <S.CorpUl key={uuidv4()}>
              <S.CorpLiBody>
                <div>
                  <S.CheckBox
                    type='radio'
                    name='corpId'
                    checked={+selectedOption === MbrCorpData[index].corpId}
                    value={MbrCorpData[index].corpId}
                    onChange={(e) => onValue(data.corpId.toString(), e, data)}
                  />
                </div>
                <div>{data.corpName}</div>
                <div>{data.corpNum}</div>
                <div>
                  {getStateCategory(data.confirmState)}
                </div>
                <S.BottomArrow onClick={() => { handleArrowClick(index); setIsOn(0); }} className={expandedItem === index ? 'on' : 'off'}><div> </div></S.BottomArrow>
              </S.CorpLiBody>
              {expandedItem === index && (
                <S.CorpInfoDetail style={{ paddingRight: '0', borderBottom: '1px solid #a1a1a1' }}>
                  <S.TopCorpInfoDetail>
                    <S.LiRow style={{ justifyContent: 'space-between' }} className='flexWrap'>
                      <ATitle type='main' text='등록상태' color='#222' />
                      <BaseButton
                        type="submit"
                        width="100px"
                        height="30px"
                        backgroundColor="#222"
                        fontWeight="bold"
                        color="#fff"
                        fontSize='1.4rem'
                        className='right'
                        onClick={handleSubmit(handleDelete)}
                      >삭제하기</BaseButton>
                    </S.LiRow>
                    <S.LiRow style={{ marginBottom: '40px', alignItems: 'center' }} className='flexWrap'>
                      {/* <S.LabelStrong>등록상태</S.LabelStrong> */}
                      <S.TextSpan>{getStateCategory(data.confirmState)}</S.TextSpan>
                      <S.TextSpan style={{ marginLeft: '50px' }}>원하는 항목을 수정 할 수 있습니다.</S.TextSpan>
                    </S.LiRow>

                    <S.LiRow>
                      <ATitle type='main' text='기본정보' color='#222' />
                    </S.LiRow>
                    <S.LiRow>
                      <S.corpInput
                        type='hidden'
                        {...register(`MbrCorpList[${index}].id`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.corpId}
                      />
                      <S.LabelStrong>법인명</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].법인명`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.corpName}
                      />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>사업자등록번호</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].사업자등록번호`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.corpNum}
                      />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>대표명</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].대표명`, {
                          required: '해당 필드는 필수입니다.',
                          minLength: {
                            value: 2,
                            message: '2글자 이상 입력해주세요.'
                          },
                        })}
                        defaultValue={data.corpCeo}
                      />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>주소지</S.LabelStrong>
                      <S.InputSpanCover>
                        <S.corpInput className='address'
                          type='text'
                          style={{ width: `362px`, textOverflow: 'ellipsis' }}
                          {...register(`MbrCorpList[${index}].주소지`, {
                            required: '해당 필드는 필수입니다.',
                          })}
                          defaultValue={data.corpAddress}
                        />
                      </S.InputSpanCover>
                      <BaseButton
                        width="60px"
                        height="22px"
                        backgroundColor="#8C8C8C"
                        color="#fff"
                        marginLeft='5px'
                        onClick={() => setModalState(true)}
                      >
                        검색
                      </BaseButton>
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>업태 및 업종</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].업태`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.corpType}
                      />
                      <S.corpInput
                        type='text'
                        style={{ marginLeft: '20px' }}
                        {...register(`MbrCorpList[${index}].업종`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.corpClass}
                      />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>첨부파일</S.LabelStrong>

                      {isOn === 0 ? (
                        <S.corpInput
                          type='text'
                          style={{ border: 0, cursor: 'pointer', width: `${data.corpFile.length * 9.5}px`, textOverflow: 'ellipsis' }}
                          {...register(`MbrCorpList[${index}].첨부파일`, {
                            required: '해당 필드는 필수입니다.',
                          })}
                          value={data.corpFile.toString()}
                          readOnly
                          onClick={() => fileDownload(data.corpId, data.corpFile)}
                        />
                      ) : (
                        <S.corpInput
                          type='file'
                          {...register(`MbrCorpList[${index}].첨부파일`, {
                            required: '해당 필드는 필수입니다.',
                          })}
                        />)}

                      <BaseButton
                        type="button"
                        width="60px"
                        height="22px"
                        backgroundColor="#222"
                        fontWeight="bold"
                        color="#fff"
                        marginLeft='5px'
                        onClick={() => { setIsOn(1); }}
                      >수정
                      </BaseButton>

                    </S.LiRow>
                  </S.TopCorpInfoDetail>

                  <S.BottomCorpInfoDetail>
                    <S.LiRow style={{ width: '100%' }}>
                      <ATitle type='main' text='담당자 정보' color='#222' />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>부 서</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].부서`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.managerDept}
                      />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>담당자</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].담당자`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.managerName}
                      />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>연락처</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].연락처`, {
                          required: '해당 필드는 필수입니다.',
                          minLength: {
                            value: 11,
                            message: '연락처를 확인해주세요.'
                          }
                        })}
                        defaultValue={data.managerPhone}
                      />
                    </S.LiRow>
                    <S.LiRow>
                      <S.LabelStrong>이메일</S.LabelStrong>
                      <S.corpInput
                        type='text'
                        {...register(`MbrCorpList[${index}].이메일`, {
                          required: '해당 필드는 필수입니다.',
                        })}
                        defaultValue={data.managerEmail}
                      />
                    </S.LiRow>
                    <BaseButton
                      type="submit"
                      width="340px"
                      height="30px"
                      backgroundColor="#0D42E5"
                      fontWeight="bold"
                      color="#fff"
                      fontSize='1.4rem'
                      className='right'
                      onClick={handleSubmit(onSubmit)}
                    >수정하기</BaseButton>
                  </S.BottomCorpInfoDetail>
                </S.CorpInfoDetail>
              )}
            </S.CorpUl>
          ))}
          {CorpLoading && <Loader />}
        </S.CorpInfoListContainer>

        <S.PayListContainer>
          <ATitle type="sub" text="결제 내역" color="#0D42E5" />
          <S.BaseGuideP>신청 가능 리스트 (한달 전까지 가능, 최대 4개 선택 가능)</S.BaseGuideP>
          <S.tableContainer>
            <S.PaymentHistoryTable>
              <S.TableThead>
                <S.TR>
                  {payThead.map((head) => (
                    <th key={head}>{head}</th>
                  ))}
                </S.TR>
              </S.TableThead>

              {/* <BaseTable type="line" thead={payThead} tbody={payResultData} />
            {!isSuccess && (
              <Loader />
            )} */}
              <S.TableTBody>
                {payResultData?.map((data: payListType) => (
                  <S.TR key={uuidv4()}>
                    <td>
                      <S.CheckBox
                        type='checkbox'
                        name='msgId'
                        value={data.msgId}
                        checked={checkedBox[data.msgId]}
                        onChange={(e) => handleCheckBoxClick(data.msgId, e, data)}
                      />
                    </td>
                    <td>{formatDateBase(data.wrtDttm)}</td>
                    <td style={{ textAlign: 'right', paddingRight: '5px' }}>
                      <S.PayInput disabled value={data.payAmt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} />원
                    </td>
                  </S.TR>
                ))}
                {payLoading && <Loader />}
              </S.TableTBody>
            </S.PaymentHistoryTable>

            {/* <Paginations01Index
              dataCount={totalPage}
              startPage={startPage}
              setStartPage={setStartPage}
              activePage={activePage}
              setActivePage={setActivePage}
              eventHook={handlePageChange}
            /> */}
          </S.tableContainer>

          <BaseButton
            type='submit'
            width='135px'
            height='30px'
            backgroundColor='#0D42E5'
            color='#fff'
            fontSize='1.4rem'
            fontWeight='bold'
            onClick={handleSubmit(onSubmit2)}
          >세금계산서 발행
          </BaseButton>
        </S.PayListContainer>

      </S.ListContainer>


    </>
  );
};

export default PublishTaxBill;

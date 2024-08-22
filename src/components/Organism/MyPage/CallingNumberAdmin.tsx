import React from 'react';
import styled from 'styled-components';
import ATitle from '../../Atom/ATitle';
import BaseButton from '../../Atom/BaseButton';

import CallingNumberBottom from '../../Molecules/MyPage/CallingNumberMoleCules/CallingNumberBottom';
import CallingNumberInput from '../../Molecules/MyPage/CallingNumberMoleCules/CallingNumberInput';
import CallingNumberList from '../../Molecules/MyPage/CallingNumberMoleCules/CallingNumberList';
import CallingNumberTitle from '../../Molecules/MyPage/CallingNumberMoleCules/CallingNumberTitle';
import { useCallingNumberAdmin } from '../../hooks/customs/myPage/useCallingNumberAdmin';
/** 스타일 컴포넌트 파일분리 */
// 테이블을 감싸는 컨테이너

// 테이블을 감싸는 컨테이너
const BWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: 0 0 4rem 0;
  gap: 2rem;
  border-top: 2px solid #a1a1a1;
`;
// 테이블 요소
const BContents = styled.table`
  width: 100%;
  background-color: transparent;
`;

// 테이블 바디
const BContentsBody = styled.tbody`
  width: 80%;
  display: flex;
`;
// 테이블 행
const BContentsRow = styled.tr`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
`;

// 테이블 바디 셀
const BContentsBodyCell = styled.td`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100% - 0.5rem;
  padding: 1.25rem;
  border-bottom: 1px solid #d1d1d1;
  font-size: 1.3rem;
`;
// 버튼 컨테이너
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
// 타이틀 + 텍스트 컨테이너

// 체크박스
const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const CallingNumberAdmin = () => {
  const { callingNumberList, handleSubmit, handleDelete, register, errors, handleCertifyClick, allCallingNumberList } =
    useCallingNumberAdmin();

  return (
    <>
      <CallingNumberTitle />
      <ATitle type="sub" text="발신번호 등록" color="#0D42E5" />
      <BWrapper>
        <CallingNumberList
          allCallingNumberList={allCallingNumberList}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
        />
        <BContents>
          {/* <CallingNumberTableHead radioValue={radioValue} />
          <BContentsBody>
            <BContentsRow>
              <CallingNumberInput radioValue={radioValue} />
            </BContentsRow>
          </BContentsBody> */}
          <CallingNumberInput register={register} errors={errors} />
        </BContents>
      </BWrapper>
      <ButtonWrapper>
        <BaseButton
          width="120px"
          height="30px"
          fontSize="14px"
          fontWeight="bold"
          color="#FFFFFF"
          backgroundColor="#0D42E5"
          onClick={handleSubmit(handleCertifyClick)}
        >
          등록하기
        </BaseButton>
      </ButtonWrapper>
      <CallingNumberBottom />
    </>
  );
};
export default CallingNumberAdmin;

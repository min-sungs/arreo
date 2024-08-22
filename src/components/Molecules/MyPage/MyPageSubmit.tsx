import React, { FC } from 'react';
import styled from 'styled-components';
import BaseButton from '../../Atom/BaseButton';

interface MyPageSubmitProps {
  onEdit?: () => void;
  onCancel?: () => void;
  onPhoneValidate?: () => void;
  onValidate?: () => void;
  onPostDomain?: () => void;
  onConfirm?: () => void;
}

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em; // 버튼 사이의 간격
`;

const MyPageSubmit: FC<MyPageSubmitProps> = ({
  onEdit,
  onCancel,
  onPhoneValidate,
  onValidate,
  onPostDomain,
  onConfirm,
}) => {
  return (
    <ButtonGroup>
      {onEdit && (
        <BaseButton onClick={onEdit} backgroundColor="#0D42E5" color="#FFFFFF">
          수정
        </BaseButton>
      )}
      {onCancel && (
        <BaseButton onClick={onCancel} backgroundColor="#000000" color="#FFFFFF">
          취소
        </BaseButton>
      )}
      {onPhoneValidate && (
        <BaseButton onClick={onPhoneValidate} backgroundColor="#0D42E5" color="#FFFFFF">
          휴대폰 인증하기
        </BaseButton>
      )}
      {onValidate && (
        <BaseButton onClick={onValidate} backgroundColor="#0D42E5" color="#FFFFFF">
          인증하기
        </BaseButton>
      )}
      {onPostDomain && (
        <BaseButton onClick={onPostDomain} backgroundColor="#0D42E5" color="#FFFFFF">
          화이트도메인 등록
        </BaseButton>
      )}
      {onConfirm && (
        <BaseButton onClick={onConfirm} backgroundColor="#0D42E5" color="#FFFFFF">
          확인
        </BaseButton>
      )}
    </ButtonGroup>
  );
};

export default MyPageSubmit;

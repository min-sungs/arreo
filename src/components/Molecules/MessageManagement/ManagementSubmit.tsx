import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import BaseButton from '../../Atom/BaseButton';

const ButtonGroup = styled.div`
  display: flex;
  gap: 1em; // 버튼 사이의 간격
`;

export interface IButtonList {
  type?: any;
  width?: string;
  color?: string;
  text?: string;
  func?: () => void;
}

interface IManagementSubmit {
  buttonList: IButtonList[];
}

const ManagementSubmit = ({ buttonList }: IManagementSubmit) => {
  return (
    <ButtonGroup>
      {buttonList?.map((el) => (
        <BaseButton
          key={uuidv4()}
          type={el?.type}
          width={el.width || '100px'}
          height="30px"
          marginTop="25px"
          onClick={el.func} // 각 요소의 func 함수를 클릭 핸들러로 설정
          fontSize="1.4rem"
          fontWeight="bold"
          backgroundColor={el.color} // 각 요소의 color 속성을 배경색으로 설정
          color="#fff"
        >
          {el.text}
        </BaseButton>
      ))}
    </ButtonGroup>
  );
};

export default ManagementSubmit;

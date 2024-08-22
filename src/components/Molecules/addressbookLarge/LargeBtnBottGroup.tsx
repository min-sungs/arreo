import React from 'react';
import BaseButton from 'components/Atom/BaseButton';
import * as S from './styles/LargeBtnBottGroup.styles.ts';

interface ILargeBtnBottGroup {
  setOpenLargeToggle: any;
}

const LargeBtnBottGroup = ({ setOpenLargeToggle }: ILargeBtnBottGroup) => {
  return (
    <S.LargeBtnBottGroup>
      <BaseButton onClick={() => setOpenLargeToggle((prev: any) => prev && false)}>돌아가기</BaseButton>
      {/* <BaseButton>저장하기</BaseButton>s */}
    </S.LargeBtnBottGroup>
  );
};

export default LargeBtnBottGroup;

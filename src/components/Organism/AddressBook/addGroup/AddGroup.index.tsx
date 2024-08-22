import React, { useEffect, useRef } from 'react';
import BaseButton from '../../../commons/buttons/BaseButton.tsx';
import * as S from './styles/AddGroup.style.ts';
import { useAddGroup } from '../../../hooks/customs/addressBook/useAddGroup.ts';

interface IAddGroup {
  addGroupOpenHandle: React.MouseEventHandler<HTMLButtonElement>;
  addGroupOpen: boolean;
}

const AddGroup = ({ addGroupOpenHandle, addGroupOpen }: IAddGroup) => {
  const { addGroupSubmitHandle, addGroupValueHandle, addGroupValue, addGroupState } = useAddGroup();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (addGroupOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [addGroupOpen]);

  return (
    <S.AddGroupComponent onSubmit={addGroupSubmitHandle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 17 17" fill="none">
        <path d="M12.8939 1.17161C13.0038 1.06173 13.1529 1 13.3083 1C13.4637 1 13.6128 1.06173 13.7227 1.17161L16.0672 3.51616C16.1218 3.5706 16.1651 3.63528 16.1947 3.70649C16.2242 3.7777 16.2394 3.85404 16.2394 3.93114C16.2394 4.00824 16.2242 4.08458 16.1947 4.15579C16.1651 4.227 16.1218 4.29168 16.0672 4.34613L11.4461 8.96722C11.357 9.05661 11.2541 9.13103 11.1413 9.18761L6.53781 11.4888C6.42787 11.5437 6.30346 11.5626 6.18217 11.5429C6.06088 11.5232 5.94884 11.4659 5.86189 11.3791C5.77494 11.2923 5.71747 11.1803 5.69761 11.0591C5.67775 10.9378 5.69651 10.8134 5.75122 10.7034L8.05239 6.09867C8.10897 5.98588 8.18339 5.88296 8.27278 5.79388L12.8939 1.17161ZM13.3089 2.41539L9.1004 6.62385L7.88475 9.05749L8.18251 9.35524L10.6173 8.13843L14.8246 3.93114L13.3089 2.41539ZM10.3782 2.17273L9.20591 3.34501H4.39959C3.89786 3.34501 3.55555 3.34501 3.29296 3.36728C3.03506 3.38838 2.90377 3.42589 2.81233 3.47278C2.59177 3.58517 2.41244 3.7645 2.30005 3.98507C2.25316 4.0765 2.21565 4.2078 2.19455 4.4657C2.17227 4.72829 2.17227 5.07059 2.17227 5.57232V12.8404C2.17227 13.3421 2.17227 13.6844 2.19455 13.947C2.21565 14.2049 2.25316 14.3362 2.30005 14.4277C2.41244 14.6482 2.59177 14.8276 2.81233 14.9399C2.90377 14.9868 3.03506 15.0244 3.29296 15.0455C3.55673 15.0677 3.89786 15.0677 4.39959 15.0677H11.6677C12.1694 15.0677 12.5117 15.0677 12.7743 15.0455C13.0322 15.0244 13.1635 14.9868 13.2549 14.9399C13.4755 14.8276 13.6548 14.6482 13.7672 14.4277C13.8141 14.3362 13.8516 14.2049 13.8727 13.947C13.895 13.6833 13.895 13.3421 13.895 12.8404V8.03409L15.0673 6.86182V12.8639C15.0673 13.3363 15.0673 13.7255 15.0415 14.0432C15.0145 14.3726 14.9571 14.6762 14.8117 14.9599C14.5869 15.401 14.2283 15.7597 13.7871 15.9844C13.5023 16.1298 13.1998 16.1872 12.8704 16.2142C12.5539 16.24 12.1635 16.24 11.6923 16.24H4.37614C3.90372 16.24 3.51452 16.24 3.19684 16.2142C2.86743 16.1872 2.56381 16.1298 2.28012 15.9844C1.83899 15.7597 1.48033 15.401 1.25556 14.9599C1.11019 14.675 1.05275 14.3726 1.02579 14.0432C1 13.7266 1 13.3363 1 12.8639V5.54888C1 5.07645 1 4.68726 1.02579 4.36957C1.05275 4.04016 1.11019 3.73654 1.25556 3.45285C1.48033 3.01172 1.83899 2.65306 2.28012 2.42829C2.56498 2.28293 2.86743 2.22549 3.19684 2.19852C3.51335 2.17273 3.90372 2.17273 4.37614 2.17273H4.39959H10.3782Z" fill="#D6D6DC" stroke="#D6D6DC" />
      </svg>
      <div className="addGroupRightWrap">
        <input
          type="text"
          placeholder="그룹명 입력"
          onChange={(e) => addGroupValueHandle(e)}
          value={addGroupValue}
          ref={inputRef}
        />
        <div className="addGroupBtnGroup">
          <BaseButton
            width="40px"
            height="25px"
            fontSize="1.1rem"
            fontWeight="600"
            border="none"
            borderRadius="5px"
            backgroundColor="#0D42E5"
            color="#fff"
            type="submit"
            disabled={addGroupState}
            onClick={() => addGroupSubmitHandle}
          >
            저장
          </BaseButton>
          <BaseButton
            width="40px"
            height="25px"
            fontSize="1.1rem"
            fontWeight="600"
            border="none"
            borderRadius="5px"
            backgroundColor="#D6D6DC"
            color="#191919"
            onClick={addGroupOpenHandle}
          >
            취소
          </BaseButton>
        </div>
      </div>
    </S.AddGroupComponent>
  );
};

export default AddGroup;

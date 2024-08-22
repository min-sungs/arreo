import React, { memo, useState } from 'react';

import AddressCheckBox from '../../../pages/AddressPage/components/common/CheckBox';
import BaseButton from '../../Atom/BaseButton';
import BaseInput from '../../Atom/BaseInput.tsx';
import { useCheckGroup } from '../../hooks/customs/addressBook/useCheckGroup.ts';
import AddGroup from './addGroup/AddGroup.index.tsx';
import * as S from './styles/GroupList.styles';
import Loader from 'components/common/Loader.tsx';

interface GroupData {
  buddyCount: number;
  groupNm: string;
  groupSeqNo: number;
  usrKey: string;
}

interface IGroupList {
  groupList: any;
  setCheckedGroup: React.Dispatch<React.SetStateAction<number | null>>;
  addGroupOpenHandle: React.MouseEventHandler<HTMLButtonElement>;
  addGroupOpen: boolean;
  setDeleteGroupList: (list: number[]) => void;
  editOpen: { [key: number]: boolean };
  groupDoubleClickHandle: (groupSeqNo: number) => void;
  groupEditOnkeyDownHandle: any;
  groupEditValueHandle: any;
  groupEditValue: any;
  deleteBinAllListOnClick: React.MouseEventHandler<HTMLButtonElement>;
  recycleBinClickHandle: React.MouseEventHandler<HTMLDivElement>;
  setGroupClickStyles: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
  clickGroupStyles: Record<number, boolean>;
  clickStyle: { borderRadius: string; backgroundColor: string; boxShadow: string };
  childrenClickStyle: { fontWeight: string };
  recycleBinOpen: boolean;
  restoreBinAllListOnClick: React.MouseEventHandler<HTMLButtonElement>;
  binAllBtnState: boolean;
  deleteDelGroupsIsLoading: any;
  postAdressBinAllListIsLoading: any;
  setOpenLargeToggle: any;
}

const GroupList = ({
  groupList,
  setCheckedGroup,
  addGroupOpenHandle,
  addGroupOpen,
  setDeleteGroupList,
  editOpen,
  groupDoubleClickHandle,
  groupEditOnkeyDownHandle,
  groupEditValueHandle,
  groupEditValue,
  deleteBinAllListOnClick,
  recycleBinClickHandle,
  setGroupClickStyles,
  clickGroupStyles,
  childrenClickStyle,
  clickStyle,
  restoreBinAllListOnClick,
  binAllBtnState,
  deleteDelGroupsIsLoading,
  postAdressBinAllListIsLoading,
  setOpenLargeToggle,
}: IGroupList) => {
  const { selectAll, toggleSelectAll, updateDeleteGroupList, checkedGroupList } = useCheckGroup({
    groupList,
    setDeleteGroupList,
  });

  const onClickGroupNm = (groupSeqNo: number | null) => {
    setCheckedGroup(groupSeqNo);
    if (typeof groupSeqNo === 'number') {
      setGroupClickStyles(() => ({
        [groupSeqNo]: true,
      }));
    } else {
      setGroupClickStyles({});
    }
    setOpenLargeToggle((prev: boolean) => !prev && false);
  };

  return (
    <S.Container id={'addressGrpList'}>
      {(deleteDelGroupsIsLoading || postAdressBinAllListIsLoading) && <Loader />}
      <S.Inner>
        <S.GroupListGroup>
          <S.Top>
            <S.GroupCheck>
              <AddressCheckBox onChange={(e) => toggleSelectAll(e)} checked={selectAll} />
              <S.GroupAll onClick={() => onClickGroupNm(null)}>
                전체그룹 ({groupList?.groupList?.length || '0'})
              </S.GroupAll>
            </S.GroupCheck>
          </S.Top>
          {addGroupOpen && <AddGroup addGroupOpenHandle={addGroupOpenHandle} addGroupOpen={addGroupOpen} />}
          <S.Middle>
            <S.GroupListBody>
              <S.GroupListWrap>
                <S.GroupListDrag>
                  {groupList?.groupList?.map((el: any) => (
                    <S.MiddleList key={el.groupSeqNo} style={clickGroupStyles[el.groupSeqNo] ? clickStyle : undefined}>

                      {/* 더블 클릭 했을 때 */}
                      {editOpen[el.groupSeqNo] ? (
                        <S.MiddleListAfterDiv>
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M12.8939 1.17161C13.0038 1.06173 13.1529 1 13.3083 1C13.4637 1 13.6128 1.06173 13.7227 1.17161L16.0672 3.51616C16.1218 3.5706 16.1651 3.63528 16.1947 3.70649C16.2242 3.7777 16.2394 3.85404 16.2394 3.93114C16.2394 4.00824 16.2242 4.08458 16.1947 4.15579C16.1651 4.227 16.1218 4.29168 16.0672 4.34613L11.4461 8.96722C11.357 9.05661 11.2541 9.13103 11.1413 9.18761L6.53781 11.4888C6.42787 11.5437 6.30346 11.5626 6.18217 11.5429C6.06088 11.5232 5.94884 11.4659 5.86189 11.3791C5.77494 11.2923 5.71747 11.1803 5.69761 11.0591C5.67775 10.9378 5.69651 10.8134 5.75122 10.7034L8.05239 6.09867C8.10897 5.98588 8.18339 5.88296 8.27278 5.79388L12.8939 1.17161ZM13.3089 2.41539L9.1004 6.62385L7.88475 9.05749L8.18251 9.35524L10.6173 8.13843L14.8246 3.93114L13.3089 2.41539ZM10.3782 2.17273L9.20591 3.34501H4.39959C3.89786 3.34501 3.55555 3.34501 3.29296 3.36728C3.03506 3.38838 2.90377 3.42589 2.81233 3.47278C2.59177 3.58517 2.41244 3.7645 2.30005 3.98507C2.25316 4.0765 2.21565 4.2078 2.19455 4.4657C2.17227 4.72829 2.17227 5.07059 2.17227 5.57232V12.8404C2.17227 13.3421 2.17227 13.6844 2.19455 13.947C2.21565 14.2049 2.25316 14.3362 2.30005 14.4277C2.41244 14.6482 2.59177 14.8276 2.81233 14.9399C2.90377 14.9868 3.03506 15.0244 3.29296 15.0455C3.55673 15.0677 3.89786 15.0677 4.39959 15.0677H11.6677C12.1694 15.0677 12.5117 15.0677 12.7743 15.0455C13.0322 15.0244 13.1635 14.9868 13.2549 14.9399C13.4755 14.8276 13.6548 14.6482 13.7672 14.4277C13.8141 14.3362 13.8516 14.2049 13.8727 13.947C13.895 13.6833 13.895 13.3421 13.895 12.8404V8.03409L15.0673 6.86182V12.8639C15.0673 13.3363 15.0673 13.7255 15.0415 14.0432C15.0145 14.3726 14.9571 14.6762 14.8117 14.9599C14.5869 15.401 14.2283 15.7597 13.7871 15.9844C13.5023 16.1298 13.1998 16.1872 12.8704 16.2142C12.5539 16.24 12.1635 16.24 11.6923 16.24H4.37614C3.90372 16.24 3.51452 16.24 3.19684 16.2142C2.86743 16.1872 2.56381 16.1298 2.28012 15.9844C1.83899 15.7597 1.48033 15.401 1.25556 14.9599C1.11019 14.675 1.05275 14.3726 1.02579 14.0432C1 13.7266 1 13.3363 1 12.8639V5.54888C1 5.07645 1 4.68726 1.02579 4.36957C1.05275 4.04016 1.11019 3.73654 1.25556 3.45285C1.48033 3.01172 1.83899 2.65306 2.28012 2.42829C2.56498 2.28293 2.86743 2.22549 3.19684 2.19852C3.51335 2.17273 3.90372 2.17273 4.37614 2.17273H4.39959H10.3782Z" fill="#D6D6DC" stroke="#D6D6DC" />
                          </svg>
                          <BaseInput
                            type="text"
                            key={el.groupSeqNo}
                            placeholder={el.groupNm}
                            onKeyDown={(e) => groupEditOnkeyDownHandle(e, el)}
                            onChange={(e) => groupEditValueHandle(e.target.value, el.groupSeqNo)}
                            value={groupEditValue[el.groupSeqNo] || ''}
                            autoFocus={editOpen[el.groupSeqNo]}
                          />
                        </S.MiddleListAfterDiv>
                      ) : (
                        /* 기본 */
                        <S.MiddleListBasicDiv>
                          <AddressCheckBox
                            onChange={() => updateDeleteGroupList(el.groupSeqNo)}
                            checked={checkedGroupList.includes(el.groupSeqNo)} // 체크 여부를 deleteGroupList에 따라 설정
                          />
                          <S.GroupNameBox
                            style={clickGroupStyles[el.groupSeqNo] ? childrenClickStyle : undefined}
                            onClick={() => onClickGroupNm(el.groupSeqNo)}
                            onDoubleClick={() => groupDoubleClickHandle(el.groupSeqNo)}
                          >
                            {el?.groupNm} <span>({el?.buddyCount})</span>
                          </S.GroupNameBox>
                        </S.MiddleListBasicDiv>
                      )}
                    </S.MiddleList>
                  ))}
                </S.GroupListDrag>
              </S.GroupListWrap>
            </S.GroupListBody>
          </S.Middle>
        </S.GroupListGroup>

        <S.Bottom>
          <S.BinBtnWrap onClick={recycleBinClickHandle}>
            <S.CustomDeleteIcon />
            <span>휴지통</span>
            <span className="trashCanNum">({groupList?.recycleCount || '0'})</span>
          </S.BinBtnWrap>

          <S.TrashBoxBtnGroup>
            {/* <BaseButton
              type="button"
              width="52px"
              height="16px"
              color="#0D42E5"
              fontSize="1rem"
              fontWeight="500"
              borderRadius="20px"
              border="1px solid rgba(40, 0, 223, 0.60)"
              backgroundColor="rgb(214, 214, 220)"
              disabled={binAllBtnState}
              onClick={restoreBinAllListOnClick}
            >
              전체복원
            </BaseButton> */}

            <BaseButton
              type="button"
              width="52px"
              height="16px"
              color="#98999A"
              fontSize="1rem"
              fontWeight="500"
              borderRadius="20px"
              border="1px solid #98999A"
              backgroundColor="transparent"
              disabled={binAllBtnState}
              onClick={deleteBinAllListOnClick}
            >
              비우기
            </BaseButton>
          </S.TrashBoxBtnGroup>
        </S.Bottom>
      </S.Inner>
    </S.Container>
  );
};

export default memo(GroupList);

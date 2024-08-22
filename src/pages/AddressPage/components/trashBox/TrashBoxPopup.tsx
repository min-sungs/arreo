import React from 'react';
import BaseButton from '../../../../components/Atom/BaseButton';
import { useCheckBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useCheckBin';
import { useDeleteBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useDeleteBin';
import { useRestoreBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useRestoreBin';
import { useSearchBin } from '../../../../components/hooks/customs/addressBook/recycleBin/useSearchBin';
import AddressCheckBox from '../common/CheckBox';
import * as S from './TrashBoxPopup.styles';
import { useGetBinList } from '../../../../components/hooks/customs/addressBook/recycleBin/useGetBinList';
import Loader from 'components/common/Loader';

interface ITrashBoxPopup {
  recycleBinClickHandle: React.MouseEventHandler<HTMLButtonElement>;
  groupList: any;
  recycleBinOpen: boolean;
}

const TrashBoxPopup = ({ recycleBinClickHandle, groupList, recycleBinOpen }: ITrashBoxPopup) => {
  const {
    recycleBinList,
    recycleBinListLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    recycleBinRefetch,
    handleScroll,
  } = useGetBinList({ recycleBinOpen });
  const {
    selectSwitch,
    setSelectSwitch,
    selectState,
    selectArrValue,
    onClickSelectListButton,
    onChangeSearchInput,
    searchState,
    onSubmitSearchPost,
    onClickSearchButton,
  } = useSearchBin({ recycleBinRefetch });
  const { binListRestoreHandle, setRestoreBinList, binRestoreState } = useRestoreBin({ recycleBinRefetch });
  const { binListDeleteHandle, setDeleteBinList, binDeleteState } = useDeleteBin({ recycleBinRefetch });

  const { checkedBinListHandle, toggleSelectAll, binSelectAll, checkedBinList } = useCheckBin({
    recycleBinList,
    setRestoreBinList,
    setDeleteBinList,
  });
  const OutSideClickHandle: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('asdad')
    recycleBinClickHandle
  }

  return (
    /* Beam 뒷배경 */
    <S.TrashBoxWrap>
      <S.TrashBoxPopupBeam onClick={OutSideClickHandle} />
      {/* Beam 내부에 있는 실질적인 팝업 컴포넌트내용 */}
      <S.TrashBoxPopup>
        {/* TrashBoxHead 영역 휴지통, X 버튼 등 */}
        <div className="trashBoxHead">
          {/* 휴지통 아이콘 , 휴지통(number) */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19.4499 6C19.6978 6.00028 19.9362 6.09788 20.1165 6.27285C20.2967 6.44782 20.4052 6.68695 20.4197 6.94139C20.4342 7.19584 20.3537 7.44638 20.1946 7.64183C20.0355 7.83729 19.8099 7.9629 19.5637 7.993L19.4499 8H19.3712L18.4774 19C18.4774 19.7652 18.1931 20.5015 17.6826 21.0583C17.172 21.615 16.4739 21.9501 15.731 21.995L15.5598 22H7.77955C6.22544 22 4.95532 20.751 4.86974 19.25L4.86487 19.083L3.96723 8H3.88942C3.64154 7.99972 3.40313 7.90212 3.22288 7.72715C3.04264 7.55218 2.93417 7.31305 2.91964 7.05861C2.90511 6.80416 2.98562 6.55362 3.14472 6.35817C3.30382 6.16271 3.52949 6.0371 3.77564 6.007L3.88942 6H19.4499ZM13.6147 2C14.1306 2 14.6253 2.21071 14.9901 2.58579C15.3549 2.96086 15.5598 3.46957 15.5598 4C15.5595 4.25488 15.4646 4.50003 15.2945 4.68537C15.1243 4.8707 14.8917 4.98223 14.6443 4.99717C14.3968 5.01211 14.1532 4.92933 13.9631 4.76574C13.773 4.60214 13.6508 4.3701 13.6215 4.117L13.6147 4H9.72461L9.71781 4.117C9.68853 4.3701 9.56637 4.60214 9.37629 4.76574C9.1862 4.92933 8.94254 5.01211 8.69509 4.99717C8.44763 4.98223 8.21507 4.8707 8.0449 4.68537C7.87474 4.50003 7.77983 4.25488 7.77955 4C7.7794 3.49542 7.96473 3.00943 8.29839 2.63945C8.63206 2.26947 9.0894 2.04284 9.57873 2.005L9.72461 2H13.6147Z" fill="#919091" />
            </svg>
            <h6>휴지통 </h6>
            <span className="trashCanNum">({groupList?.recycleCount || '0'})</span>
          </div>
          <button onClick={recycleBinClickHandle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
              <path opacity="0.9" d="M2.83143 15.684C2.63024 15.8852 2.35736 15.9982 2.07283 15.9982C1.7883 15.9982 1.51542 15.8852 1.31423 15.684C1.11303 15.4828 1 15.2099 1 14.9253C1 14.6408 1.11303 14.3679 1.31423 14.1667L6.98234 8.5L1.31601 2.83154C1.11482 2.63034 1.00179 2.35744 1.00179 2.07289C1.00179 1.78834 1.11482 1.51545 1.31601 1.31424C1.5172 1.11304 1.79008 0.999999 2.07461 0.999999C2.35915 0.999999 2.63202 1.11304 2.83322 1.31424L8.49955 6.9827L14.1677 1.31603C14.3689 1.11482 14.6417 1.00179 14.9263 1.00179C15.2108 1.00179 15.4837 1.11482 15.6849 1.31603C15.8861 1.51723 15.9991 1.79013 15.9991 2.07468C15.9991 2.35923 15.8861 2.63212 15.6849 2.83333L10.0168 8.5L15.6858 14.1685C15.887 14.3697 16 14.6426 16 14.9271C16 15.2117 15.887 15.4846 15.6858 15.6858C15.4846 15.887 15.2117 16 14.9272 16C14.6426 16 14.3698 15.887 14.1686 15.6858L8.49955 10.0173L2.83143 15.684Z" fill="#8C8C8C" stroke="#8C8C8C" strokeWidth="0.6" />
            </svg>
          </button>
        </div>
        {/* ***** Start Table/Form Zone ***** */}
        <form action="/" method="POST">
          {/* Start TrashBox Function Zone */}
          <div className="trashBoxFunZone">
            {/* 휴지통 삭제, 휴지통 복원 */}
            <div className="trashBoxFunBtnGroup">
              <BaseButton onClick={binListDeleteHandle} disabled={binDeleteState}>
                휴지통 삭제
              </BaseButton>
              <BaseButton onClick={binListRestoreHandle} disabled={binRestoreState}>
                휴지통 복원
              </BaseButton>
            </div>
            {/* 연락처 Select, 검색 Input */}
            <form className="trashBoxFunRightZone" onSubmit={onSubmitSearchPost}>
              <S.SelectWrapper>
                <button
                  className={`${selectSwitch ? 'active' : null}`}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectSwitch(!selectSwitch);
                  }}
                >
                  {selectState}
                  <svg className={`${selectSwitch ? 'active' : null}`} xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none"><path d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.91698L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.91698C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925" fill="#5B5B5C" /></svg>
                </button>
                {selectSwitch === true ? (
                  <S.SelectOptions>
                    {selectArrValue.map((item) => {
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onClick={(e) => {
                              onClickSelectListButton(e);
                              setSelectSwitch(false);
                            }}
                          >
                            {item.koname}
                          </button>
                        </li>
                      );
                    })}
                  </S.SelectOptions>
                ) : null}
              </S.SelectWrapper>
              {/* 검색 input */}
              <S.InputBox>
                <S.SearchInput type="text" placeholder="SEARCH" onChange={onChangeSearchInput} value={searchState} />
                <BaseButton type={'submit'} backgroundColor="transition" onClick={onClickSearchButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 17" fill="none">
                    <path d="M6.80418 1.70017C5.45074 1.70017 4.15274 2.23785 3.19572 3.19493C2.2387 4.15201 1.70105 5.45008 1.70105 6.8036C1.70105 8.15711 2.2387 9.45519 3.19572 10.4123C4.15274 11.3693 5.45074 11.907 6.80418 11.907C8.15762 11.907 9.45562 11.3693 10.4126 10.4123C11.3697 9.45519 11.9073 8.15711 11.9073 6.8036C11.9073 5.45008 11.3697 4.15201 10.4126 3.19493C9.45562 2.23785 8.15762 1.70017 6.80418 1.70017ZM4.20296e-08 6.8036C0.000155072 5.7207 0.258744 4.65348 0.754277 3.69063C1.24981 2.72777 1.96797 1.8971 2.84908 1.26764C3.7302 0.638181 4.7488 0.228114 5.82026 0.0715213C6.89171 -0.0850715 7.98506 0.0163317 9.00945 0.367304C10.0338 0.718275 10.9597 1.30868 11.71 2.08945C12.4603 2.87022 13.0135 3.8188 13.3235 4.85636C13.6335 5.89393 13.6915 6.99051 13.4925 8.05496C13.2935 9.11942 12.8434 10.121 12.1795 10.9765L16.7612 15.5585C16.9162 15.7189 17.0019 15.9338 17 16.1568C16.998 16.3798 16.9086 16.5932 16.7509 16.7509C16.5932 16.9086 16.3799 16.998 16.1569 17C15.9339 17.0019 15.719 16.9162 15.5586 16.7612L10.9768 12.1792C9.97107 12.9601 8.76636 13.4431 7.49971 13.5733C6.23306 13.7034 4.95531 13.4756 3.81174 12.9155C2.66818 12.3555 1.70469 11.4858 1.03085 10.4053C0.357015 9.32487 -0.000141459 8.07699 4.20296e-08 6.8036Z" fill="#ABABAD" />
                  </svg>
                </BaseButton>
              </S.InputBox>
            </form>
          </div>
          {/* End TrashBox Function Zone */}

          {/* Start TableWrap Zone */}
          <S.TableWrap>
            {/* Start TableHead Zone */}
            <S.TableHead>
              <ul className="sendHeadList">
                {/* All CheckBox */}
                <li className="w5">
                  <AddressCheckBox onChange={toggleSelectAll} checked={binSelectAll} />
                </li>
                <li className="w15">
                  <strong>그룹</strong>
                </li>
                <li className="w10">
                  <strong>이름</strong>
                </li>
                <li className="w20">
                  <strong>연락처</strong>
                </li>
                <li className="w25">
                  <strong>이메일</strong>
                </li>
                <li className="w25">
                  <strong>메모</strong>
                </li>
              </ul>
            </S.TableHead>
            {/* End TableHead Zone */}

            {/* Start TableBody Zone */}
            <S.TableBody onScroll={handleScroll}>
              {recycleBinListLoading ? (
                <Loader />
              ) : (
                recycleBinList &&
                recycleBinList?.pages?.map((page: any) => (
                  <React.Fragment key={page.pageNumber}>
                    {page?.content?.map((item: any) => (
                      <ul key={item.buddySeqNo} className="tableBodyList">
                        <li className="w5">
                          <AddressCheckBox
                            onChange={() => {
                              checkedBinListHandle(item.buddySeqNo);
                            }}
                            checked={checkedBinList.includes(item.buddySeqNo)}
                          />
                        </li>
                        <li className="w15">
                          <span>{item.groupNm}</span>
                        </li>
                        <li className="w10">
                          <span>{item.buddyNm}</span>
                        </li>
                        <li className="w20">
                          <span>{item.keyCommNo}</span>
                        </li>
                        <li className="w25 ">
                          <span>{item.emailId}</span>
                        </li>
                        <li className="w25">
                          <span>{item.etcInfo}</span>
                        </li>
                      </ul>
                    ))}
                  </React.Fragment>
                ))
              )}
            </S.TableBody>
            {/* End TableBody Zone */}
          </S.TableWrap>

          {/* End TableWrap Zone */}
        </form>
        {/* ***** End Table/Form Zone ***** */}
      </S.TrashBoxPopup>
    </S.TrashBoxWrap>
  );
};

export default TrashBoxPopup;

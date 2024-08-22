import { usePOBox015ListDel } from 'components/hooks/customs/say015/pobox015/usePOBox015ListDel';
import React from 'react';
import { formatPhoneNumber } from '../../../../apis/utils/formats/phoneNumberFormatUtil';
import Loader from '../../../common/Loader';
import { usePOBox015List } from '../../../hooks/customs/say015/pobox015/usePOBox015List';
import { usePOBox015Search } from '../../../hooks/customs/say015/pobox015/usePOBox015Search';
import * as MHS from '../MessageSendHistory/MessageSendHistory.styles';
import * as SBS from '../styles/selectButton.styles';
import * as S from './POBox015.styles';
import {PushNotificationTest} from "../../../../pages/test/PushNotificationTest.tsx";

const POBox015Mailbox = () => {
  const {
    messages,
    say015MessageList,
    say015MessageListIsLoading,
    handleScroll,
    say015MessageListRefetch,
    ltemOnClickHandle,
    detailMassageId,
  } = usePOBox015List();

  const {
    selectOpen,
    searchSelectHandle,
    selectArrValue,
    selectState,
    selectOptionHandle,
    onChangeSearchInput,
    searchState,
    onSubmitSearchPost,
    onClickSearchButton,
  } = usePOBox015Search({ say015MessageListRefetch });

  const { msgDeleteClickHandle, msgDeleteState } = usePOBox015ListDel({ say015MessageListRefetch });
  return (
    <S.POBox015Wrap>
      <form className="searchGroup" onSubmit={onSubmitSearchPost}>
        {/*	전송결과 조회 */}
        <SBS.Inquiry>
          <PushNotificationTest />
          <div className={selectOpen ? 'contactGroup active' : 'contactGroup'}>
            <button type="button" className="contactBtn" onClick={searchSelectHandle}>
              <span>{selectState}</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                  <path
                    d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.91698L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.91698C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"
                    fill="#5B5B5C"
                  />
                </svg>
              </span>
            </button>
            <ul className="contactBox">
              {selectArrValue?.map((el: any) => (
                <li key={el.value}>
                  <button type="button" className="contact" onClick={() => selectOptionHandle(el)}>
                    {el.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="searchBox">
            <input type="text" placeholder="SEARCH" onChange={onChangeSearchInput} value={searchState} />
            <button className="searchIcon" type="submit" onClick={onClickSearchButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                  d="M6.80418 1.70017C5.45074 1.70017 4.15274 2.23785 3.19572 3.19493C2.2387 4.15201 1.70105 5.45008 1.70105 6.8036C1.70105 8.15711 2.2387 9.45519 3.19572 10.4123C4.15274 11.3693 5.45074 11.907 6.80418 11.907C8.15762 11.907 9.45562 11.3693 10.4126 10.4123C11.3697 9.45519 11.9073 8.15711 11.9073 6.8036C11.9073 5.45008 11.3697 4.15201 10.4126 3.19493C9.45562 2.23785 8.15762 1.70017 6.80418 1.70017ZM4.20296e-08 6.8036C0.000155072 5.7207 0.258744 4.65348 0.754277 3.69063C1.24981 2.72777 1.96797 1.8971 2.84908 1.26764C3.7302 0.638181 4.7488 0.228114 5.82026 0.0715213C6.89171 -0.0850715 7.98506 0.0163317 9.00945 0.367304C10.0338 0.718275 10.9597 1.30868 11.71 2.08945C12.4603 2.87022 13.0135 3.8188 13.3235 4.85636C13.6335 5.89393 13.6915 6.99051 13.4925 8.05496C13.2935 9.11942 12.8434 10.121 12.1795 10.9765L16.7612 15.5585C16.9162 15.7189 17.0019 15.9338 17 16.1568C16.998 16.3798 16.9086 16.5932 16.7509 16.7509C16.5932 16.9086 16.3799 16.998 16.1569 17C15.9339 17.0019 15.719 16.9162 15.5586 16.7612L10.9768 12.1792C9.97107 12.9601 8.76636 13.4431 7.49971 13.5733C6.23306 13.7034 4.95531 13.4756 3.81174 12.9155C2.66818 12.3555 1.70469 11.4858 1.03085 10.4053C0.357015 9.32487 -0.000141459 8.07699 4.20296e-08 6.8036Z"
                  fill="#ABABAD"
                />
              </svg>
            </button>
          </div>
        </SBS.Inquiry>
      </form>

      {/* 예약전송 관리 */}
      <S.POBox015 className="POBox015">
        {say015MessageListIsLoading && <Loader />}
        <MHS.TransferList className="TransferList" onScroll={handleScroll}>
          {say015MessageList &&
            say015MessageList?.pages?.map((page: any) => (
              <React.Fragment key={page.pageNumber}>
                {page?.content?.map((item: any) => (
                  // {messages?.map((item: any) => (
                  <div
                    role="button"
                    tabIndex={0}
                    className={
                      // eslint-disable-next-line no-nested-ternary
                      detailMassageId === item.messageId ? 'groups active' : item.readCheck ? 'groups' : 'groups unread'
                    }
                    key={item?.messageId}
                    onClick={() => ltemOnClickHandle(item)}
                  >
                    <div className="titleGroup">
                      <div className="flexBox titleBox">
                        <h3>
                          <span className="round" />
                          <p className="messageTitle">{formatPhoneNumber(item.sndPhnId)}</p>
                        </h3>
                        <button
                          onClick={(event) => {
                            event.stopPropagation();
                            msgDeleteClickHandle(item);
                          }}
                          disabled={msgDeleteState}
                          className="deleteButton"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <rect
                              width="9.6"
                              height="9.6"
                              transform="translate(9.59766 -0.000976562) rotate(90)"
                              fill="#F8F8F8"
                              fillOpacity="0.2"
                            />
                            <path
                              d="M2.41606 7.81748C2.33153 7.90202 2.21687 7.94951 2.09731 7.94951C1.97776 7.94951 1.8631 7.90202 1.77856 7.81748C1.69403 7.73294 1.64653 7.61828 1.64653 7.49873C1.64653 7.37917 1.69403 7.26452 1.77856 7.17998L4.16019 4.7991L1.77931 2.41748C1.69478 2.33294 1.64728 2.21828 1.64728 2.09873C1.64728 1.97918 1.69478 1.86452 1.77931 1.77998C1.86385 1.69544 1.97851 1.64795 2.09806 1.64795C2.21762 1.64795 2.33228 1.69544 2.41681 1.77998L4.79769 4.1616L7.17931 1.78073C7.26385 1.69619 7.37851 1.6487 7.49806 1.6487C7.61762 1.6487 7.73228 1.69619 7.81681 1.78073C7.90135 1.86527 7.94884 1.97993 7.94884 2.09948C7.94884 2.21903 7.90135 2.33369 7.81681 2.41823L5.43519 4.7991L7.81719 7.18073C7.90173 7.26527 7.94922 7.37992 7.94922 7.49948C7.94922 7.61903 7.90173 7.73369 7.81719 7.81823C7.73265 7.90277 7.61799 7.95026 7.49844 7.95026C7.37888 7.95026 7.26423 7.90277 7.17969 7.81823L4.79769 5.4366L2.41606 7.81748Z"
                              fill="#8C8C8C"
                              fillOpacity="0.6"
                              stroke="#8C8C8C"
                              strokeOpacity="0.6"
                              strokeWidth="0.6"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flexWrap">
                        <div className="receivingWrap">
                          <p className="message">{item.sndMsg}</p>
                        </div>
                        <div className="dateGroup">
                          <p className="date">{item.receiveDatetime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
        </MHS.TransferList>
      </S.POBox015>
    </S.POBox015Wrap>
  );
};

export default POBox015Mailbox;

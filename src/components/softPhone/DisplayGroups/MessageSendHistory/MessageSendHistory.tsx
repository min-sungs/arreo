/* eslint-disable  */
import React from 'react';
import * as S from './MessageSendHistory.styles';
import { useTrcContent } from '../../../hooks/customs/messgeManagement/trContent/useTrContent.ts';
import { v4 as uuidv4 } from 'uuid';
import { formatDateDate, formatDateTime } from '../../../../apis/utils/formats/dateFormatUtil.ts';
import { useRecoilValue } from 'recoil';
import {
  addressOpenToggleRecoil,
  messageSendDataRecoil,
  reSendMsgToggleRecoil,
} from '../../../../recoil/atoms/messageSend/messageSend.ts';
import { useMessageSendHistory } from '../../../hooks/customs/addressBook/useMessageSendHistory.ts';

const MessageSendHistory = () => {
  const messageSendDataState = useRecoilValue(messageSendDataRecoil);
  const reSendMsgToggleState = useRecoilValue(reSendMsgToggleRecoil);
  const addressOpenToggleState = useRecoilValue(addressOpenToggleRecoil);
  const groupSeqList = messageSendDataState.groupSeqList;
  const buddySeqList = messageSendDataState.buddySeqList;
  const etcPhoneNumberList = messageSendDataState.etcPhoneNumberList;

  const hooks = useMessageSendHistory();

  return (
    <S.MessageSendHistoryWrap
      style={{
        opacity:
          groupSeqList.length > 0 ||
          buddySeqList.length > 0 ||
          etcPhoneNumberList.length > 0 ||
          reSendMsgToggleState ||
          addressOpenToggleState
            ? '0'
            : '1',
        position:
          groupSeqList.length > 0 ||
          buddySeqList.length > 0 ||
          etcPhoneNumberList.length > 0 ||
          reSendMsgToggleState ||
          addressOpenToggleState
            ? 'absolute'
            : 'inherit',
        right:
          groupSeqList.length > 0 ||
          buddySeqList.length > 0 ||
          etcPhoneNumberList.length > 0 ||
          reSendMsgToggleState ||
          addressOpenToggleState
            ? '-100%'
            : '',
      }}
    >
      <S.History>
        {hooks.recentHistoryState.number !== 'all' && (
          <button onClick={hooks.onClickReset}>
            <svg xmlns="http://www.w3.org/2000/svg" width="105" height="208" viewBox="0 0 105 208" fill="none">
              <path
                d="M101.78 191.449L21.8501 110.637C20.0971 108.873 19.1138 106.493 19.1138 104.013C19.1138 101.533 20.0971 99.1524 21.8501 97.3891L101.763 16.5595C103.507 14.781 104.483 12.3947 104.483 9.9099C104.483 7.42513 103.507 5.03879 101.763 3.26034C100.907 2.38669 99.8837 1.69238 98.7539 1.21831C97.6241 0.744234 96.4103 0.5 95.1842 0.5C93.958 0.5 92.7442 0.744234 91.6144 1.21831C90.4846 1.69238 89.4616 2.38669 88.6057 3.26034L8.69311 84.0555C3.44201 89.3773 0.500003 96.5374 0.500003 103.996C0.500003 111.454 3.44201 118.614 8.69311 123.936L88.6057 204.731C89.4619 205.607 90.4859 206.304 91.6174 206.779C92.7488 207.255 93.9646 207.5 95.1928 207.5C96.4211 207.5 97.6368 207.255 98.7683 206.779C99.8997 206.304 100.924 205.607 101.78 204.731C103.524 202.952 104.5 200.566 104.5 198.081C104.5 195.596 103.524 193.21 101.78 191.432"
                stroke="#191919"
                strokeWidth=""
              />
            </svg>
          </button>
        )}
        <h3>
          {hooks.recentHistoryState.number === 'all' ? '나의 최근 이력' : `${hooks.recentHistoryState.name} 님 이력`}
        </h3>
      </S.History>
      {hooks.recentHistoryState.number === 'all' && (
        <S.FrequentlySentAddress>
          {hooks.legacyData && (
            <>
              <p>자주 보낸 주소</p>
              <ul className="customerName">
                {hooks.legacyData?.map((list: any) => (
                  <li key={uuidv4()} onClick={() => hooks.onClickFrequentlySent(list.keyCommNo, list.buddyNm)}>
                    {list.buddyNm}
                  </li>
                ))}
              </ul>
            </>
          )}
        </S.FrequentlySentAddress>
      )}

      {/* 문자 이력 */}
      <S.TransferList onScroll={hooks.handleScroll}>
        {hooks.sendResultData?.pages?.map((page: any) => (
          <React.Fragment key={page?.pageNumber}>
            {page?.content?.map((item: any) => (
              <div key={uuidv4()} className={`groups`}>
                <div className="titleGroup">
                  <h3>
                    <p className="messageTitle">{item?.subject ?? ''}</p>
                    {item?.imageData !== '' && item?.imageData && (
                      <p className="iconImage">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                          <path
                            d="M1.25147 2.68853C0.988417 2.87172 0.771812 3.12505 0.621811 3.42495C0.47181 3.72485 0.393289 4.06157 0.393555 4.40378V10.972C0.393555 12.7861 1.73138 14.2562 3.38231 14.2562H9.35983C9.67146 14.2564 9.97809 14.17 10.2512 14.0051C10.5243 13.8401 10.755 13.602 10.922 13.3128L10.8525 13.3166L10.783 13.3178H3.38231C2.81612 13.3178 2.27312 13.0707 1.87276 12.6308C1.4724 12.1908 1.24749 11.5942 1.24749 10.972V2.83992C1.24749 2.78925 1.24862 2.73858 1.25147 2.68853ZM6.97907 7.78049L6.92613 7.82928L2.69746 12.3914C2.98889 12.5888 3.32462 12.693 3.66696 12.6923H10.783C11.1389 12.6923 11.4707 12.5822 11.7525 12.3914L7.52445 7.82928L7.47663 7.7855C7.41384 7.73511 7.33972 7.70451 7.26227 7.69702C7.18482 7.68952 7.10697 7.70541 7.03714 7.74296L6.97907 7.78049ZM3.66696 0.806885C3.17626 0.806885 2.70566 1.02108 2.35868 1.40235C2.0117 1.78361 1.81677 2.30072 1.81677 2.83992V10.6593C1.81677 11.0515 1.91811 11.4181 2.09288 11.7289L6.3278 7.15995L6.40067 7.08676C6.63081 6.87411 6.9217 6.75721 7.22239 6.75652C7.52308 6.75584 7.8144 6.87141 8.04534 7.08301L8.12277 7.15995L12.3571 11.7283C12.5381 11.4073 12.6338 11.0369 12.6332 10.6593V2.83992C12.6332 2.30072 12.4383 1.78361 12.0913 1.40235C11.7443 1.02108 11.2737 0.806885 10.783 0.806885H3.66696ZM4.94785 3.46546C5.04296 3.46251 5.13764 3.48054 5.22629 3.51849C5.31495 3.55644 5.39577 3.61354 5.46399 3.68641C5.53222 3.75928 5.58645 3.84645 5.62348 3.94275C5.66051 4.03905 5.67959 4.14254 5.67959 4.24709C5.67959 4.35163 5.66051 4.45512 5.62348 4.55142C5.58645 4.64772 5.53222 4.73489 5.46399 4.80776C5.39577 4.88063 5.31495 4.93773 5.22629 4.97568C5.13764 5.01363 5.04296 5.03166 4.94785 5.02871C4.76268 5.02295 4.58685 4.93808 4.45773 4.79212C4.32861 4.64617 4.25637 4.45064 4.25637 4.24709C4.25637 4.04353 4.32861 3.848 4.45773 3.70205C4.58685 3.55609 4.76268 3.47122 4.94785 3.46546Z"
                            fill="#888B92"
                          />
                        </svg>
                      </p>
                    )}
                  </h3>
                  <div className="dateGroup">
                    <p className="date">{formatDateDate(item?.sndDttm) ?? ''}</p>
                    <p className="time">{formatDateTime(item.sndDttm) ?? ''}</p>
                  </div>
                </div>
                <div className="peopleGroup">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                    <path
                      d="M9.5214 8.99492C9.94879 8.99492 10.3587 9.1933 10.6609 9.54641C10.9631 9.89952 11.1329 10.3784 11.1329 10.8778V11.5055C11.1329 13.9796 9.13464 16.5265 5.76126 16.5265C2.38789 16.5265 0.389648 13.9796 0.389648 11.5055V10.8778C0.389648 10.3784 0.559429 9.89952 0.861641 9.54641C1.16385 9.1933 1.57374 8.99492 2.00113 8.99492H9.5214ZM5.76126 0.835693C6.54482 0.835693 7.29628 1.19938 7.85033 1.84676C8.40439 2.49413 8.71565 3.37215 8.71565 4.28767C8.71565 5.2032 8.40439 6.08122 7.85033 6.72859C7.29628 7.37597 6.54482 7.73966 5.76126 7.73966C4.97771 7.73966 4.22625 7.37597 3.6722 6.72859C3.11814 6.08122 2.80688 5.2032 2.80688 4.28767C2.80688 3.37215 3.11814 2.49413 3.6722 1.84676C4.22625 1.19938 4.97771 0.835693 5.76126 0.835693Z"
                      fill="#444444"
                    />
                  </svg>
                  <p>{item?.etcPhoneNumberList ? `${item?.etcPhoneNumberList?.length}명` : '1명'}</p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </S.TransferList>
    </S.MessageSendHistoryWrap>
  );
};

export default MessageSendHistory;

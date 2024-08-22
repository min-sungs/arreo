import React from 'react';
import * as MHS from '../MessageSendHistory/MessageSendHistory.styles';
import * as SBS from '../styles/selectButton.styles';
import * as S from './POBox015.styles';

interface IPOBox015Mock {
  nextPage: any;
  storageUser: string | null;
}

const POBox015Mock = ({ nextPage, storageUser }: IPOBox015Mock) => {
  return (
    <S.POBox015Wrap>
      <div className="searchGroup">
        {/*	전송결과 조회 */}
        <SBS.Inquiry>
          <div className={`contactGroup`}>
            <button className="contactBtn">
              연락처{' '}
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
              <li>
                <button className="contact">연락처</button>
              </li>
              <li>
                <button className="contact">이름</button>
              </li>
            </ul>
          </div>
          <div className="searchBox">
            <input type="text" placeholder="SEARCH" />
            <button className="searchIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path
                  d="M6.80418 1.70017C5.45074 1.70017 4.15274 2.23785 3.19572 3.19493C2.2387 4.15201 1.70105 5.45008 1.70105 6.8036C1.70105 8.15711 2.2387 9.45519 3.19572 10.4123C4.15274 11.3693 5.45074 11.907 6.80418 11.907C8.15762 11.907 9.45562 11.3693 10.4126 10.4123C11.3697 9.45519 11.9073 8.15711 11.9073 6.8036C11.9073 5.45008 11.3697 4.15201 10.4126 3.19493C9.45562 2.23785 8.15762 1.70017 6.80418 1.70017ZM4.20296e-08 6.8036C0.000155072 5.7207 0.258744 4.65348 0.754277 3.69063C1.24981 2.72777 1.96797 1.8971 2.84908 1.26764C3.7302 0.638181 4.7488 0.228114 5.82026 0.0715213C6.89171 -0.0850715 7.98506 0.0163317 9.00945 0.367304C10.0338 0.718275 10.9597 1.30868 11.71 2.08945C12.4603 2.87022 13.0135 3.8188 13.3235 4.85636C13.6335 5.89393 13.6915 6.99051 13.4925 8.05496C13.2935 9.11942 12.8434 10.121 12.1795 10.9765L16.7612 15.5585C16.9162 15.7189 17.0019 15.9338 17 16.1568C16.998 16.3798 16.9086 16.5932 16.7509 16.7509C16.5932 16.9086 16.3799 16.998 16.1569 17C15.9339 17.0019 15.719 16.9162 15.5586 16.7612L10.9768 12.1792C9.97107 12.9601 8.76636 13.4431 7.49971 13.5733C6.23306 13.7034 4.95531 13.4756 3.81174 12.9155C2.66818 12.3555 1.70469 11.4858 1.03085 10.4053C0.357015 9.32487 -0.000141459 8.07699 4.20296e-08 6.8036Z"
                  fill="#ABABAD"
                />
              </svg>
            </button>
          </div>
        </SBS.Inquiry>
      </div>

      {/* 예약전송 관리 */}
      <S.POBox015 className="POBox015">
        <MHS.TransferList className="TransferList">
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groups">
            <div className="titleGroup">
              <h3>
                <span className="round" />
                <p className="messageTitle">010-4998-7052</p>
              </h3>
              <div className="flexWrap">
                <div className="receivingWrap">
                  <p className="message">
                    수신한 메시지 내용을 여기에 넣어주세요 수신한 메시지 내용을 여기에 넣어주세요
                  </p>
                </div>
                <div className="dateGroup">
                  <p className="date">01-24</p>
                </div>
              </div>
            </div>
          </div>
        </MHS.TransferList>

        {/* 015 사서함 미가입 회원이면 뜨는 창 */}
        <S.UnregisteredMember>
          <div className="UnregisteredWrap">
            <div className="signUpButton">
              <button onClick={() => nextPage()}>Say 015 서비스 가입하기</button>
            </div>
            <div className="helpText">
              <p>
                * 현재 {storageUser}님은 서비스 미가입 회원입니다.
                <br />
                Say 015 서비스 가입 후 서비스를 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </S.UnregisteredMember>
      </S.POBox015>
    </S.POBox015Wrap>
  );
};

export default POBox015Mock;

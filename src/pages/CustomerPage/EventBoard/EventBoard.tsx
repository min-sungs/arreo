/* eslint-disable */
import React, {useState} from "react";
import * as S from './EventBoard.styles'
import {useNotice} from "../../../components/hooks/customs/customer/notice/useNotice.ts";
import * as SQ from "../CustomerStyles/SelectQA.styles.ts";
import {formatDateBase} from "../../../apis/utils/formats/dateFormatUtil.ts";
import {v4 as uuidv4} from "uuid";
import Pagination03Index from "../../../components/common/paginations/Pagination03/Pagination03.index.tsx";


const EventBoard = () => {
  /* 퍼블 */
  const [classifyTabAct, setClassifyTabAct] = useState(false);
  const [rightIsActive, setRightIsActive] = useState(false);
  const [bulletinActive, setBulletinActive] = useState<number>(0);

  const toggleClassifyTab = () => {
    setClassifyTabAct(!classifyTabAct);
  };

  const toggleRightActive = () => {
    setRightIsActive(!rightIsActive);
  };

  const toggleBulletin = (id: number) => {
    setBulletinActive((prevState: number) => {
      if (prevState === id) return 0;
      return id;
    });
  };
  /* 개발 */
  const hooks = useNotice({type: "event"})
  return (
    <S.EventBoardContainer>
      <SQ.SelectQA>
        <h2>이벤트 게시판</h2>
        <SQ.SelectTop className='SelectTop flexBox-ajs'>
          <SQ.SelectBox className='leftGroup'>
            <div className={`classifyTab ${classifyTabAct ? 'active' : ''}`}>
              <button onClick={toggleClassifyTab}>
                <span>{hooks.categoryState.label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                  <path
                    d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.916981L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.916981C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"/>
                </svg>
              </button>
              <ul className='selectBox'>
                {
                  hooks.categoryItems.map(item => (
                    <li key={item.value}>
                      <button onClick={() => {
                        hooks.handleCategoryValue(item);
                        toggleClassifyTab()
                      }}>{item.label}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </SQ.SelectBox>
          <div className="flexBox rightGroup">
            <SQ.SelectBox>
              <div className={`classifyTab ${rightIsActive ? 'active' : ''}`}>
                <button onClick={toggleRightActive}>
                  <span>{hooks.keywordValue.label}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="6" viewBox="0 0 14 6" fill="none">
                    <path
                      d="M12.9144 0.156925L7.44885 4.76826C7.32959 4.8694 7.16862 4.92613 7.00087 4.92613C6.83312 4.92613 6.67214 4.8694 6.55289 4.76826L1.08615 0.157925C0.965866 0.057316 0.804471 0.00100048 0.636419 0.00100048C0.468366 0.00100048 0.306971 0.057316 0.18669 0.157925C0.127602 0.207306 0.0806439 0.266326 0.0485811 0.331507C0.0165183 0.396689 0 0.466713 0 0.537453C0 0.608192 0.0165183 0.678216 0.0485811 0.743398C0.0806439 0.80858 0.127602 0.8676 0.18669 0.916981L5.6511 5.52732C6.01102 5.83027 6.49529 6 6.9997 6C7.50412 6 7.98838 5.83027 8.3483 5.52732L13.8127 0.916981C13.872 0.867584 13.9191 0.808502 13.9513 0.743228C13.9834 0.677954 14 0.607813 14 0.536953C14 0.466093 13.9834 0.395951 13.9513 0.330677C13.9191 0.265403 13.872 0.206321 13.8127 0.156925C13.6924 0.056316 13.531 0 13.363 0C13.1949 0 13.0335 0.056316 12.9133 0.156925"/>
                  </svg>
                </button>
                <ul className='selectBox'>
                  {hooks.keywordValueItems.map((item) => (
                    <li key={item.value}>
                      <button onClick={() => {
                        hooks.handleKeywordValue(item);
                        toggleRightActive()
                      }}>{item.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </SQ.SelectBox>
            <SQ.SearchBox>
              <form>
                <input type="text" placeholder="SEARCH" onChange={hooks.handleKeyword}/>
                <button type={"submit"} className="searchIcon" onClick={hooks.handleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path
                      d="M6.80418 1.70017C5.45074 1.70017 4.15274 2.23785 3.19572 3.19493C2.2387 4.15201 1.70105 5.45008 1.70105 6.8036C1.70105 8.15711 2.2387 9.45519 3.19572 10.4123C4.15274 11.3693 5.45074 11.907 6.80418 11.907C8.15762 11.907 9.45562 11.3693 10.4126 10.4123C11.3697 9.45519 11.9073 8.15711 11.9073 6.8036C11.9073 5.45008 11.3697 4.15201 10.4126 3.19493C9.45562 2.23785 8.15762 1.70017 6.80418 1.70017ZM4.20296e-08 6.8036C0.000155072 5.7207 0.258744 4.65348 0.754277 3.69063C1.24981 2.72777 1.96797 1.8971 2.84908 1.26764C3.7302 0.638181 4.7488 0.228114 5.82026 0.0715213C6.89171 -0.0850715 7.98506 0.0163317 9.00945 0.367304C10.0338 0.718275 10.9597 1.30868 11.71 2.08945C12.4603 2.87022 13.0135 3.8188 13.3235 4.85636C13.6335 5.89393 13.6915 6.99051 13.4925 8.05496C13.2935 9.11942 12.8434 10.121 12.1795 10.9765L16.7612 15.5585C16.9162 15.7189 17.0019 15.9338 17 16.1568C16.998 16.3798 16.9086 16.5932 16.7509 16.7509C16.5932 16.9086 16.3799 16.998 16.1569 17C15.9339 17.0019 15.719 16.9162 15.5586 16.7612L10.9768 12.1792C9.97107 12.9601 8.76636 13.4431 7.49971 13.5733C6.23306 13.7034 4.95531 13.4756 3.81174 12.9155C2.66818 12.3555 1.70469 11.4858 1.03085 10.4053C0.357015 9.32487 -0.000141459 8.07699 4.20296e-08 6.8036Z"
                      fill="#ABABAD"
                    />
                  </svg>
                </button>
              </form>
            </SQ.SearchBox>
          </div>
        </SQ.SelectTop>
        <SQ.BulletinBoard>
          <ol>
            {
              hooks.customerListData ? (
                hooks.customerListData?.content?.map((list) => (
                  <li className={`Bulletin ${bulletinActive === list.artId ? 'active' : ''}`} key={list.artId}>
                    <div className="subjectGroup" role="button" onClick={() => toggleBulletin(list.artId)} tabIndex={0}>
                      <h2>{list.category}</h2>
                      <div className='subject'>
                        <p>{list.title}</p>
                      </div>
                      <div className='dateGroup'>
                        <p className="date">{formatDateBase(list.regDttm)}</p>
                        <span className='arrowBtn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none"><path
                          d="M7.33877 1.08266L1.16067 4.05276C1.05753 4.10232 0.999999 4.16816 0.999999 4.23663C0.999999 4.3051 1.05753 4.37094 1.16067 4.4205L1.16765 4.42369C1.21765 4.4478 1.27783 4.467 1.34454 4.48012C1.41125 4.49323 1.48308 4.5 1.55567 4.5C1.62827 4.5 1.7001 4.49323 1.76681 4.48012C1.83351 4.467 1.8937 4.4478 1.94369 4.42369L7.76111 1.6268L13.5762 4.4237C13.6262 4.4478 13.6864 4.467 13.7531 4.48012C13.8198 4.49324 13.8916 4.5 13.9642 4.5C14.0368 4.5 14.1086 4.49324 14.1754 4.48012C14.2421 4.467 14.3022 4.4478 14.3522 4.4237L14.3592 4.4205C14.4624 4.37094 14.5199 4.3051 14.5199 4.23663C14.5199 4.16816 14.4624 4.10232 14.3592 4.05277L8.18113 1.08266C8.1268 1.05654 8.06145 1.03575 7.98905 1.02154C7.91665 1.00733 7.83871 1 7.75995 1C7.68118 1 7.60324 1.00733 7.53084 1.02154C7.45844 1.03575 7.3931 1.05654 7.33877 1.08266Z"
                          fill="#0D42E5" stroke="#0D42E5"/><path
                          d="M7.33877 4.58266L1.16067 7.55276C1.05753 7.60232 0.999999 7.66816 0.999999 7.73663C0.999999 7.8051 1.05753 7.87094 1.16067 7.9205L1.16765 7.92369C1.21765 7.9478 1.27783 7.967 1.34454 7.98012C1.41125 7.99323 1.48308 8 1.55567 8C1.62827 8 1.7001 7.99323 1.76681 7.98012C1.83351 7.967 1.8937 7.9478 1.94369 7.92369L7.76111 5.1268L13.5762 7.9237C13.6262 7.9478 13.6864 7.967 13.7531 7.98012C13.8198 7.99324 13.8916 8 13.9642 8C14.0368 8 14.1086 7.99324 14.1754 7.98012C14.2421 7.967 14.3022 7.9478 14.3522 7.9237L14.3592 7.9205C14.4624 7.87094 14.5199 7.8051 14.5199 7.73663C14.5199 7.66816 14.4624 7.60232 14.3592 7.55277L8.18113 4.58266C8.1268 4.55654 8.06145 4.53575 7.98905 4.52154C7.91665 4.50733 7.83871 4.5 7.75995 4.5C7.68118 4.5 7.60324 4.50733 7.53084 4.52154C7.45844 4.53575 7.3931 4.55654 7.33877 4.58266Z"
                          fill="#0D42E5" stroke="#0D42E5"/></svg></span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <p dangerouslySetInnerHTML={{__html: list.content}}/>
                      </li>
                    </ul>
                  </li>
                ))
              ) : (
                Array(10).fill(1).map(() => (
                  <li className={`Bulletin ${bulletinActive ? 'active' : ''}`} key={uuidv4()}>
                    <div className="subjectGroup" role="button" tabIndex={0}>
                      <h2>전체공지</h2>
                      <div className='subject'>
                        <p></p>
                      </div>
                      <div className='dateGroup'>
                        <p className="date"></p>
                        <span className='arrowBtn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none"><path
                          d="M7.33877 1.08266L1.16067 4.05276C1.05753 4.10232 0.999999 4.16816 0.999999 4.23663C0.999999 4.3051 1.05753 4.37094 1.16067 4.4205L1.16765 4.42369C1.21765 4.4478 1.27783 4.467 1.34454 4.48012C1.41125 4.49323 1.48308 4.5 1.55567 4.5C1.62827 4.5 1.7001 4.49323 1.76681 4.48012C1.83351 4.467 1.8937 4.4478 1.94369 4.42369L7.76111 1.6268L13.5762 4.4237C13.6262 4.4478 13.6864 4.467 13.7531 4.48012C13.8198 4.49324 13.8916 4.5 13.9642 4.5C14.0368 4.5 14.1086 4.49324 14.1754 4.48012C14.2421 4.467 14.3022 4.4478 14.3522 4.4237L14.3592 4.4205C14.4624 4.37094 14.5199 4.3051 14.5199 4.23663C14.5199 4.16816 14.4624 4.10232 14.3592 4.05277L8.18113 1.08266C8.1268 1.05654 8.06145 1.03575 7.98905 1.02154C7.91665 1.00733 7.83871 1 7.75995 1C7.68118 1 7.60324 1.00733 7.53084 1.02154C7.45844 1.03575 7.3931 1.05654 7.33877 1.08266Z"
                          fill="#0D42E5" stroke="#0D42E5"/><path
                          d="M7.33877 4.58266L1.16067 7.55276C1.05753 7.60232 0.999999 7.66816 0.999999 7.73663C0.999999 7.8051 1.05753 7.87094 1.16067 7.9205L1.16765 7.92369C1.21765 7.9478 1.27783 7.967 1.34454 7.98012C1.41125 7.99323 1.48308 8 1.55567 8C1.62827 8 1.7001 7.99323 1.76681 7.98012C1.83351 7.967 1.8937 7.9478 1.94369 7.92369L7.76111 5.1268L13.5762 7.9237C13.6262 7.9478 13.6864 7.967 13.7531 7.98012C13.8198 7.99324 13.8916 8 13.9642 8C14.0368 8 14.1086 7.99324 14.1754 7.98012C14.2421 7.967 14.3022 7.9478 14.3522 7.9237L14.3592 7.9205C14.4624 7.87094 14.5199 7.8051 14.5199 7.73663C14.5199 7.66816 14.4624 7.60232 14.3592 7.55277L8.18113 4.58266C8.1268 4.55654 8.06145 4.53575 7.98905 4.52154C7.91665 4.50733 7.83871 4.5 7.75995 4.5C7.68118 4.5 7.60324 4.50733 7.53084 4.52154C7.45844 4.53575 7.3931 4.55654 7.33877 4.58266Z"
                          fill="#0D42E5" stroke="#0D42E5"/></svg></span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        <p></p>
                      </li>
                    </ul>
                  </li>
                ))
              )
            }
          </ol>
        </SQ.BulletinBoard>
        {/* 페이지 넘어가면 버튼생김 */}
        <SQ.Pagination>
          <div className="paginationWrap">
            <Pagination03Index
              pageSize={10}
              count={hooks.totalElements}
              activePage={hooks.activePage}
              setActivePage={hooks.setActivePage}
              eventHook={hooks.handlePagination}
              setStartPage={hooks.setStartPage}
              startPage={hooks.startPage}
            />
          </div>
        </SQ.Pagination>
      </SQ.SelectQA>
    </S.EventBoardContainer>
  )
}

export default EventBoard;
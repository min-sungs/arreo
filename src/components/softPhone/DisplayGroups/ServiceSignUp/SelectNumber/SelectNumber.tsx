import React, { useState, useRef } from 'react';

import SubscriptionGuide from '../SubscriptionGuide/SubscriptionGuide';

import * as S from './SelectNumber.styles';
import * as SH from '../../styles/fixedStyle/height.styles';
import * as SB from '../../styles/fixedStyle/button.styles';
import JoinCompletion from '../JoinCompletion/JoinCompletion';
import { useCheck015Number } from '../../../../hooks/customs/say015/say015Signup/useCheck015Number';
import Loader from '../../../../common/Loader';

interface ISelectNumber {
  authorityDataRefetch: any;
  authorityDataState: any;
}

const SelectNumber = ({ authorityDataRefetch, authorityDataState }: ISelectNumber) => {
  const {
    inputValue,
    handleInputChange,
    generateFullNumber,
    errorMessage,
    messageStyleHandle,
    sug015NumListIsLoading,
    sug015NumList,
    handleRadioChange,
    addHyphen,
    subscribe015,
    handleCheckboxChange,
    subscribe015Handle,
    subscribe015Btn,
    handleAllCheckboxChange,
    sug015NumViewHandle,
    selectOpen,
    subscribe015BtnStyles,
    complete,
    completeHandle,
    pickNumber,
  } = useCheck015Number();

  return (
    <S.SelectNumberWrap>
      {/* 가입완료 */}
      {complete && (
        <JoinCompletion
          authorityDataRefetch={authorityDataRefetch}
          authorityDataState={authorityDataState}
          pickNumber={pickNumber}
        />
      )}
      {/* 구독 안내 */}
      <SubscriptionGuide />

      <SH.GroupWrap className="flexBox-js">
        <S.SelectNumber>
          <h2>번호 선택</h2>
          <div className="phoneGroup">
            {/* 추천번호 보기 클릭후 numberGroup에 active가 붙으면 펼쳐짐 */}
            <div className={selectOpen}>
              <div className="number">
                <p>015</p>
                <span>-</span>
                <input
                  type="text"
                  maxLength={4}
                  placeholder="1234"
                  value={inputValue.firstPart}
                  name="firstPart"
                  onChange={handleInputChange}
                />
                <span>-</span>
                <input
                  type="text"
                  maxLength={4}
                  placeholder="1234"
                  value={inputValue.secondPart}
                  name="secondPart"
                  onChange={handleInputChange}
                />
                <button onClick={generateFullNumber}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M6.00369 1.50015C4.80948 1.50015 3.66418 1.97457 2.81975 2.81905C1.97532 3.66354 1.50092 4.8089 1.50092 6.00317C1.50092 7.19745 1.97532 8.34281 2.81975 9.18729C3.66418 10.0318 4.80948 10.5062 6.00369 10.5062C7.1979 10.5062 8.34319 10.0318 9.18762 9.18729C10.0321 8.34281 10.5065 7.19745 10.5065 6.00317C10.5065 4.8089 10.0321 3.66354 9.18762 2.81905C8.34319 1.97457 7.1979 1.50015 6.00369 1.50015ZM3.7085e-08 6.00317C0.000136829 5.04768 0.228304 4.10601 0.665538 3.25644C1.10277 2.40686 1.73645 1.67391 2.5139 1.11851C3.29135 0.563101 4.19012 0.201277 5.13552 0.0631071C6.08092 -0.0750631 7.04564 0.0144103 7.94951 0.324091C8.85338 0.633772 9.67029 1.15472 10.3324 1.84363C10.9944 2.53254 11.4825 3.36953 11.756 4.28503C12.0296 5.20052 12.0807 6.16809 11.9051 7.10732C11.7296 8.04655 11.3324 8.9303 10.7466 9.68515L14.7893 13.7281C14.926 13.8697 15.0017 14.0592 15 14.256C14.9983 14.4528 14.9193 14.641 14.7802 14.7802C14.6411 14.9193 14.4528 14.9983 14.2561 15C14.0593 15.0017 13.8697 14.926 13.7282 14.7893L9.68545 10.7464C8.798 11.4354 7.73502 11.8616 6.61739 11.9764C5.49976 12.0913 4.37233 11.8902 3.3633 11.3961C2.35427 10.9019 1.50414 10.1345 0.909578 9.18118C0.315013 8.22782 -0.000124817 7.12675 3.7085e-08 6.00317Z"
                      fill="#191919"
                    />
                  </svg>
                </button>
              </div>
              <div className="recommendationNumberBox">
                <ul className="recommendationNumber">
                  {selectOpen === 'numberGroup active' &&
                    sug015NumList &&
                    sug015NumList?.content.map((el: any) => (
                      <li key={el}>
                        <button id={el} name="suggest" value={el} onClick={(event: any) => handleRadioChange(event)}>
                          {addHyphen(el)}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <button onClick={sug015NumViewHandle}>추천번호 보기</button>
          </div>
          <div className="numberStatus">
            <p className="status active">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M9.06547 4.91801C9.12224 4.86508 9.16802 4.8015 9.20021 4.73088C9.2324 4.66027 9.25037 4.584 9.25308 4.50644C9.2558 4.42888 9.24321 4.35154 9.21604 4.27885C9.18887 4.20615 9.14764 4.13952 9.09472 4.08276C9.0418 4.02599 8.97822 3.98021 8.9076 3.94802C8.83698 3.91583 8.76072 3.89786 8.68316 3.89515C8.6056 3.89243 8.52826 3.90502 8.45556 3.93219C8.38287 3.95936 8.31624 4.00058 8.25947 4.05351L6.53047 5.66551L4.91847 3.93592C4.81061 3.82544 4.6638 3.76157 4.50944 3.75797C4.35509 3.75437 4.20545 3.81133 4.09256 3.91666C3.97967 4.02198 3.91248 4.16731 3.90538 4.32154C3.89828 4.47578 3.95183 4.62666 4.05456 4.74192L5.66656 6.47092L3.93697 8.08292C3.8782 8.1353 3.8305 8.1989 3.79665 8.26999C3.7628 8.34107 3.7435 8.4182 3.73988 8.49684C3.73626 8.57548 3.74839 8.65406 3.77556 8.72795C3.80273 8.80184 3.84439 8.86956 3.8981 8.92712C3.95181 8.98469 4.01648 9.03094 4.08831 9.06316C4.16014 9.09539 4.23768 9.11293 4.31639 9.11477C4.3951 9.1166 4.47338 9.10269 4.54663 9.07385C4.61989 9.04501 4.68664 9.00182 4.74297 8.94683L6.47197 7.33542L8.08397 9.06442C8.13602 9.12427 8.19959 9.17303 8.27088 9.2078C8.34218 9.24256 8.41975 9.26262 8.49896 9.26676C8.57817 9.27091 8.65741 9.25907 8.73194 9.23195C8.80648 9.20482 8.87479 9.16297 8.93281 9.10888C8.99083 9.05479 9.03736 8.98957 9.06964 8.91712C9.10192 8.84466 9.11928 8.76645 9.12068 8.68714C9.12209 8.60783 9.10751 8.52905 9.07783 8.4555C9.04814 8.38194 9.00395 8.31512 8.94788 8.25901L7.33647 6.53001L9.06547 4.91801Z"
                  fill="#6E6E71"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 6.5C0 2.91023 2.91023 0 6.5 0C10.0898 0 13 2.91023 13 6.5C13 10.0898 10.0898 13 6.5 13C2.91023 13 0 10.0898 0 6.5ZM6.5 11.8182C5.80161 11.8182 5.11005 11.6806 4.46482 11.4134C3.81959 11.1461 3.23332 10.7544 2.73948 10.2605C2.24564 9.76668 1.8539 9.18041 1.58664 8.53518C1.31938 7.88995 1.18182 7.19839 1.18182 6.5C1.18182 5.80161 1.31938 5.11005 1.58664 4.46482C1.8539 3.81959 2.24564 3.23332 2.73948 2.73948C3.23332 2.24564 3.81959 1.8539 4.46482 1.58664C5.11005 1.31938 5.80161 1.18182 6.5 1.18182C7.91047 1.18182 9.26317 1.74212 10.2605 2.73948C11.2579 3.73683 11.8182 5.08953 11.8182 6.5C11.8182 7.91047 11.2579 9.26317 10.2605 10.2605C9.26317 11.2579 7.91047 11.8182 6.5 11.8182Z"
                  fill="#6E6E71"
                />
              </svg>
              {errorMessage ? (
                <span style={messageStyleHandle()}>{errorMessage}</span>
              ) : (
                <span>희망하는 번호를 입력해주세요</span>
              )}
              {sug015NumListIsLoading && <Loader />}
            </p>
            <p className="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M5.45938 9.0502L2.95215 6.54238L3.78769 5.70684L5.45938 7.37793L8.80156 4.03516L9.63769 4.87129L5.45938 9.0502Z"
                  fill="#39BA2E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 6.5C0 2.91023 2.91023 0 6.5 0C10.0898 0 13 2.91023 13 6.5C13 10.0898 10.0898 13 6.5 13C2.91023 13 0 10.0898 0 6.5ZM6.5 11.8182C5.80161 11.8182 5.11005 11.6806 4.46482 11.4134C3.81959 11.1461 3.23332 10.7544 2.73948 10.2605C2.24564 9.76668 1.8539 9.18041 1.58664 8.53518C1.31938 7.88995 1.18182 7.19839 1.18182 6.5C1.18182 5.80161 1.31938 5.11005 1.58664 4.46482C1.8539 3.81959 2.24564 3.23332 2.73948 2.73948C3.23332 2.24564 3.81959 1.8539 4.46482 1.58664C5.11005 1.31938 5.80161 1.18182 6.5 1.18182C7.91047 1.18182 9.26317 1.74212 10.2605 2.73948C11.2579 3.73683 11.8182 5.08953 11.8182 6.5C11.8182 7.91047 11.2579 9.26317 10.2605 10.2605C9.26317 11.2579 7.91047 11.8182 6.5 11.8182Z"
                  fill="#39BA2E"
                />
              </svg>
              <span>사용 가능한 번호입니다.</span>
            </p>
            <p className="status">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M9.06547 4.91801C9.12224 4.86508 9.16802 4.8015 9.20021 4.73088C9.2324 4.66027 9.25037 4.584 9.25308 4.50644C9.2558 4.42888 9.24321 4.35154 9.21604 4.27885C9.18887 4.20615 9.14764 4.13952 9.09472 4.08276C9.0418 4.02599 8.97822 3.98021 8.9076 3.94802C8.83698 3.91583 8.76072 3.89786 8.68316 3.89515C8.6056 3.89243 8.52826 3.90502 8.45556 3.93219C8.38287 3.95936 8.31624 4.00058 8.25947 4.05351L6.53047 5.66551L4.91847 3.93592C4.81061 3.82544 4.6638 3.76157 4.50944 3.75797C4.35509 3.75437 4.20545 3.81133 4.09256 3.91666C3.97967 4.02198 3.91248 4.16731 3.90538 4.32154C3.89828 4.47578 3.95183 4.62666 4.05456 4.74192L5.66656 6.47092L3.93697 8.08292C3.8782 8.1353 3.8305 8.1989 3.79665 8.26999C3.7628 8.34107 3.7435 8.4182 3.73988 8.49684C3.73626 8.57548 3.74839 8.65406 3.77556 8.72795C3.80273 8.80184 3.84439 8.86956 3.8981 8.92712C3.95181 8.98469 4.01648 9.03094 4.08831 9.06316C4.16014 9.09539 4.23768 9.11293 4.31639 9.11477C4.3951 9.1166 4.47338 9.10269 4.54663 9.07385C4.61989 9.04501 4.68664 9.00182 4.74297 8.94683L6.47197 7.33542L8.08397 9.06442C8.13602 9.12427 8.19959 9.17303 8.27088 9.2078C8.34218 9.24256 8.41975 9.26262 8.49896 9.26676C8.57817 9.27091 8.65741 9.25907 8.73194 9.23195C8.80648 9.20482 8.87479 9.16297 8.93281 9.10888C8.99083 9.05479 9.03736 8.98957 9.06964 8.91712C9.10192 8.84466 9.11928 8.76645 9.12068 8.68714C9.12209 8.60783 9.10751 8.52905 9.07783 8.4555C9.04814 8.38194 9.00395 8.31512 8.94788 8.25901L7.33647 6.53001L9.06547 4.91801Z"
                  fill="#E31010"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 6.5C0 2.91023 2.91023 0 6.5 0C10.0898 0 13 2.91023 13 6.5C13 10.0898 10.0898 13 6.5 13C2.91023 13 0 10.0898 0 6.5ZM6.5 11.8182C5.80161 11.8182 5.11005 11.6806 4.46482 11.4134C3.81959 11.1461 3.23332 10.7544 2.73948 10.2605C2.24564 9.76668 1.8539 9.18041 1.58664 8.53518C1.31938 7.88995 1.18182 7.19839 1.18182 6.5C1.18182 5.80161 1.31938 5.11005 1.58664 4.46482C1.8539 3.81959 2.24564 3.23332 2.73948 2.73948C3.23332 2.24564 3.81959 1.8539 4.46482 1.58664C5.11005 1.31938 5.80161 1.18182 6.5 1.18182C7.91047 1.18182 9.26317 1.74212 10.2605 2.73948C11.2579 3.73683 11.8182 5.08953 11.8182 6.5C11.8182 7.91047 11.2579 9.26317 10.2605 10.2605C9.26317 11.2579 7.91047 11.8182 6.5 11.8182Z"
                  fill="#E31010"
                />
              </svg>
              <span>사용 불가한 번호입니다.</span>
            </p>
          </div>
          {/* {sug015Num &&
            sug015NumList &&
            sug015NumList?.content.map((el: any) => (
              <div key={el}>
                <input type="radio" id={el} name="suggest" value={el} onChange={handleRadioChange} />
                <span>{addHyphen(el)}</span>
              </div>
            ))} */}
        </S.SelectNumber>
        <S.Provision>
          <h2>이용약관</h2>
          <ul className="selectGroup">
            <li>
              <input
                id="check_all"
                className="check_all"
                type="checkbox"
                name="allAgree"
                onChange={handleAllCheckboxChange}
              />
              <label htmlFor="check_all">Say 015 이용약관 전체 동의</label>
            </li>
            <li>
              <input
                id="check_use"
                className="check"
                type="checkbox"
                name="certTerms1"
                checked={subscribe015.certTerms1}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="check_use">
                서울이동통신(주) 무선호출 이용약관 동의 <span className="gray">(필수)</span>
              </label>
            </li>
            <li>
              <input
                id="check_personal"
                className="check"
                type="checkbox"
                name="serviceTerms1"
                checked={subscribe015.serviceTerms1}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="check_personal">
                개인정보의 수집 애용 위탁 제공 및 활용 동의 <span className="gray">(필수)</span>
              </label>
            </li>
          </ul>
        </S.Provision>
      </SH.GroupWrap>
      <SB.Btn100>
        <button className={subscribe015BtnStyles} onClick={() => completeHandle()} disabled={subscribe015Btn}>
          가입완료
        </button>
      </SB.Btn100>
    </S.SelectNumberWrap>
  );
};

export default SelectNumber;

/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import ChargePopup from '../../ChargePopup';
import * as S from './ChargeTop.styles';
import ATitle from '../../../../Atom/ATitle';
import { v4 as uuidv4 } from 'uuid';
import BaseButton from '../../../../Atom/BaseButton';
import { useChargeStationTop } from '../../../../hooks/customs/charge/chargeStation/useChargeStationTop';
import Loader from '../../../../common/Loader';
import ChargeOnlienPopup from '../chargeOnlienPopup/ChargeOnlienPopup';
import { usePageCharge } from '../../../../hooks/customs/charge/chargeStation/useCharge';
import { useChargeMenuItems } from '../../../../hooks/customs/charge/chargeStation/useChargeMenuItems';

/**
 * 충전하기 페이지 - TOP
 */

const ChargeTopComponent = () => {
  // 이지페이 결재 API HOOKS
  const usePageChargeHooks = usePageCharge();
  // ChargeTop 페이지 CUSTOM HOOKS
  const useChargeStationTopHooks = useChargeStationTop();
  const { Menus, amountCardItems } = useChargeMenuItems();
  const {
    formState: { errors },
  } = useChargeStationTopHooks;
  return (
    <S.TopArticle>
      {usePageChargeHooks.backgroundToggle && <S.BackgroundDiv />}
      {usePageChargeHooks.isChargeProcessKiccLoading && (
        <S.LoadingDiv>
          <Loader />
        </S.LoadingDiv>
      )}
      <ATitle type="sub" text="결제 수단 및 금액" color="#0D42E5" />

      <S.TopWrapper>
        {/* 입금요청서 팝업창 */}
        {useChargeStationTopHooks.isFormOpen && (
          <ChargeOnlienPopup
            setIsFormOpen={useChargeStationTopHooks.setIsFormOpen}
            yupGetValues={useChargeStationTopHooks.getValues}
            amount={
              useChargeStationTopHooks.customBooleanState
                ? useChargeStationTopHooks.customChargeValueState
                : useChargeStationTopHooks.chargeValueState
            }
          />
        )}
        {/* 이지페이 팝업창 */}
        {usePageChargeHooks.isPopupOpen && (
          <ChargePopup
            firstDataState={usePageChargeHooks.firstDataState}
            isChargeKiccLoading={usePageChargeHooks.isChargeKiccLoading}
            closePopup={usePageChargeHooks.closePopup}
          />
        )}
        <S.MenuWrapper>
          {Menus.map((el, index) => (
            <S.MenuCard
              key={uuidv4()}
              className="charge__menu"
              onClick={() => useChargeStationTopHooks.onChangeMenuFocus(index, el.payMethodTypeCode)}
              activeState={index === useChargeStationTopHooks.activeMenuState}
            >
              <S.MenuTitle>{el.title}</S.MenuTitle>
              <S.MenuSubTitle activeState={index === useChargeStationTopHooks.activeMenuState}>
                {el.subTitle}
              </S.MenuSubTitle>
            </S.MenuCard>
          ))}
        </S.MenuWrapper>
        <S.BarBold />
      </S.TopWrapper>
      <S.MidWrapper>
        <S.MidTitle>결제금액 선택 (건당 발송 단가/부가세 포함)</S.MidTitle>
        <S.BarMedium />
        <S.AmountWrapper>
          <S.AmountUl>
            {amountCardItems[useChargeStationTopHooks.activeMenuState].map((el, index) => (
              <S.AmountLi key={uuidv4()}>
                <S.AmountLiSubBox>
                  <label htmlFor={`left${index.toString()}`}>
                    <S.AmountRadioBox
                      id={`left${index.toString()}`}
                      type="radio"
                      name="amount__radio"
                      value={el.left.value}
                      checked={
                        useChargeStationTopHooks.chargeValueState === el.left.value &&
                        !useChargeStationTopHooks.customBooleanState
                      }
                      onChange={useChargeStationTopHooks.handleChargeValueChange}
                    />
                    <S.AmountLiText> {el.left.text}</S.AmountLiText>
                  </label>
                </S.AmountLiSubBox>
                <S.AmountLiSubBox>
                  <label htmlFor={`right${index.toString()}`}>
                    <S.AmountRadioBox
                      id={`right${index.toString()}`}
                      type="radio"
                      name="amount__radio"
                      value={el.right.value}
                      checked={
                        useChargeStationTopHooks.chargeValueState === el.right.value &&
                        !useChargeStationTopHooks.customBooleanState
                      }
                      onChange={useChargeStationTopHooks.handleChargeValueChange}
                    />
                    <S.AmountLiText>{el.right.text}</S.AmountLiText>
                  </label>
                </S.AmountLiSubBox>
              </S.AmountLi>
            ))}
            <S.AmountLiBottom>
              <S.AmountRadioBox
                id="customRadio"
                type="radio"
                name="amount__radio"
                checked={useChargeStationTopHooks.customBooleanState}
                onChange={useChargeStationTopHooks.handleChargeValueChange}
              />
              <S.AmountLiInput
                type="number"
                id="customInput"
                placeholder="직접입력"
                value={useChargeStationTopHooks.customChargeValueState}
                onChange={useChargeStationTopHooks.handleCustomInputChange}
              />
              ( {useChargeStationTopHooks.chargeSaleValueState}
              원/건)
            </S.AmountLiBottom>
          </S.AmountUl>
        </S.AmountWrapper>
      </S.MidWrapper>
      <S.BarBold />
      <S.BottomWrapper>
        <S.BottomTextWrapper>
          <S.BottomText>결제금액</S.BottomText>
          <S.BottomChargeInfo>
            {useChargeStationTopHooks.customBooleanState
              ? (useChargeStationTopHooks.customChargeValueState || 0).toLocaleString('ko-KR')
              : useChargeStationTopHooks.chargeValueState.toLocaleString('ko-KR')}
            원
          </S.BottomChargeInfo>
        </S.BottomTextWrapper>
        <S.BottomTextWrapper>
          <S.BottomText>적립포인트</S.BottomText>
          <S.BottomChargeInfo>
            {useChargeStationTopHooks.pointValueState.toLocaleString('ko-KR')} 포인트 (결제금액의{' '}
            {useChargeStationTopHooks.pointPercentState}% 적립)
          </S.BottomChargeInfo>
        </S.BottomTextWrapper>
      </S.BottomWrapper>
      {/* 무통장 입금일 경우 */}
      {useChargeStationTopHooks.activeMenuState === 2 && (
        <S.BottomWrapper>
          <S.BottomTextWrapper>
            <S.BottomText>입금자명</S.BottomText>
            <S.BottomInput
              type="text"
              placeholder="입금자명을 입력해주세요."
              {...useChargeStationTopHooks.register('name')}
            />
            <S.Error>{errors.name?.message}</S.Error>
          </S.BottomTextWrapper>
          <S.BottomTextWrapper>
            <S.BottomText>알림확인 알림받기 (선택)</S.BottomText>
            <S.BottomInput
              type="text"
              placeholder="'-' 제외한 번호를 입력해주세요."
              {...useChargeStationTopHooks.register('phoneNumber')}
            />
          </S.BottomTextWrapper>
        </S.BottomWrapper>
      )}
      <S.BarBold />
      <S.ButtonWrapper>
        <BaseButton
          backgroundColor="#0D42E5"
          color="#fff"
          fontWeight="bold"
          width={useChargeStationTopHooks.activeMenuState === 2 ? '150px' : '100px'}
          height="31px"
          onClick={
            useChargeStationTopHooks.activeMenuState === 2
              ? useChargeStationTopHooks.handleSubmit(useChargeStationTopHooks.onClickChargeOnlien)
              : () =>
                  usePageChargeHooks.onChargeApi({
                    amount: useChargeStationTopHooks.customBooleanState
                      ? useChargeStationTopHooks.customChargeValueState
                      : useChargeStationTopHooks.chargeValueState,
                    payMethodTypeCode: useChargeStationTopHooks.payMethodTypeCodeState,
                  })
          }
        >
          {useChargeStationTopHooks.activeMenuState === 2 ? '입금요청서 작성하기' : '결제하기'}
        </BaseButton>
      </S.ButtonWrapper>
    </S.TopArticle>
  );
};

export default ChargeTopComponent;

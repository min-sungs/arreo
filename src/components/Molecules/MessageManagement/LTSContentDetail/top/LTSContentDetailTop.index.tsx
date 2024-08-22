import React from 'react';
import * as S from '../../styles/MessageManagementDetail.styles';
import { formatDateBase } from '../../../../../apis/utils/formats/dateFormatUtil';
import { formatPhoneNumber } from '../../../../../apis/utils/formats/phoneNumberFormatUtil';

interface ILTSContentDetailTopComponentProps {
  detailInfo: any;
}
const LTSContentDetailTopComponent = ({ detailInfo }: ILTSContentDetailTopComponentProps) => {
  return (
    <S.DetailInfoBox>
      <S.DetailInfoLeft>
        {detailInfo.imageData && (
          <S.ContentImgWrapper>
            <S.ContentImg src={`data:image/jpeg;base64,${detailInfo.imageData}`} alt="" />
          </S.ContentImgWrapper>
        )}
        <S.ContentTextWrapper>
          <S.ContentInfoTextArea name="" id="" cols={50} rows={15} value={detailInfo.sndMsg} />
        </S.ContentTextWrapper>
      </S.DetailInfoLeft>
      <S.DetailInfoRight>
        <S.RightSubWrapper>
          <S.ContentInfoTopWrapper>
            <S.Div>
              <S.ContentInfoTitle>전송일자</S.ContentInfoTitle>
              <S.ContentInfoText>{formatDateBase(detailInfo?.sndDttm ?? '')}</S.ContentInfoText>
            </S.Div>
            <S.Div>
              <S.ContentInfoTitle>회신번호</S.ContentInfoTitle>
              <S.ContentInfoText>{formatPhoneNumber(detailInfo?.callback)}</S.ContentInfoText>
            </S.Div>
          </S.ContentInfoTopWrapper>
        </S.RightSubWrapper>
      </S.DetailInfoRight>
    </S.DetailInfoBox>
  );
};

export default LTSContentDetailTopComponent;

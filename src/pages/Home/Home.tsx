import React from 'react';
import BaseButton from '../../components/Atom/BaseButton';
import * as S from './Home.styles';

const Home = () => {
  return (
    <S.Container>
      <S.ContainerX>
        <S.AddressViewContainer>
          <S.MainContentWrap>
            <S.Contents>메인콘텐츠1</S.Contents>
            <S.Contents>메인콘텐츠2</S.Contents>
            <S.Contents>메인콘텐츠3</S.Contents>
            <S.Contents>메인콘텐츠4</S.Contents>
            <S.Contents>메인콘텐츠5</S.Contents>
          </S.MainContentWrap>
          <S.ContentWrap1>
            <S.ImageWrap>
              <div>이미지1</div>
              <div>텍스트1</div>
            </S.ImageWrap>
            <S.ButtonWrap>
              <BaseButton
                type="button"
                color="#ffffff"
                backgroundColor="#1175F7"
                width="200px"
                height="40px"
                fontWeight="bold"
              >
                버튼1
              </BaseButton>
            </S.ButtonWrap>
          </S.ContentWrap1>
          <S.ContentWrap2>
            <S.ButtonWrap>
              <BaseButton
                type="button"
                color="#ffffff"
                backgroundColor="#1175F7"
                width="200px"
                height="40px"
                fontWeight="bold"
              >
                버튼2
              </BaseButton>
            </S.ButtonWrap>
            <S.ImageWrap>
              <div>이미지2</div>
              <div>텍스트2</div>
            </S.ImageWrap>
          </S.ContentWrap2>
        </S.AddressViewContainer>
      </S.ContainerX>
    </S.Container>
  );
};

export default Home;

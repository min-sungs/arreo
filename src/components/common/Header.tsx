import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import * as S from './styles/Header.styles';
import {useRecoilState, useSetRecoilState} from "recoil";
import {softPhoneTopTap} from "../../recoil/atoms/common/commonRecoil.ts";

const Header = () => {
  const [pathName, setPathName] = useState<string>("");
  const [softPhoneTopTapState,setSoftPhoneTopTapState] = useRecoilState(softPhoneTopTap);
  const navigate = useNavigate();

  useEffect(() => {
    if(typeof window !== "undefined"){
      setPathName(window.location.pathname);
    }
  }, [navigate]);


  return (
    // 주소록과 회원가입 헤더 제거
    ((pathName === '/signin' || (pathName === '/' && softPhoneTopTapState === "0"))) ? null : (
        <S.Header>
          <S.HeaderWrap>
            <h1><Link to={'/'} onClick={()=> setSoftPhoneTopTapState("0")}>ARREO</Link></h1>
          </S.HeaderWrap>
        </S.Header>
      )
  )
}

export default Header;
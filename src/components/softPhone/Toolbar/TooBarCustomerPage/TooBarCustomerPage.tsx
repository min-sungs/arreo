import React, { useEffect, useState } from 'react';
import * as S from './TooBarCustomerPage.styles.ts';
import * as TS from '../ToolBarListPage/ToolBarListPage.styles.ts';
import { useRecoilState } from 'recoil';
import { menuState } from '../../../../recoil/atoms/softPhone.ts';
import { v4 as uuidv4 } from 'uuid';

import { Link, useNavigate } from 'react-router-dom';
import { useUserInfoChange } from '../../../hooks/customs/myPage/useUserInfoChange.ts';
import { useCallingNumberAdmin } from '../../../hooks/customs/myPage/useCallingNumberAdmin.ts';
import { useMemberLeave } from '../../../hooks/customs/myPage/useMemberLeave.ts';
import { callbackNumberState } from '../../../../recoil/atoms/addressList.ts';

export const ToolBarListPage = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const [callbackNumbers, setCallbackNumbers] = useRecoilState<any[] | undefined>(callbackNumberState);
  const [menuList, setMenuList] = useState<any>([{}]);

  const { profileInfo } = useUserInfoChange();
  const { callingNumberList, selectOpenHandle } = useCallingNumberAdmin();
  const { getUseInfo } = useMemberLeave();

  const { getUseInfoRefetch } = useMemberLeave();

  const navigator = useNavigate();

  const navigate = useNavigate();

  useEffect(() => {
    const numbers = callingNumberList?.map((item: any) => item.callback);
    setCallbackNumbers(numbers);
  }, [callingNumberList]);

  const onClickSignOut = () => {
    localStorage.clear();
    navigate('/signin');
  };

  const onClickMyPage = () => {
    getUseInfoRefetch();
    navigate('/userinfochange');
  };

  // 메뉴 선택
  // const onClickMenu = (e: any) => {
  //   const menuGroup = document.getElementById('menuGroup');
  //   if (menuGroup !== null && menuGroup.children !== undefined && e.target) {
  //     for (const child of menuGroup.children) {
  //       child.classList.remove('active');
  //     }
  //     e.currentTarget.className = 'active';
  //   }
  // };

  // useEffect(() => {
  //   if (typeof window.location !== 'undefined') {
  //     const pathName = String(window.location.pathname);
  //     setMenuList([
  //       { name: '문자', path: '/', active: ['/'].includes(pathName) },
  //       { name: '015 사서함', path: '#', active: ['#'].includes(pathName) },
  //       { name: '전송내역관리', path: '/TransferResult', active: ['/TransferResult'].includes(pathName) },
  //     ]);
  //   }
  // }, []);

  // const onClickNavigation = (path: string) => {
  //   navigator(path);
  // };

  return (
    <S.TooBarCustomerPage>
      <TS.Container>
        <div className="TooBarCustomerWrap">
          <div className="headerMenuGroup">
            <button>도움말</button>
            <button>고객센터</button>
            <button className="black" onClick={onClickMyPage}>
              마이페이지
            </button>
            <button className="black" onClick={onClickSignOut}>
              로그아웃
            </button>
          </div>

          <div className="nameGroup">
            <p>
              <b>{profileInfo?.usrNm}</b> <span>님</span>
            </p>
          </div>
          <div className="pointGroups">
            <div className="pointGroup">
              <p>
                {getUseInfo?.usePg} <span>C</span>
              </p>
              <p className="slash">/</p>
              <p>
                {getUseInfo?.useCc} <span>P</span>
              </p>
            </div>
            <Link to="/charging" className="chargeButton">
              충전소
            </Link>
          </div>
        </div>
      </TS.Container>
    </S.TooBarCustomerPage>
  );
};

export default ToolBarListPage;

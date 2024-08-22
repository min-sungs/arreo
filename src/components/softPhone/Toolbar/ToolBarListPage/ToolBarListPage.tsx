import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as S from './ToolBarListPage.styles';

import { Link, useNavigate } from 'react-router-dom';
import { usePushNotification } from '../../../../apis/hooks/usePushNotification.ts';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { callbackNumberState, selectNumberState } from '../../../../recoil/atoms/addressList.ts';
import { useCallingNumberAdmin } from '../../../hooks/customs/myPage/useCallingNumberAdmin.ts';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPointApi } from '../../../../apis/api/pointApi.ts';
import { useMemberLeave } from 'components/hooks/customs/myPage/useMemberLeave.ts';
import { usePost } from 'apis/hooks/usePost.ts';

export const ToolBarListPage = () => {
  const queryClient = useQueryClient();
  const [, setCallbackNumbers] = useRecoilState<any[] | undefined>(callbackNumberState);
  const setSelectNumber = useSetRecoilState(selectNumberState);
  const [menuList, setMenuList] = useState<any>([{}]);
  const user = localStorage.getItem('user');

  const { unsubscribe } = usePushNotification();
  const { callingNumberList } = useCallingNumberAdmin();
  const { data: pointData, isLoading: pointDataIsLoading } = useQuery(['point'], () => getPointApi());

  const { getUseInfoRefetch } = useMemberLeave();

  const navigate = useNavigate();

  useEffect(() => {
    if (pointData && !pointDataIsLoading) {
      queryClient.invalidateQueries(['sendInfo']);
    }
  }, [pointData, pointDataIsLoading]);

  useEffect(() => {
    const numbers = callingNumberList?.map((item: any) => item.callback);
    if (numbers) {
      setCallbackNumbers(numbers);
      setSelectNumber(numbers[0]);
    }
  }, [callingNumberList]);

  const onClickSignOut = async () => {
    try {
      await unsubscribe();
    } catch (e) {
      console.error(e);
    } finally {
      localStorage.clear();
      navigate('/signin');
      window.location.reload();
    }
  };

  const onClickMyPage = () => {
    getUseInfoRefetch();
    navigate('/userinfochange');
  };

  useEffect(() => {
    if (typeof window.location !== 'undefined') {
      const pathName = String(window.location.pathname);
      setMenuList([
        { name: '문자', path: '/', active: ['/'].includes(pathName) },
        { name: '015 사서함', path: '/say015', active: ['/say015'].includes(pathName) },
        { name: '전송내역관리', path: '/sendresult', active: ['/sendresult'].includes(pathName) },
      ]);
    }
  }, [navigate]);

  const onClickNavigation = (path: string) => {
    navigate(path);
  };

  // 테스트용 >
  const { mutate } = usePost('/say015/reset');

  const testhandle = () => {
    console.log('sdssghdfjlkasdsad');
    mutate({
      onSucces: () => {},
      onError: () => {},
    });
  };
  // 테스트용 <

  return (
    <S.Container>
      <div className="headerMenuGroup">
        <button onClick={testhandle}>도움말</button>
        <button onClick={() => onClickNavigation('/customer')}>고객센터</button>
        <button className="black" onClick={onClickMyPage}>
          마이페이지
        </button>
        <button className="black" onClick={onClickSignOut}>
          로그아웃
        </button>
      </div>
      <div className="nameGroup">
        <p>
          <b>{user}</b> <span>님</span>
        </p>
      </div>
      <div className="pointGroups">
        <div className="pointGroup">
          <p>
            {pointData?.use_pg} <span>C</span>
          </p>
          <p className="slash">/</p>
          <p>
            {pointData?.use_cc} <span>P</span>
          </p>
        </div>
        <Link to="/charging" className="chargeButton">
          충전소
        </Link>
      </div>
      <div id={'menuGroup'} className="rowMenuGroup">
        {menuList.map((el: any) => (
          <button key={uuidv4()} className={el.active ? 'active' : ''} onClick={() => onClickNavigation(el.path)}>
            {el.name}
          </button>
        ))}
      </div>
    </S.Container>
  );
};

export default ToolBarListPage;

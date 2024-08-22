import React, { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';
import { useSignUp } from '../../components/hooks/customs/signUp/useSignUp';

// import { postNiceValidate } from '../api/niceService';

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
const AuthComponent = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const sEncodeData = query.get('encodeData');
  
  useEffect(() => {
    if (sEncodeData) {
      window.opener.postMessage({ sEncodeData }, window.location.origin);
    }
  }, []);

  if (sEncodeData) {
    window.close();
  } else {
    alert('인증정보를 받아오지 못했습니다.');

    window.close();
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LoadingWrap>
        <TailSpin color="#10024d" height={100} width={100} />
      </LoadingWrap>
    </div>
  );
};

export default AuthComponent;
function setPopup(arg0: null) {
  throw new Error('Function not implemented.');
}

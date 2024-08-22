import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }: any) => {
  const [authenticated, setAuthenticated] = useState(Boolean(localStorage.getItem('authorizationToken')));

  useEffect(() => {
    const tokenChangeHandler = () => {
      setAuthenticated(Boolean(localStorage.getItem('authorizationToken')));
    };
    // 이벤트 리스너 등록
    window.addEventListener('storage', tokenChangeHandler);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
    return () => {
      window.removeEventListener('storage', tokenChangeHandler);
    };
  }, []);
  return authenticated ? Component : <Navigate to="/signin" />;
};
export default PrivateRoute;

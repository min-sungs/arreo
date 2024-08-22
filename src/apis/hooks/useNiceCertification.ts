import { useEffect, useState } from 'react';
import { encodeData } from '../api/signUpApis';

// interface NiceReturnUrlProps {
//   url?: string | undefined;
// }

export const useNiceCertification = () => {
  const niceCertification = async () => {
    const returnUrl = process.env.REACT_APP_FRONT_URL;

    const res = await encodeData(`${returnUrl}/AuthComponent`, `${returnUrl}/signUp`);

    // 1. 팝업창으로 띄우는 방법
    const left = window.screen.width / 2 - 500 / 2;
    const top = window.screen.height / 2 - 800 / 2;
    const option = `status=no, menubar=no, toolbar=no, resizable=no, width=500, height=600, left=${left}, top=${top}`;
    window.open(res.config.url, 'nicePopup', option);
    // form.target = '_blank';
    // form.submit();
  };

  return {
    niceCertification,
  };
};

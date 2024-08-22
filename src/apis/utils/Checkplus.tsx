import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CheckPlus = () => {
  const location = useLocation();

  const getUrlParams = (search: any) => {
    const hashes = search.slice(search.indexOf('?') + 1).split('&');
    return hashes.reduce((params: any, hash: any) => {
      const [key, val] = hash.split('=');
      return { ...params, [key]: decodeURIComponent(val) };
    }, {});
  };

  useEffect(() => {
    const params = getUrlParams(location.search);
    const { encodeData } = params;

    // Create a form and append to body
    const form = document.createElement('form');
    document.body.appendChild(form);

    // Set attributes of the form
    form.method = 'post';
    form.action = 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb';

    // Create and append input elements to the form
    const mInput = document.createElement('input');
    mInput.type = 'hidden';
    mInput.name = 'm';
    mInput.value = 'checkplusSerivce';
    form.appendChild(mInput);

    const encodeDataInput = document.createElement('input');
    encodeDataInput.type = 'hidden';
    encodeDataInput.name = 'EncodeData';
    encodeDataInput.value = encodeData;
    form.appendChild(encodeDataInput);

    const paramR1input = document.createElement('input');
    paramR1input.type = 'hidden';
    paramR1input.name = 'param_r1';
    paramR1input.value = '';
    form.appendChild(paramR1input);

    form.submit();

    document.body.removeChild(form); // Remove the created form after submission
  }, [location]);

  return null;
};

export default CheckPlus;

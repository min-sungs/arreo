import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { msgArsToggleState, say015AuthState, say015Number, say015PageState } from 'recoil/atoms/say015Atom';
import { get015Authority } from '../../../../../apis/api/say015Apis';

export const usePOBox015 = () => {
  const setSay015NumberState = useSetRecoilState(say015Number);
  const [, setAuthState] = useRecoilState(say015AuthState);
  const [pageState, setPageState] = useRecoilState(say015PageState);
  const [msgArsToggle, setMsgArsToggle] = useRecoilState(msgArsToggleState);
  const {
    data: authorityData,
    isLoading: authorityDataIsLoading,
    isError,
    refetch: authorityDataRefetch,
  } = useQuery(['authorityData'], get015Authority);

  useEffect(() => {
    if (authorityData && !authorityDataIsLoading) {
      setSay015NumberState(authorityData.number015);
      setAuthState({
        say015User: authorityData.say015User,
        availabilityStatus: authorityData.availabilityStatus,
      });

      if (authorityData.say015User && authorityData.availabilityStatus) {
        setPageState('구독');
        return;
      }
      if (authorityData.say015User && !authorityData.availabilityStatus) {
        setPageState('미구독');
        return;
      }
      if (!authorityData.say015User && !authorityData.availabilityStatus) {
        setPageState('미가입');
      }
    }
  }, [ authorityData, authorityDataIsLoading]);

  return { authorityData, pageState, setPageState, msgArsToggle, authorityDataIsLoading, authorityDataRefetch };
};

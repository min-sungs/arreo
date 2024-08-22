import { useQuery } from '@tanstack/react-query';
import { get015DetailMessage } from 'apis/api/say015Apis';
import { useRecoilValue } from 'recoil';
import { detailMassageIdState } from 'recoil/atoms/say015Atom';

export const usePOBox015Detail = () => {
  const detailMassageId = useRecoilValue(detailMassageIdState); // 클릭된 아이템의 ID를 저장할 state
  const {
    data: msgDetailData,
    isLoading: msgDetailIsLoading,
    isError: msgDetailIsError,
  } = useQuery(['msgDetailData', detailMassageId], () => get015DetailMessage(detailMassageId), {
    enabled: detailMassageId !== null,
  });
  return { msgDetailData, msgDetailIsLoading, msgDetailIsError };
};

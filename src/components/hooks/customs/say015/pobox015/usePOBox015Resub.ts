import { usePost } from 'apis/hooks/usePost';
import { useState } from 'react';
import { useModal } from '../../useModal';
import { useNavigate } from 'react-router-dom';

interface IAuthorityData {
  availabilityStatus: boolean;
  monthlyPrice: number;
  number015: string;
  say015User: boolean;
  subsEndDate: string;
  subscriptionStatus: boolean;
  authorityDataRefetch: any;
}

export const usePOBox015Resub = ({ setOpen015SubPage, initial015SubPage, authorityDataRefetch }: any) => {
  const [postResub015State, setPostResub015State] = useState<boolean>(false); // 버튼 중복 클릭 방지
  const { mutate: postResub015 } = usePost('/say015/subscription');

  const navigate = useNavigate();

  const { confirmModal } = useModal();

  const resub015OnClickHandle = (authorityData: IAuthorityData) => {
    setPostResub015State((prev) => !prev && true);
    confirmModal(
      () =>
        postResub015({
          onSuccess: () => {
            setPostResub015State((prev) => prev && false);
            setOpen015SubPage(initial015SubPage.forth);
            authorityDataRefetch();
          },
          onError: (error: any) => {
            setPostResub015State((prev) => prev && false);
            if (error.response.data === '충전이 필요합니다.') {
              confirmModal(async () => navigate('/charge'), '포인트 부족', '충전소로 이동하시겠습니까?', true);
            }
          },
        }),
      'Say015 구독',
      `${authorityData.monthlyPrice}포인트 · 캐쉬를 사용합니다.`,
      true,
      undefined,
      () => setPostResub015State((prev) => prev && false),
    );
  };

  return { resub015OnClickHandle, postResub015State };
};

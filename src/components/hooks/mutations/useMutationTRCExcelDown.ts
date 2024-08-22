import { useMutation } from '@tanstack/react-query';
// eslint-disable-next-line import/no-cycle
import { trcExcelDownload } from '../../../apis/api/transferResultApi';

export interface IUseMutationTRCExcelDown {
  searchSelectValue: string | null;
  searchDates: string[] | '';
}

export const useMutationTRCExcelDown = ({ searchDates, searchSelectValue }: IUseMutationTRCExcelDown) => {
  const { mutate: mutationExcelDown, isLoading: isExcelLoading } = useMutation(() =>
    trcExcelDownload({ searchDates, searchSelectValue }),
  );

  return {
    mutationExcelDown,
    isExcelLoading,
  };
};

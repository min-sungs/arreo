import { useMutation } from '@tanstack/react-query';
// eslint-disable-next-line import/no-cycle
import { pointHistoryExcelDownload } from '../../../../apis/api/pointApi';

export interface pointExcelDownload {
  searchDates: string[] | string;
  searchSelectValue: string | null;
}

export const useMutationPointExcelDown = ({ searchDates, searchSelectValue }: pointExcelDownload) => {
  const { mutate: mutationExcelDown, isLoading: isExcelLoading } = useMutation(() =>
    pointHistoryExcelDownload({ searchDates, searchSelectValue }),
  );

  return {
    mutationExcelDown,
    isExcelLoading,
  };
};

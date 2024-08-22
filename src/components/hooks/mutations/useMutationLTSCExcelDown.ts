import { useMutation } from '@tanstack/react-query';
// eslint-disable-next-line import/no-cycle
import { ltsExcelDownload } from '../../../apis/api/ltsContentApis';

export interface IUseMutationLTSExcelDown {
  searchSelectValue: string | null;
  searchKeywordValue: string | null;
  searchKeyword: string | null;
}

export const useMutationLTSCExcelDown = ({
  searchKeywordValue,
  searchSelectValue,
  searchKeyword,
}: IUseMutationLTSExcelDown) => {
  const { mutate: mutationExcelDown, isLoading: isExcelLoading } = useMutation(() =>
    ltsExcelDownload({ searchKeywordValue, searchSelectValue, searchKeyword }),
  );
  return {
    mutationExcelDown,
    isExcelLoading,
  };
};

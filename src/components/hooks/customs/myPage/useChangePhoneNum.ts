import { Control, useController } from 'react-hook-form';

export type MessageInfoTypes = {
  subject: string;
};

export const useChangePhoneNum = ({ control }: { control: Control<any> }) => {
  const { field: changeNum1 } = useController({
    name: 'changeNum1',
    defaultValue: '010',
    control,
  });
  const { field: changeNum2 } = useController({
    name: 'changeNum2',
    control,
  });
  const { field: changeNum3 } = useController({
    name: 'changeNum3',
    control,
  });

  return { changeNum1, changeNum2, changeNum3 };
};

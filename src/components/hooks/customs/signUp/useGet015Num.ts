import { useRef } from 'react';
import { Control, useController } from 'react-hook-form';

export const useGet015Num = ({ control }: { control: Control<any> }) => {
  const { field: recNumber } = useController({
    name: 'recNumber',
    control,
  });
  const { field: number015fir } = useController({
    name: 'number015fir',
    control,
  });

  const { field: number015sec } = useController({
    name: 'number015sec',
    control,
  });

  const { field: number015thr } = useController({
    name: 'number015thr',
    control,
  });

  return { recNumber, number015fir, number015sec, number015thr };
};

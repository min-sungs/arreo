import { useRef } from 'react';
import { Control, useController } from 'react-hook-form';

export const useRecoveryId = ({ control }: { control: Control<any> }) => {
  const { field: password } = useController({
    name: 'password',
    control,
  });
  const { field: ispassword } = useController({
    name: 'ispassword',
    control,
  });

  const { field: certifyNumber } = useController({
    name: 'certifyNumber',
    control,
  });

  return { password, ispassword, certifyNumber };
};

import { useRef } from 'react';
import { Control, useController } from 'react-hook-form';

export const useFormController = ({ control }: { control: Control<any> }) => {
  const testref = useRef(null);

  const { field: SignInId } = useController({
    name: 'SignInId',
    control,
  });
  const { field: SignInPassword } = useController({
    name: 'SignInPassword',
    control,
  });

  return { SignInId, SignInPassword };
};

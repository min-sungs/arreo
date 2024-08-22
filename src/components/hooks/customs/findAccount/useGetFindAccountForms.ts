import { useRef } from 'react';
import { Control, useController } from 'react-hook-form';

export const useGetFindAccountForms = ({ control }: { control: Control<any> }) => {
  const testref = useRef(null);
  const { field: password } = useController({
    name: 'password',
    control,
  });
  const { field: ispassword } = useController({
    name: 'ispassword',
    control,
  });
  const { field: phone1 } = useController({
    name: 'phone1',
    control,
  });

  const { field: phone2 } = useController({
    name: 'phone2',
    control,
  });

  const { field: phone3 } = useController({
    name: 'phone3',
    control,
  });

  const { field: email1 } = useController({
    name: 'email1',
    control,
  });

  const { field: email2 } = useController({
    name: 'email2',
    control,
  });

  return { password, ispassword, phone1, phone2, phone3, email1, email2 };
};

import { Control, useController } from 'react-hook-form';

export type MessageInfoTypes = {
  subject: string;
};

export const useGetMessageForms = ({ control, callerNumberList }: { control: Control<any>; callerNumberList: any }) => {
  const { field: subject } = useController({
    name: 'subject',
    control,
  });

  const { field: sndMsg } = useController({
    name: 'sndMsg',
    control,
  });

  const { field: msgType } = useController({
    name: 'msgType',
    defaultValue: 'M0',
    control,
  });

  const { field: callback } = useController({
    name: 'callback',
    defaultValue: callerNumberList?.[0]?.callback,
    control,
  });

  // 반복전송
  const { field: sndInterval } = useController({
    name: 'sndInterval',
    control,
  });

  const { field: dayOfWeek } = useController({
    name: 'dayOfWeek',
    control,
  });

  const { field: sndDate } = useController({
    name: 'sndDate',
    control,
  });
  const { field: sndHour } = useController({
    name: 'sndHour',
    control,
  });
  const { field: sndMinute } = useController({
    name: 'sndMinute',
    control,
  });
  const { field: repeatCount } = useController({
    name: 'repeatCount',
    control,
  });

  return { subject, sndMsg, msgType, callback, sndInterval, dayOfWeek, sndDate, sndHour, sndMinute, repeatCount };
};

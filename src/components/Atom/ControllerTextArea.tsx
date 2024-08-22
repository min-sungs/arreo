import React from 'react';

import { useController } from 'react-hook-form';
import CustomTextArea from './TextArea';

const ControllerTextArea = ({ textAreaWidth, textAreaHeight, fontSize, control, value, name, backGround }: any) => {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <CustomTextArea
      textAreaWidth={textAreaWidth}
      textAreaheight={textAreaHeight}
      fontSize={fontSize}
      backGround={backGround}
      onChange={field.onChange} // send value to hook form
      value={field.value} // input value
      name={field.name} // send down the input name
      // inputRef={field.ref} // send input ref, so we can focus on input when error appear
    />
  );
};

export default ControllerTextArea;

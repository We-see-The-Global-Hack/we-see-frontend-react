import React, { memo } from 'react';
import InputText from 'components/Input/Text';

const FormTextInput = ({
 className,
 placeholder,
 field,
 inputComponent: InputComponent = InputText,
 form: { touched, errors },
 type,
 ...rest
}) =>
  <div className={className}>
      <InputComponent
        {...field}
        placeholder={placeholder}
        error={Boolean(touched[field.name] && errors[field.name])}
        helperText={touched && errors && errors[field.name]}
        type={type}
        {...rest}
      />
  </div>


export default memo(FormTextInput);


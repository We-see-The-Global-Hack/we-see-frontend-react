import React, { memo } from 'react';
import InputText from 'components/Input/Text';

const FormTextInput = ({
 label,
 className,
 placeholder,
 field,
 inputComponent: InputComponent = InputText,
 form: { touched, errors },
 type,
 ...rest
}) =>
  <div className={className}>
    <label>
      {label && <h4>{label}</h4>}
      <InputComponent
        {...field}
        placeholder={placeholder}
        error={Boolean(touched[field.name] && errors[field.name])}
        helperText={touched && errors && errors[field.name]}
        type={type}
        {...rest}
      />
    </label>
  </div>


export default memo(FormTextInput);


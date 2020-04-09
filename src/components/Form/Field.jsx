import Text from '../Form/Text';
import { Field as FormikField } from 'formik';
import React from 'react';

export default ({ name, component = Text, ...rest }) => (
  <FormikField
    name={name}
    component={component}
    label={name}
    placeholder={name}
    {...rest}
  />
);

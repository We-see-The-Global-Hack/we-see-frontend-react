import React from 'react';
import { Formik } from 'formik';
import Field from 'components/Form/Field';

const SignIn = () => {
  
  const renderForm = ({ handleSubmit }) => (
    <form>
      <Field name="name" />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  );
  
  return (
    <div>
      SignIn
      <Formik
        initialValues={{ name: ''}}
        onSubmit={(values) => console.log(values)}
        render={renderForm}
      />
    </div>
  );
};

export default SignIn;

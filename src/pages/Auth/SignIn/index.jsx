import React, { useCallback, memo } from 'react';
import { Formik } from 'formik';
import Field from 'components/Form/Field';
import api from 'libs/apis';
import useFetchData from 'hooks/useFetchData';
import { useDispatch } from 'redux-react-hook';
import { thunkSignIn } from 'domain/env/effects';

const SignIn = () => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(values => {
    console.log('values', values);
    dispatch(thunkSignIn(values));
  }, []);
  
  
  const renderForm = useCallback(({ handleSubmit }) => (
    <form>
      <Field name="name" />
      <button type="button" onClick={handleSubmit}>Submit</button>
    </form>
  ), []);
  
  // rerender component((
  const { resource, fetchResource } = useFetchData({
    api: api.todos,
    initialValues: {},
  });
  
  
  return (
    <div>
      SignIn
      <Formik
        initialValues={{ name: '' }}
        onSubmit={onSubmit}
      >
        {renderForm}
      </Formik>
    </div>
  );
};

export default memo(SignIn);

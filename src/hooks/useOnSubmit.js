import { useCallback } from 'react';

export default function useOnSubmit({
   api,
   params,
   serializer = formValues => formValues,
   onSuccess,
   deps = [],
 }) {
return useCallback(
    async (formValues, actions) => {
    try {
      console.log('onSubmit', params, formValues);
      const response = await api({ ...params, data: serializer(formValues) });
      console.log('re', response);
      if (onSuccess) {
        onSuccess(response, actions);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      actions.setSubmitting(false);
    }
  },
  [serializer, api, ...deps]
);
}

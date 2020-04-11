import { useCallback, useEffect, useState } from 'react';

export default function useFetchData({
  api,
  initialValues,
  initialLoad = true,
  initialParams,
  serializer = data => data,
}) {
  const [{ resource, isLoading }, setValues] = useState({
    isLoading: initialLoad,
    resource: initialValues,
  });
  
  const fetchResource = useCallback(async params => {
    try {
      setValues(state => ({ ...state, isLoading: true }));
      console.log('e', params);
      const response = await api(params);
      console.log('11');
      setValues({ resource: serializer(response.data), isLoading: false });
      return serializer(response.data);
    } catch (error) {
      setValues(state => ({ ...state, isLoading: false }));
      console.log('API ERROR', error);
    }
  }, []);
  
  const setResource = useCallback(setter => {
    setValues(state => ({
        ...state,
        resource: typeof setter === 'function' ? setter(state.resource) : setter,
    }));
  }, []);
  
  useEffect(() => {
    if (initialLoad) {
      fetchResource(initialParams);
    }
  }, []);
  return { resource, isLoading, fetchResource, setResource };
}

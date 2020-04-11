import { useCallback, useState } from 'react';
import useFetchData from 'hooks/useFetchData';
import api from 'libs/apis';
import get from 'lodash.get';

const initialFilters = {
  title: '',
  categoryName: '',
};

export default function (kind) {
  const [filters, setFilters] = useState(initialFilters);
  
  const { resource, fetchResource } = useFetchData({
    api: api.userListings.list,
    initialValues: [],
    initialParams: { params: { kind } },
    serializer: response => response.data,
  });
  
  const search = useCallback(() => {
    const copiedFilters = Object.assign({}, filters);
    Object
      .keys(copiedFilters)
      .forEach(key => !Boolean(copiedFilters[key])
        ? delete copiedFilters[key]
        : copiedFilters[key] = `/${copiedFilters[key]}/`);
    fetchResource({ params: { kind, ...copiedFilters } });
  }, [filters]);
  
  const changeText = key => e => {
    const text = get(e, ['target', 'value'], '');
    setFilters(old => ({ ...old, [key]: text }));
  };
  
  return { filters, setFilters, resource, search, changeText }
}

import React from 'react';
import { TextField } from '@material-ui/core';

const Filters = ({ filters, changeText }) => (
  <>
    <TextField value={filters.title} onChange={changeText('title')} label="Title" style={{ width: 300 }} />
    <TextField value={filters.categoryName} onChange={changeText('categoryName')} label="Category Name" style={{ width: 300 }} />
  </>
);

export default Filters;

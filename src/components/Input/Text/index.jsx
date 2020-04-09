import React, { memo } from 'react';
import { TextField } from '@material-ui/core';

const Text = props => <TextField {...props} />;

export default memo(Text);

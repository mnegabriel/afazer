import React from 'react';
import { AppDiv } from '../../../Interfaces';

const AddItemInput: React.FC<AppDiv> = ({ children, classes }: AppDiv) => {
  return <div className={classes || ''}>{children}</div>;
};

export default AddItemInput;

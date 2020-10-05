import React from 'react';
import { AppDiv } from '../../../Interfaces';

const AddItemInput: React.FC<AppDiv> = ({ children, classes }: AppDiv) => {
  return <section className={classes || ''}>{children}</section>;
};

export default AddItemInput;

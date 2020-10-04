import React from 'react';
import { AppDiv } from '../../../Interfaces';

const TodoItem: React.FunctionComponent<AppDiv> = ({
  children,
  classes,
}: AppDiv) => {
  return <div className={classes || ''}>{children}</div>;
};

export default TodoItem;

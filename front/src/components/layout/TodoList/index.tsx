import React from 'react';
import { AppDiv } from '../../../Interfaces';

const TodoList: React.FunctionComponent<AppDiv> = ({
  children,
  classes,
}: AppDiv) => {
  return <section className={classes || ''}>{children}</section>;
};

export default TodoList;

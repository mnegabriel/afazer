import React from 'react';
import { AppDiv } from '../../../Interfaces';

const TodoItem: React.FunctionComponent<AppDiv> = ({
  children,
  classes,
}: AppDiv) => {
  return (
    <div className={classes || ''}>
      <div className="todoitem__content">{children}</div>
      <div className="todoitem__bg" />
    </div>
  );
};

export default TodoItem;

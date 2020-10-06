import React from 'react';
import { AppDiv } from '../../../Interfaces';

interface TodoItem extends AppDiv {
  bgClass: string;
}

const TodoItem: React.FunctionComponent<TodoItem> = ({
  children,
  classes,
  bgClass,
}: TodoItem) => {
  return (
    <div className={classes || ''}>
      <div>{children}</div>
      {/* <div className={bgClass} /> */}
    </div>
  );
};

export default TodoItem;

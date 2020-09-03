import React from 'react';

interface TodoItemProps {
  itemProps: {
    id: number;
    title: string;
    checked: boolean;
  };
  handleCheck: (id: number) => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  itemProps: { id, title, checked },
  handleCheck, // wierd eslint problem
}: TodoItemProps) => {
  return (
    <div className="todo__item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
      />
      <p>{title}</p>
    </div>
  );
};

export default TodoItem;

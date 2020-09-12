import React from 'react';
import './styles.css';

interface TodoItemProps {
  itemProps: {
    id: number;
    title: string;
    checked: boolean;
  };
  handleCheck: (id: number) => void;
  handleRemove: (id: number) => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  itemProps: { id, title, checked },
  handleCheck,
  handleRemove,
}: TodoItemProps) => {
  return (
    <div className="todo__item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
      />
      <p>{title}</p>
      <button type="button" onClick={() => handleRemove(id)}>
        Apagar
      </button>
    </div>
  );
};

export default TodoItem;

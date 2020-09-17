import React, { useState } from 'react';
import ModalTodo from '../ModalTodo';
import './styles.css';

interface TodoItemDeets {
  id: number;
  title: string;
  checked: boolean;
  description: string;
}

interface TodoItemProps {
  itemProps: TodoItemDeets;
  handleCheck: (id: number) => void;
  handleRemove: (id: number) => void;
  handleUpdate: (id: number, title: string, description: string) => void;
}

const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  itemProps: { id, title, checked, description },
  handleCheck,
  handleRemove,
  handleUpdate,
}: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="todo__item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(id)}
      />
      <p>{title}</p>
      {description && (
        <span role="img" aria-label="description present">
          🎪
        </span>
      )}
      <button type="button" onClick={() => toggleModal()}>
        Editar
      </button>
      <button type="button" onClick={() => handleRemove(id)}>
        Apagar
      </button>
      {isOpen && (
        <ModalTodo
          thisInfo={{ id, title, description }}
          isOpen
          toggleModal={toggleModal}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default TodoItem;

import React, { useState } from 'react';
import ModalTodo from '../ModalTodo';
import { DescriptionIcon, EditIcon, TrashIcon } from '../ReactIcons';
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
    <div className={checked ? 'todo__item checked' : 'todo__item'}>
      <input
        type="checkbox"
        className={checked ? 'checked' : undefined}
        checked={checked}
        onChange={() => handleCheck(id)}
      />
      <p>
        {description && <DescriptionIcon />}
        {title}
      </p>
      <button type="button" onClick={() => toggleModal()}>
        <EditIcon />
      </button>
      <button type="button" onClick={() => handleRemove(id)}>
        <TrashIcon />
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

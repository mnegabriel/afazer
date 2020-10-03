import React, { useState } from 'react';
//
import ModalTodo from '../ModalTodo';
import { EditIcon, TrashIcon } from '../ReactIcons';
//
import { TodoItemProps } from '../../Interfaces';
import './styles.css';
import Checkbox from '../Extra/Checkbox';
import Button from '../Extra/Button';

//
const TodoItem: React.FunctionComponent<TodoItemProps> = ({
  itemProps: {
    item: { id, title, checked, description },
    handleCheck,
    handleRemove,
    handleUpdate,
  },
}: TodoItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={checked ? 'todo__item checked' : 'todo__item'}>
      <Checkbox ticked={checked} tickFunction={() => handleCheck(id)} />
      {/* {description && <DescriptionIcon />} */}
      <p>{title}</p>
      <Button clickBtn={() => toggleModal()} child={<EditIcon />} />
      <Button clickBtn={() => handleRemove(id)} child={<TrashIcon />} />

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

import React, { useState } from 'react';
import Modal from 'react-modal';
import { ModalProps } from '../../Interfaces';
import Button from '../Extra/Button';
import Input from '../Extra/Input';
import modalStylesComponent from './modalComponentStyles';
import './styles.css';

Modal.setAppElement('#root');

const ModalTodo: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    thisInfo: { id, title, description },
    isOpen,
    toggleModal,
    handleUpdate,
  } = props;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  //
  function applySave() {
    const newData = { id, title: newTitle, description: newDescription };
    handleUpdate(newData);
    toggleModal();
  }

  return (
    <Modal style={modalStylesComponent} isOpen={isOpen}>
      <div className="modal">
        <Input thisValue={newTitle} changeValue={setNewTitle} />
        <textarea
          placeholder="Add a description here..."
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
        />
        <Button idBtn="save" clickBtn={() => applySave()} child={<p>Save</p>} />
        <Button
          idBtn="close"
          clickBtn={() => toggleModal()}
          child={<p>Close</p>}
        />
      </div>
    </Modal>
  );
};

export default ModalTodo;

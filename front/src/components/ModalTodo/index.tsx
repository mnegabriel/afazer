import React, { useState } from 'react';
import Modal from 'react-modal';

interface ThisInfo {
  id: number;
  title: string;
  description: string;
}

interface ModalProps {
  thisInfo: ThisInfo;
  isOpen: boolean;
  toggleModal: () => void;
  handleUpdate: (id: number, title: string, description: string) => void;
}

Modal.setAppElement('#root');

const ModalTodo: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const {
    thisInfo: { id, title, description },
    isOpen,
    toggleModal,
    handleUpdate,
  } = props;

  const applySave: (
    thisId: number,
    thisTitle: string,
    thisDescription: string,
  ) => void = (thisId, thisTitle, thisDescription) => {
    handleUpdate(thisId, thisTitle, thisDescription);
    toggleModal();
  };

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  console.log('passada');
  return (
    <Modal isOpen={isOpen}>
      <h1>test</h1>
      <input value={newTitle} onChange={e => setNewTitle(e.target.value)} />
      <textarea
        value={newDescription}
        onChange={e => setNewDescription(e.target.value)}
      />
      <button
        type="button"
        onClick={() => applySave(id, newTitle, newDescription)}
      >
        Save
      </button>
      <button type="button" onClick={() => toggleModal()}>
        Close
      </button>
    </Modal>
  );
};

export default ModalTodo;

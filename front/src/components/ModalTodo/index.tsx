import React, { useState } from 'react';
import Modal from 'react-modal';

import './styles.css'

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

  const modalStyles = {
      content: {
        height                : '80vh',
        width                 : '60vw',
        maxWidth              : '700px',
        minWidth              : '350px',
        paddingLeft           : '30px',
        paddingRight          : '30px',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        borderRadius          : '40px'
      }
  }

  return (
    <Modal style={modalStyles} isOpen={isOpen} >
      <div className='modal'>


        <input value={newTitle} onChange={e => setNewTitle(e.target.value)} size={1}/>
        <textarea
          placeholder='Add a description here...'
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
        />
        <button
          type="button"
          className='save'
          onClick={() => applySave(id, newTitle, newDescription)}
        >
          Save
        </button>
        <button className='close' type="button" onClick={() => toggleModal()}>
          Close
        </button>

      </div>
    </Modal>
  );
};

export default ModalTodo;

import React, { useState } from 'react';
//
import Modal from 'react-modal';
import Button from '../Button';
import Input from '../Input';
//
import { ModalProps } from '../../../Interfaces';
import modalStylesComponent from './modalComponentStyles';

Modal.setAppElement('#root');

const ModalTodo: React.FunctionComponent<ModalProps> = ({
  isOpen,
  children,
}: ModalProps) => {
  // const ModalTodo: React.FunctionComponent<TodoItemProps> = ({
  //   itemProps: {
  //     item: { id, title, description },
  //     handleUpdate,
  //     modalIsOpen,
  //     toggleModal,
  //   },
  // }: TodoItemProps) => {
  // const [modalTitle, setModalTitle] = useState(title);
  // const [modalDescription, setModalDescripion] = useState(description);

  // //
  // function applySave() {
  //   const newData = { id, title: modalTitle, description: modalDescription };
  //   handleUpdate(newData);
  //   toggleModal();
  // }

  return <div className={isOpen ? 'modal' : 'modal closed'}>{children}</div>;
};
// <Modal style={modalStylesComponent} isOpen={modalIsOpen}>
//   <Input thisValue={modalTitle} changeValue={setModalTitle} />

//   <textarea
//     placeholder="Add a description here..."
//     value={modalDescription}
//     onChange={e => setModalDescripion(e.target.value)}
//   />

//   <Button idBtn="save" clickBtn={() => applySave()} child={<p>Save</p>} />

//   <Button
//     idBtn="close"
//     clickBtn={() => toggleModal()}
//     child={<p>Close</p>}
//   />
// </Modal>

export default ModalTodo;

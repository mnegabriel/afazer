import React from 'react';
//
import Modal from 'react-modal';
//
import { ModalProps } from '../../../Interfaces';

Modal.setAppElement('#root');

const ModalTodo: React.FunctionComponent<ModalProps> = ({
  isOpen,
  children,
}: ModalProps) => {
  return (
    <section className={isOpen ? 'modal opened' : 'modal'}>{children}</section>
  );
};

export default ModalTodo;

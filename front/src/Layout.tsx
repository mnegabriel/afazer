import React from 'react';
//
import Afazer from './components/layout/Afazer';
import Title from './components/layout/Title';
import Header from './components/layout/Header';
import BtnLogout from './components/layout/BtnLogout';
import Main from './components/layout/Main';
import TodoList from './components/layout/TodoList';
import TodoItem from './components/layout/TodoItem';
import AddItemInput from './components/layout/AddItemInput';
import Footer from './components/layout/Footer';
import Author from './components/layout/Author';
//
import Input from './components/utils/Input';
import Button from './components/utils/Button';
import Checkbox from './components/utils/Checkbox';
import ModalTodo from './components/utils/ModalTodo';
import {
  AddIcon,
  EditIcon,
  ThumbsUpIcon,
  TrashIcon,
} from './components/utils/ReactIcons';
//
import { AppLogicProps } from './Interfaces';

import './styles/styling.css';

const Layout: React.FunctionComponent<AppLogicProps> = ({
  listData,
  todoListLogic: { handleCheck, handleRemove },
  inputLogic: {
    inputValue,
    setInputValue,
    addItem,
    confirmation,
    setConfirmation,
    confirmRemoval,
  },
  modalLogic: {
    modalIsOpen,
    modalId,
    modalTitle,
    setModalTitle,
    modalDescription,
    setModalDescription,
    openModal,
    closeModal,
    applySave,
  },
}: AppLogicProps) => (
  <>
    <Afazer classes="">
      <Header classes="">
        <Title />

        <BtnLogout />
      </Header>

      <Main classes="">
        <TodoList classes="">
          {listData.map(item => {
            const { id, title, checked } = item;
            return (
              <TodoItem
                key={id}
                classes={!checked ? 'todoitem' : 'todoitem checked'}
              >
                <Checkbox
                  ticked={checked}
                  tickFunction={() => handleCheck(id)}
                />

                <p>{title}</p>

                <Button clickBtn={() => openModal(id)} child={<EditIcon />} />

                <Button
                  clickBtn={() => handleRemove(id)}
                  child={<TrashIcon />}
                />
              </TodoItem>
            );
          })}
        </TodoList>
        <ModalTodo isOpen={modalIsOpen}>
          <div className="title">
            <h2>Title</h2>
            <textarea
              value={modalTitle}
              onChange={e => setModalTitle(e.target.value)}
            />
          </div>

          <div className="description">
            <h2>Description</h2>
            <textarea
              placeholder="Add a description here..."
              value={modalDescription}
              onChange={e => setModalDescription(e.target.value)}
            />
          </div>

          <div className="buttons">
            <Button
              idBtn="close"
              clickBtn={() => closeModal()}
              child={<p>Close</p>}
            />

            <Button
              idBtn="save"
              clickBtn={() =>
                applySave({
                  id: modalId,
                  title: modalTitle,
                  description: modalDescription,
                })
              }
              child={<p>Save</p>}
            />
          </div>
        </ModalTodo>

        <AddItemInput classes="additem">
          <Input
            thisValue={inputValue}
            changeValue={setInputValue}
            enterKeyFunction={addItem}
          />
          {
            // all AddItemInput Buttons
            !confirmation ? (
              <>
                <Button
                  idBtn="add-btn"
                  clickBtn={addItem}
                  child={<AddIcon />}
                />

                <Button
                  idBtn="rmv-checked-btn"
                  clickBtn={() => setConfirmation(true)}
                  child={<TrashIcon />}
                />
              </>
            ) : (
              <>
                <Button
                  idBtn="confirm-btn"
                  clickBtn={confirmRemoval}
                  child={<ThumbsUpIcon />}
                />

                <Button
                  idBtn="decline-btn"
                  clickBtn={() => setConfirmation(false)}
                  child={<ThumbsUpIcon />}
                />

                <h4>REMOVE ALL CHECKED?</h4>
              </>
            )
          }
        </AddItemInput>
      </Main>

      <Footer classes="">
        <Author />
      </Footer>
    </Afazer>
  </>
);

export default Layout;

import React, { useState } from 'react';
//
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import AddItemInput from './components/AddItemInput';
//
import Afazer from './components/Extra/Afazer';
import Title from './components/Extra/Title';
import Header from './components/Header';
import BtnLogout from './components/Extra/BtnLogout';
import Main from './components/Extra/Main';
import Footer from './components/Extra/Footer';
import Author from './components/Extra/Author';
//
import { AppProps } from './Interfaces';
import Input from './components/Extra/Input';
import Button from './components/Extra/Button';
import { AddIcon, ThumbsUpIcon, TrashIcon } from './components/ReactIcons';

const Layout: React.FunctionComponent<AppProps> = ({
  logic: {
    listData,
    handleAdd,
    handleCheck,
    handleRemove,
    handleUpdate,
    removeChecked,
  },
}: AppProps) => {
  //
  const todoItems = listData.map(item => (
    <TodoItem
      key={item.id}
      itemProps={{ item, handleCheck, handleRemove, handleUpdate }}
    />
  ));

  const [inputValue, setInputValue] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const addItem: () => void = () => {
    if (inputValue !== '') {
      handleAdd(inputValue);
      setInputValue('');
    }
  };

  const confirmRemoval: () => void = () => {
    removeChecked();
    setConfirmation(false);
  };

  //
  return (
    <>
      <Afazer>
        <Header>
          <Title />

          <BtnLogout />
        </Header>

        <Main>
          <TodoList>{todoItems}</TodoList>

          <AddItemInput>
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

        <Footer>
          <Author />
        </Footer>
      </Afazer>
    </>
  );
};

export default Layout;

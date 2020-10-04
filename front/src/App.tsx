import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { ItemProps } from './Interfaces';

const App: React.FunctionComponent = () => {
  // ALL STATES
  const [listData, setListData] = useState<ItemProps[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Initial setup
  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(localStorage, 'listData')) {
      setListData(JSON.parse(localStorage.getItem('listData') || '{}'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listData', JSON.stringify(listData));
  }, [listData]);

  // TODO LIST LOGIC ------------------------------------
  function handleCheck(id: number) {
    const newList = listData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setListData(newList);
  }

  function handleAdd(title: string) {
    const newIndex =
      listData.length > 0 ? listData[listData.length - 1].id + 1 : 1;

    const addedItemList = [
      ...listData,
      { id: newIndex, title, checked: false, description: '' },
    ];

    setListData(addedItemList);
  }

  function handleRemove(id: number) {
    const shorterList = listData.filter(item => item.id !== id);
    setListData(shorterList);
  }

  function removeChecked() {
    const unchecked = listData.filter(item => item.checked === false);
    setListData(unchecked);
  }

  function handleUpdate({
    id,
    title,
    description,
  }: Omit<ItemProps, 'checked'>) {
    const itemUpdatedList = listData.map(item => {
      if (item.id === id) {
        return { ...item, title, description };
      }
      return item;
    });
    setListData(itemUpdatedList);
  }
  // TODO LIST LOGIC -- end ------------------------------

  // INPUT LOGIC -----------------------------------------
  function addItem() {
    if (inputValue !== '') {
      handleAdd(inputValue);
      setInputValue('');
    }
  }

  function confirmRemoval() {
    removeChecked();
    setConfirmation(false);
  }

  function toggleModal() {
    setModalIsOpen(!modalIsOpen);
  }
  // INPUT LOGIC ------ end -------------------------------

  //
  return (
    <Layout
      listData={listData}
      todoListLogic={{
        handleCheck,
        handleRemove,
        handleUpdate,
      }}
      inputLogic={{
        inputValue,
        setInputValue,
        addItem,
        confirmation,
        setConfirmation,
        confirmRemoval,
      }}
      modalLogic={{ modalIsOpen, toggleModal }}
    />
  );
};

export default App;

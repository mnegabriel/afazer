import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { ItemProps } from './Interfaces';

const App: React.FunctionComponent = () => {
  // ALL STATES
  const [listData, setListData] = useState<ItemProps[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [modalValues, setModalValues] = useState({
    id: 0,
    title: '',
    description: '',
  });
  const [modalId, setModalId] = useState(0);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Initial setup
  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(localStorage, 'listData')) {
      setListData(JSON.parse(localStorage.getItem('listData') || '{}'));
    } else {
      setListData([
        {
          id: 0,
          title: 'click here for more info!',
          checked: false,
          description:
            'you can edit this text in the pencil icon on the right of the todo item.',
        },
      ]);
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

  // INPUT LOGIC ------ end -------------------------------

  // MODAL LOGIC -----------------------------------------
  function openModal(id: number) {
    const selectedItem = listData.find(item => item.id === id);
    if (selectedItem !== undefined) {
      setModalValues({
        id: selectedItem.id,
        title: selectedItem.title,
        description: selectedItem.description,
      });
      setModalId(selectedItem.id);
      setModalTitle(selectedItem.title);
      setModalDescription(selectedItem.description);
      setModalIsOpen(true);
    }
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalId(0);
    setModalTitle('');
    setModalDescription('');
  }

  function applySave(newData: Omit<ItemProps, 'checked'>) {
    const selectedItem = listData.find(item => item.id === newData.id);
    if (selectedItem !== undefined) {
      if (
        selectedItem.title !== newData.title ||
        selectedItem.description !== newData.description
      ) {
        handleUpdate(newData);
      }
    }
    closeModal();
  }

  // MODAL LOGIC ----- end -------------------------------
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
      modalLogic={{
        modalIsOpen,
        modalId,
        modalTitle,
        setModalTitle,
        modalDescription,
        setModalDescription,
        openModal,
        closeModal,
        applySave,
      }}
    />
  );
};

export default App;

import React, { useState, useEffect } from 'react';
//
import Layout from './Layout';
//
import { ItemProps } from './Interfaces';
//
import './styles/global.css';

const App: React.FunctionComponent = () => {
  const [listData, setListData] = useState<ItemProps[]>([]);

  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(localStorage, 'listData')) {
      setListData(JSON.parse(localStorage.getItem('listData') || '{}'));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listData', JSON.stringify(listData));
  }, [listData]);

  const handleCheck: (id: number) => void = id => {
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
  };

  const handleAdd: (title: string) => void = title => {
    const newIndex =
      listData.length > 0 ? listData[listData.length - 1].id + 1 : 1;

    const addedItemList = [
      ...listData,
      { id: newIndex, title, checked: false, description: '' },
    ];

    setListData(addedItemList);
  };

  const handleRemove: (id: number) => void = id => {
    const shorterList = listData.filter(item => item.id !== id);
    setListData(shorterList);
  };

  const removeChecked: () => void = () => {
    const unchecked = listData.filter(item => item.checked === false);
    setListData(unchecked);
  };

  const handleUpdate: ({
    id,
    title,
    description,
  }: Omit<ItemProps, 'checked'>) => void = ({
    id,
    title,
    description,
  }: Omit<ItemProps, 'checked'>) => {
    const itemUpdatedList = listData.map(item => {
      if (item.id === id) {
        return { ...item, title, description };
      }
      return item;
    });
    setListData(itemUpdatedList);
  };

  //
  return (
    <Layout
      logic={{
        listData,
        handleAdd,
        handleCheck,
        handleRemove,
        handleUpdate,
        removeChecked,
      }}
    />
  );
};

export default App;

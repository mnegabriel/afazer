import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem';
import AddItemInput from '../AddItemInput';
//
import './style.css';

interface ItemProps {
  id: number;
  title: string;
  checked: boolean;
  description: string;
}

const TodoList: React.FunctionComponent = () => {
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

  const handleAdd: (newItem: string) => void = newItem => {
    const newIndex =
      listData.length > 0 ? listData[listData.length - 1].id + 1 : 1;

    const addedItemList = [
      ...listData,
      { id: newIndex, title: newItem, checked: false, description: '' },
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

  const handleUpdate: (
    id: number,
    title: string,
    description: string,
  ) => void = (id, title, description) => {
    const itemUpdatedList = listData.map(item => {
      if (item.id === id) {
        return { ...item, title, description };
      }
      return item;
    });
    setListData(itemUpdatedList);
  };

  const todoitems = listData.map(item => (
    <TodoItem
      key={item.id}
      itemProps={item}
      handleCheck={handleCheck}
      handleRemove={handleRemove}
      handleUpdate={handleUpdate}
    />
  ));

  return (
    <>
      <div className="todo__list">{todoitems}</div>
      <AddItemInput handleAdd={handleAdd} removeChecked={removeChecked} />
    </>
  );
};

export default TodoList;

import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import AddItemInput from '../AddItemInput';
//
import todosData from '../../todosData';

const TodoList: React.FunctionComponent = () => {
  const [listData, setListData] = useState(todosData);

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
      { id: newIndex, title: newItem, checked: false },
    ];

    setListData(addedItemList);
  };

  const handleRemove: (id: number) => void = id => {
    console.log('button ok!', id);
    const shorterList = listData.filter(item => item.id !== id);
    setListData(shorterList);
  };

  const todoitems = listData.map(item => (
    <TodoItem
      key={item.id}
      itemProps={item}
      handleCheck={handleCheck}
      handleRemove={handleRemove}
    />
  ));

  return (
    <>
      <div className="todo__list">{todoitems}</div>
      <AddItemInput handleAdd={handleAdd} />
    </>
  );
};

export default TodoList;

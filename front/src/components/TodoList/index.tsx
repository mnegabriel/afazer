import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import AddItem from '../AddItem';
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
    const newIndex = listData.length + 1;

    const addedItemList = [
      ...listData,
      { id: newIndex, title: newItem, checked: false },
    ];

    setListData(addedItemList);
  };

  const todoitems = listData.map(item => (
    <TodoItem key={item.id} itemProps={item} handleCheck={handleCheck} />
  ));

  return (
    <>
      <div className="todo__list">{todoitems}</div>
      <AddItem handleAdd={handleAdd} />
    </>
  );
};

export default TodoList;

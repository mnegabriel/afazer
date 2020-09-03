import React, { useState } from 'react';
import TodoItem from '../TodoItem';
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

  const todoitems = listData.map(item => (
    <TodoItem key={item.id} itemProps={item} handleCheck={handleCheck} />
  ));

  return <div className="todo__list">{todoitems}</div>;
};

export default TodoList;

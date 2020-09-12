import React from 'react';
import TodoList from '../TodoList';
import './styles.css';

const MainPage: React.FunctionComponent = () => {
  return (
    <div id="mainPage">
      <header>
        <h1>Afazer</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
};

export default MainPage;

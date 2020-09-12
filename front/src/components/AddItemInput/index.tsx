import React, { useState } from 'react';
import './styles.css';

interface AddItemProps {
  handleAdd: (newItem: string) => void;
  removeChecked: () => void;
}

const AddItemInput: React.FC<AddItemProps> = ({
  handleAdd,
  removeChecked,
}: AddItemProps) => {
  const [inputValue, setInputValue] = useState('');
  const [confirmation, setConfirmation] = useState(false);

  const addItem: () => void = () => {
    if (inputValue !== '') {
      handleAdd(inputValue);
      // put the login here
      setInputValue('');
    }
  };

  const handleKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => void = e => {
    if (e.keyCode === 13) {
      addItem();
    }
  };

  const handleAddButton: () => void = () => {
    addItem();
  };

  const confirmRemoval: () => void = () => {
    removeChecked();
    setConfirmation(false);
  };

  return (
    <div id="add-item-input">
      <input
        type="text"
        placeholder="+ Add new item"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => handleKeyPress(e)}
        size={1}
      />
      {!confirmation ? (
        <>
          <button type="button" id="add-btn" onClick={handleAddButton}>
            <span role="img" aria-label="plus">
              ➕
            </span>
          </button>
          <button
            type="button"
            id="rmv-checked-btn"
            onClick={() => setConfirmation(true)}
          >
            <span role="img" aria-label="trash">
              🗑
            </span>
          </button>
        </>
      ) : (
        <>
          <button type="button" id="confirm-btn" onClick={confirmRemoval}>
            <span role="img" aria-label="tick">
              ✔
            </span>
          </button>
          <button type="button" onClick={() => setConfirmation(false)}>
            <span role="img" aria-label="x">
              ✖
            </span>
          </button>
          <h4>REMOVE ALL CHECKED?</h4>
        </>
      )}
    </div>
  );
};

export default AddItemInput;

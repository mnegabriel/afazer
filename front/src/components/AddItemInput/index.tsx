import React, { useState } from 'react';

interface AddItemProps {
  handleAdd: (newItem: string) => void;
  removeChecked: () => void;
}

const AddItemInput: React.FC<AddItemProps> = ({
  handleAdd,
  removeChecked,
}: AddItemProps) => {
  const [inputValue, setInputValue] = useState('');

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

  return (
    <>
      <input
        type="text"
        placeholder="+ Add new item"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => handleKeyPress(e)}
      />
      <button type="button" onClick={handleAddButton}>
        Add Item
      </button>
      <button type="button" onClick={removeChecked}>
        Remove Checked
      </button>
    </>
  );
};

export default AddItemInput;

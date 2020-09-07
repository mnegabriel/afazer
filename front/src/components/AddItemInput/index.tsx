import React, { useState } from 'react';

interface AddItemProps {
  handleAdd: (newItem: string) => void;
}

const AddItemInput: React.FC<AddItemProps> = ({ handleAdd }: AddItemProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => void = e => {
    if (e.keyCode === 13) {
      handleAdd(inputValue);
      // put the login here
      setInputValue('');
    }
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
      <h3>{inputValue}</h3>
    </>
  );
};

export default AddItemInput;

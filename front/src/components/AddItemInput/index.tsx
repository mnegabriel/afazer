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
    <>
      <input
        type="text"
        placeholder="+ Add new item"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => handleKeyPress(e)}
      />

      {!confirmation ? (
        <>
          <button type="button" id="add-btn" onClick={handleAddButton}>
            Add Item
          </button>
          <button
            type="button"
            id="rmv-checked-btn"
            onClick={() => setConfirmation(true)}
          >
            Remove Checked
          </button>
        </>
      ) : (
        <>
          <h4>Are you sure?</h4>
          <button type="button" onClick={confirmRemoval}>
            Yes
          </button>
          <button type="button" onClick={() => setConfirmation(false)}>
            Go back
          </button>
        </>
      )}
    </>
  );
};

export default AddItemInput;

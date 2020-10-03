import React from 'react';

interface InputProps {
  thisValue: string;
  changeValue: (newValue: string) => void;
  enterKeyFunction?: () => void;
}

const Input: React.FunctionComponent<InputProps> = ({
  thisValue,
  changeValue,
  enterKeyFunction,
}: InputProps) => {
  //
  const enterKeyPress: (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => void = e => {
    if (enterKeyFunction !== undefined) {
      if (e.keyCode === 13) {
        enterKeyFunction();
      }
    }
  };

  return (
    <input
      type="text"
      placeholder="+ Add new item"
      value={thisValue}
      onChange={e => changeValue(e.target.value)}
      onKeyDown={e => enterKeyPress(e)}
      size={1}
    />
  );
};

export default Input;

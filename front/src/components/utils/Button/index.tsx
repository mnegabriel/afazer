import React from 'react';

interface BtnProps {
  idBtn?: string;
  clickBtn: () => void;
  child: React.ReactNode;
}

const Button: React.FunctionComponent<BtnProps> = ({
  idBtn,
  clickBtn,
  child,
}: BtnProps) => {
  return (
    <button type="button" id={idBtn} onClick={clickBtn}>
      {child}
    </button>
  );
};

export default Button;

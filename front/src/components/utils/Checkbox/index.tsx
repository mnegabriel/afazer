import React from 'react';

interface DTO {
  ticked: boolean;
  tickFunction: () => void;
}

const Checkbox: React.FunctionComponent<DTO> = ({
  ticked,
  tickFunction,
}: DTO) => {
  return <input type="checkbox" checked={ticked} onChange={tickFunction} />;
};

export default Checkbox;

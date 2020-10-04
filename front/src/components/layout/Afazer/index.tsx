import React from 'react';
import { AppDiv } from '../../../Interfaces';

const Afazer: React.FunctionComponent<AppDiv> = ({
  children,
  classes,
}: AppDiv) => {
  return <div className={classes || ''}>{children}</div>;
};

export default Afazer;

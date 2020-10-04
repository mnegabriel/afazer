import React from 'react';
import { AppDiv } from '../../../Interfaces';

const Main: React.FunctionComponent<AppDiv> = ({
  children,
  classes,
}: AppDiv) => {
  return <main className={classes || ''}>{children}</main>;
};

export default Main;

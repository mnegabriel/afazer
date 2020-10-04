import React from 'react';
import { AppDiv } from '../../../Interfaces';

const Footer: React.FunctionComponent<AppDiv> = ({
  children,
  classes,
}: AppDiv) => {
  return <footer className={classes || ''}>{children}</footer>;
};

export default Footer;

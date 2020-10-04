import React from 'react';
import { AppDiv } from '../../../Interfaces';

const Header: React.FunctionComponent<AppDiv> = ({ classes }: AppDiv) => (
  <header className={classes || ''}>
    <h1>Afazer</h1>
  </header>
);

export default Header;

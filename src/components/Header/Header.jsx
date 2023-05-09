import React from 'react';
import Button from '../Button/Button';
import './Header.scss';
import Users from '../Users/Users';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <img src="./Logo.svg" alt="logo" width="104" height="26" />

        <div className="header-buttons">
          <HashLink to="#users" smooth>
            <Button title="Users" />
          </HashLink>
          <HashLink to="#form" smooth>
            <Button title="Sign up" />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

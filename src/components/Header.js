import React from 'react';
import {NavLink} from 'react-router-dom'
const Header = () => (
  <div>
    <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="create" activeClassName="is-active">Create</NavLink>
    <NavLink to="/help" activeClassName="is-active">ExpenseHelp</NavLink>
    </header>
  </div>
);

export default Header;
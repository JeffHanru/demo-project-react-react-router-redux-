import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="headerContainer">
        <header className="container">
            <h1>Welcome to your ideas collection</h1>
            <div className="links">
                <NavLink to="/" activeClassName='active' className="link" exact={true}>Ideas List</NavLink>
                <NavLink to="/create" activeClassName='active' className="link" >Create New Idea</NavLink>
            </div>
        </header>
    </div>

);

export default Header;

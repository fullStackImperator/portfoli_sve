import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationContainer, NavItem } from './Header.style'

const Header = () => (
        <NavigationContainer>
            <NavItem to="/" activeClassName="is-active" exact={true}> Home </NavItem>
            <NavItem to="/projects" activeClassName="is-active"> Projects </NavItem>
            <NavItem to="/aboutMe" activeClassName="is-active"> About Me </NavItem>
            <NavItem to="/help" activeClassName="is-active"> Help </NavItem>
        </NavigationContainer>
);

export default Header;



    // <header>
    //     <NavigationContainer>
    //         <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
    //         <NavLink to="/projects" activeClassName="is-active"> Projects </NavLink>
    //         <NavLink to="/aboutMe" activeClassName="is-active"> About Me </NavLink>
    //         <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
    //     </NavigationContainer>
    // </header>

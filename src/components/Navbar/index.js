import React from 'react'
import {Nav, NavLink, Bars, NavIcon} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/">Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Pizze</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar

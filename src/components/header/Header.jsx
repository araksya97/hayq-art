import React, { PureComponent } from 'react';
import './Header.scss';
import logo from '../../assets/image/hayq-art.png';
import { NavLink } from 'react-router-dom';


export class Header extends PureComponent {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <nav className="header__nav">
                        <NavLink
                            to='/'
                            exact
                        >
                            <img
                                src={logo} alt="Logo"
                                className="header__logo"
                            />
                        </NavLink>



                        <ul className="header__list">
                            <li>
                                <NavLink
                                    to='/'
                                    exact

                                >
                                    Home
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to='/'
                                    exact

                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    exact

                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    exact

                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>

                        <form className="header__form">
                            <input className="header__input" type="text" placeholder="Search" />
                            <button className="header__btn" type="submit"></button>
                        </form>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header

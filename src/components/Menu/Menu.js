import React from 'react';
import style from './Menu.module.css';
import useAuth from "../../hooks/useAuth";
import {NavLink} from "react-router-dom";

function Menu() {
    const [auth, setAuth] = useAuth();
    const login = (e) => {
        e.preventDefault();
        setAuth(true);
    }
    const logout = (e) => {
        e.preventDefault();
        setAuth(false);
    }

    return (
        <div className={`${style.menuContainer} breadcrumb`}>
            <ul className={style.menu}>
                <li className={style.menuItem}>
                    <NavLink className={({isActive}) => isActive ? style.menuItemActive : style.menuItemDisable} to="/">
                        Home
                    </NavLink>
                </li>
                {auth ? (
                    <>
                        <li className={style.menuItem}>
                            <NavLink
                                className={({isActive}) => isActive ? style.menuItemActive : style.menuItemDisable}
                                to='/profil/szczegoly'
                            >
                                Mój profil.
                            </NavLink>
                        </li>
                        <li className={style.menuItem}>
                            <a href="#" className={style.menuItemDisable} onClick={logout}>Wyloguj</a>
                        </li>
                    </>
                ) : (
                    <>
                        <li className={style.menuItem}>
                            <NavLink
                                className={({isActive}) => isActive ? style.menuItemActive : style.menuItemDisable}
                                to="/rejestracja"
                            >
                                Zarejestruj
                            </NavLink>
                        </li>
                        <li className={style.menuItem}>
                            <a href="#" onClick={login}>Zaloguj</a>
                        </li>
                    </>
                )
                }
            </ul>
        </div>
    );
}

export default Menu;
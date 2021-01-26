import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css'

const Nav = () => {
    return(
        <div id="menus">
            <div>
                <ul className="nav nav-pills nav-fill">
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Login">LOGIN</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Register">CADASTRO</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Password">ALTERAR SENHA</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Settings">AJUSTES</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
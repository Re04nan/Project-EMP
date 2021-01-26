import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
//import flor from '../../assets/images/flor.png'

const Nav = () => {
    return (
        <div id="menu">
            <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="#">texto</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/"><span className="sr-only">(current)</span>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Login">LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Register">CADASTRO</Link>
                            </li>
                            <li className="nav-item">
                               <Link className="nav-link text-light" to="/Password">ALTERAR SENHA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/Settings">AJUSTES</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        
    )
}



export default Nav;
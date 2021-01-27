import React from "react";

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../components/css/global.css';
import Img from '../assets/images/eumeprotejo.png';
import abelha from '../assets/images/abelhass.png';
import menina from '../assets/images/menina.png';

import './styles.css'

const Index = () =>{
    return(
    <>
    <div id="cor-de-fundo">
    <Nav/>
        <main className="temp2"> 
            <div id="caixaHome">
                <figure id="caixaEmp">
                <a href="https://www.eumeprotejo.com/" target="_blank">
                    <img alt="Eu Me Protejo" src={menina}/>
                    <figcaption>CONHEÇA O <br/>EU ME PROTEJO</figcaption>
                </a>
                </figure>                          
                <figure id="logo">
                    <img alt="Eu Me Protejo"src={Img}/>
                </figure>
                <span>
                    <button className="btn" nome="iniciar" title="INICIAR" id="btnIniciar"><i class="fas fa-play"/>&nbsp;&nbsp; <span>INICIAR</span></button>
                </span>
                <div>
                    <button nome="ajustes" title="AJUSTES" className="btn btnConfig"><i class="fas fa-cog"/> <span>AJUSTES</span></button>                        <button nome="extra" title="EXTRA" className="btn btnConfig"><i class="fas fa-plus"/> <span>EXTRA</span></button>
                    <button nome="sair" title="SAIR" className="btn btnConfig"><i class="fas fa-door-open"/> <span>SAIR</span></button>
                </div>
                <figure id="caixaBeeP">
                    <img alt="Bee" src={abelha}/>
                </figure>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
        </div>
    </>
    )
}

export default Index;

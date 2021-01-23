import React from "react";

import Nav from '../components/Nav';
import Rodape from '../components/Footer';
import Img from '../assets/images/eumeprotejo.png';
import abelha from '../assets/images/abelhass.png';

import './styles.css'
import '../components/css/button.css';
import '../components/css/container.css'



const Index = () =>{
    return(
    <>
        <div>
            <div className="App" id="cor-de-fundo">
                <div>
                <Nav />
                </div>   
            <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                    <div className="col-sm-10"></div>
                    <div id="emp" className="col-md">                          
                        <p>CONHEÇA O <br/>
                        EU ME PROTEJO</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div id="cartaz" className="col-sm"><img src={Img}/></div>
                </div>
                    <div className="row justify-content-center mt-5">
                        <button class="btn" nome="iniciar" id="btni">INICIAR</button>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col"></div>
                        <button class="btn" nome="ajustes" id="btn">AJUSTES</button>
                        <button class="btn mr-5 ml-5" nome="extra" id="btn">EXTRA</button>
                        <button class="btn" nome="sair" id="btn">SAIR</button>
                        <div className="col"></div>
                    </div>
                    <div className="fixed-bottom mb-5">
                        <img className="ml-5" id="abelhinha" src={abelha}/>
                    </div>
                </div>
            </div>
        </div>
        <Rodape/>
    </>
    )
}

export default Index;

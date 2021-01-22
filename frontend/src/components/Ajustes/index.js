import React from 'react';
import Nav  from '../Menu'
import Rodape from '../Rodape';

import abelha from '../imagens/abelhass.png';
import '../css/conteiner.css'

const Ajustes = () => {
    return(
        <>
            <main id="cor-de-fundo">
                <Nav />
                    <div id="Ajustes" className="container">
                        <div className="row justify-content-center">AJUSTES</div>

                        <div className="row justify-content-center">
                            <i className="fas fa-volume-up" id="ajustes-icon1"/> 
                            <div id="ajustes-texto">SOM</div>
                        </div>
                        <div className="row justify-content-center"  id="espaçamento-opcoes">
                            <button id="opcao" className="btn btn-outline-light">LIGADO</button>
                            <button id="opcao" className="btn btn-outline-light" >DESLIGADO</button>
                        </div>

                        <div className="row justify-content-center">
                            <i class="fas fa-music" id="ajustes-icon1"/> 
                            <div id="ajustes-texto">MÚSICA DE FUNDO</div>
                        </div>
                        <div className="row justify-content-center" id="espaçamento-opcoes">
                            <button id="opcao" className="btn btn-outline-light">LIGADA</button>
                            <button id="opcao" className="btn btn-outline-light" >DESLIGADA</button>
                        </div>

                        <div className="row justify-content-center">
                            <i class="fas fa-text-height" id="ajustes-icon1"/> 
                            <div id="ajustes-texto">FONTE</div>
                        </div>
                        <div className="row justify-content-center" id="espaçamento-opcoes">
                            <button id="opcao" className="btn btn-outline-light"><div id="sma">PEQUENA</div></button>
                            <button id="opcao" className="btn btn-outline-light" >MÉDIA</button>
                            <button id="opcao" className="btn btn-outline-light" ><div id="big">GRANDE</div></button>
                        </div>                
                    </div>
                    <div className="fixed-bottom mb-5">
                        <img className="ml-5" alt="Bee" id="abelhinha" src={abelha}/>
                    </div>
            </main>
            <Rodape/>
        </>
    )
}

export default Ajustes;
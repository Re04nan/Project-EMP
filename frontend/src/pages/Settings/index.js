import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import abelha from '../../assets/images/abelhass.png';
import '../../components/css/global.css';
import './styles.css';


const Settings = () => {
    return(
        <>
            <div id="cor-de-fundo">
            <header><Nav /></header>
            <main id="temporario2">                
                    <div id="caixaAjustes">
                        <h2>AJUSTES</h2> 
                        <div className="ajustes-texto"><i className="fas fa-volume-up"/> SOM</div>
                        <div className="espaçamento-opcoes">
                            <button className="btn btn-outline-light opcao">  LIGADO</button>
                            <button className="btn btn-outline-light opcao">  DESLIGADO</button>
                        </div>
                        <div className="ajustes-texto"><i class="fas fa-music"/>   MÚSICA DE FUNDO</div>
                        <div className="espaçamento-opcoes">
                            <button className="btn btn-outline-light opcao" >   LIGADA</button>
                            <button className="btn btn-outline-light opcao">   DESLIGADA</button>
                        </div>    
                        <div className="ajustes-texto"><i class="fas fa-text-height"/>   FONTE</div>
                        <div className="espaçamento-opcoes">
                            <button className="btn btn-outline-light opcao">   PEQUENA</button>
                            <button className="btn btn-outline-light opcao">   MÉDIA</button>
                            <button className="btn btn-outline-light opcao">   GRANDE</button>
                        </div>                
                    </div>
                    <figure className="caixaBee">
                        <img alt="Bee" src={abelha}/>
                    </figure>
            </main>
            <footer><Footer /></footer>
            </div>
    </>
    )
}

export default Settings;
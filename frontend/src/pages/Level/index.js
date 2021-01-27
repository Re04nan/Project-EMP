import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../axios/Api';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import abelha from '../../assets/images/abelhass.png';
import colmeias from '../../assets/images/colmeias.png';

import './styles.css';

const Level = ({match}) => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [id, setId] = useState("");

    function deleteUser () {
        async function del(){
            await API.delete('/Excluir.php?id='+ match.params.id)
            .then((res) => {
                console.log(res.data.sucess);
                comeBack("/");
            });
        };
        del()
    }

    function confirmDelete() {
        const confirm = window.confirm("Tem certeza que deseja deletar sua conta?");
        if (confirm === true) {
            deleteUser();
        } else {
            comeBack("/Level/" + match.params.id);
        }
    }
    useEffect(async() => {
        await API.get("/Fase.php?id="+ match.params.id)
        .then((response) => {
            setName(response.data.sucess[0].nome);
            setId(response.data.sucess[0].id_modulo);
            console.log(name);
            console.log(id);
        });
    },[])

    const comeBack = (url) => history.push(url);

    return(
        <>
        <div id="cor-de-fundo">
        <nav>
            <Nav />
        </nav>
            <main className="temp2">
               
                <div id="caixaProgresso">
                    <h2 id="tituloP">PROGRESSO</h2>
                        <span><p>COMPLETE AS<br/>FASES PARA CONTINUAR!</p></span>
                    <div>
                        <p>FASE: {id} <br/> USUÁRIO: {name}</p>
                    </div>
                    <figure id="colmeiaLevel">
                            <img alt="colmeia" src={colmeias}/>
                    </figure>
                </div>
                <div className="btnGroup">
                    <button onClick={()=>comeBack("/")} className="btn" id="btnSair" type="submit" title="SAIR" name="sair"><i class="fas fa-door-open"></i></button>
                    <button onClick={confirmDelete} className="btn" id="btnApagar" type="submit" title="APAGAR CONTA" name="excluir"><i class="fas fa-trash-alt"></i></button>
                </div>
                <figure className="caixaBee">
                    <img alt="Bee" src={abelha}/>
                </figure>
            </main>
            <footer>
                <Footer />
            </footer>
            </div>
        </>
        )
}

export default Level;
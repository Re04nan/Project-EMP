import React, {useEffect, useState} from 'react';
import API from '../../axios/Api';
import {useHistory} from 'react-router-dom';

import Rodape from '../Rodape';
import colmeias from '../imagens/colmeias.png';
import abelha from '../imagens/abelhass.png';

import '../css/colmeia.css';
import '../css/conteiner.css';
import '../css/botao.css';

const Nivel = ({match}) => {
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
            comeBack("/Niveis/" + match.params.id);
        }
    }

    /*async function fase(event) {
        event.preventDefault();
        await API.get("/Fase.php?id="+ match.params.id)
        .then((response) => { 
            console.log(response.data.sucess);
        })
    }*/

    useEffect(async() => {
        await API.get("/Fase.php?id="+ match.params.id)
        .then((response) => {
            setName(response.data.sucess[0].nome);
            setId(response.data.sucess[0].id_user);
            console.log(name);
            console.log(id);
        });
    },[])

    const comeBack = (url) => history.push(url);

    return(
        <>
            <main id="cor-de-fundo" className="container-fluid">
                <div className="row justify-content-end">
                    <button onClick={()=>comeBack("/")} className="btn m-4" id="btn" type="submit" name="sair">SAIR</button>
                    <button onClick={confirmDelete} className="btn m-4" id="btnE" type="submit" name="excluir">APAGAR CONTA?</button>
                </div>
                <div  className="row justify-content-center pt-4">
                        <div id="fundo-aqui">
                            <div  className="row justify-content-right p-4">
                                <h1>FASE: {id} USUÁRIO: {name}</h1>
                            </div>
                            PROGRESSO
                            <div id="menor-texto" className="">
                                COMPLETE AS<br />FASES PARA CONTINUAR!
                            </div>
                        </div>
                        <div className="fixed-bottom mb-5">
                            <img id="abelhinha" alt="Bee" src={abelha}/>
                        </div>
                </div>
            </main>
            <Rodape />
        </>
        )
}

export default Nivel;
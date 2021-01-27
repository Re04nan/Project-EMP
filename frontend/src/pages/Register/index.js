import React, {useState} from 'react';
import API from '../../axios/Api';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import '../../components/css/global.css';
import abelha from '../../assets/images/abelhass.png';

import './styles.css';

 const Register = () => {
    const [msg, setMsg] = useState();
    const [cadastro, setCadastro] = useState({
        nome: "",
        email: "", 
        senha: ""
    });

    const controleCadastro = (event) => {
        setCadastro({
            ...cadastro,
            [event.target.name]: event.target.value
        });
    }
    
    async function upCadastro(event){
        event.preventDefault();
    
        let campo1 = document.getElementById('senha').value;
        let campo2 = document.getElementById('confirmaSenha').value;
        if(campo1 === campo2){
            await API.post('/Cadastro.php', cadastro)
            .then((response) => {
                if (response.data.sucess === true) {
                    setMsg(true);
                    resInfo(msg);
                } else {
                    setMsg(false);
                    resInfo(msg);
                }
            })
        }else {
            setMsg(false);
            resInfo(msg);
        }
    } 
    
    function resInfo(msg) {
        setTimeout(()=>{
            setMsg(msg);
        }, 3000);
    }

    return(
    <>
        <div id="cor-de-fundo">
        <header><Nav /></header>
        <main className="temp2">
            <div id="caixaRegister">
                <form onSubmit={upCadastro}>
                    <label id="tituloC">CADASTRAR</label>
                    <input onChange={controleCadastro} className="inputC" type="text" name="nome" placeholder="NOME DE USUÁRIO"></input>
                    <input onChange={controleCadastro} className="inputC" type="text" name="email" placeholder="E-MAIL DO RESPONSAVEL"></input>                   
                    <input onChange={controleCadastro} className="inputC" id="senha" type="password" name="senha" placeholder="SENHA"></input>
                    <input className="inputC" type="password" id="confirmaSenha" name="confirme" placeholder="CONFIRME A SENHA"></input>                            
                    <button type="submit" className="btn" nome="CRIAR" id="btnCad">CRIAR CONTA</button>
                </form>
                { 
                    msg === true && <div className="alert alert-success w-75" role="alert"> SUCESSO </div>
                }
                { 
                    msg === false && <div className="alert alert-danger w-75" role="alert"> ERROR </div>
                }
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

export default Register;
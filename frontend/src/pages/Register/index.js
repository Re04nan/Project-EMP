import React, {useState} from 'react';
import API from '../../axios/Api';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import abelha from '../../assets/images/abelhass.png';

import './styles.css';
import '../../components/css/global.css';
import '../../components/css/container.css';
import '../../components/css/button.css';

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
    
        await API.post('/Cadastro.php', cadastro)
        .then((response) => {
            if (response.data.sucess === true) {
                setMsg(true);
                resInfo(msg);
            } else {
                setMsg(false);
                resInfo(msg);
            }
    
            /*document.getElementById("InpC").value = "";
            document.getElementById("InpC").value = "";
            document.getElementById("InpC").value = "";*/
        })   
    } 
    
    function resInfo(msg) {
        setTimeout(()=>{
            setMsg(msg);
        }, 3000);
    }

    return(
    <>
        <main id="cor-de-fundo">
                <Nav/>
                <div id="Cadastro" className="container">
                    <div className="row justify-content-center pt-4">
                        <form onSubmit={upCadastro}>
                            <label id="titulo">CADASTRAR</label>
                                <input onChange={controleCadastro} id="InpC" type="text" name="nome" placeholder="NOME DE USUÁRIO"></input>
                                <input onChange={controleCadastro} id="InpC" type="text" name="email" placeholder="E-MAIL DO RESPONSAVEL"></input>
                                <input onChange={controleCadastro} id="InpC" type="password" name="senha" placeholder="SENHA"></input>
                                <input id="InpC" type="password" name="confirme" placeholder="CONFIRME A SENHA"></input>
                            <div className="row justify-content-center mt-2">
                                <button type="submit" className="btn" nome="CRIAR" id="btnC">CRIAR CONTA</button>
                            </div>
                        </form>
                        { 
                            msg === true && <div className="alert alert-success mx-auto mt-4 w-75" role="alert"> Sucesso </div>
                        }
                        { 
                            msg === false && <div className="alert alert-danger mx-auto mt-4 w-75" role="alert"> Erro </div>
                        }
                    </div>
                </div>
            <div className="fixed-bottom mb-5">
                <img className="ml-5" alt="Bee" id="abelhinha" src={abelha}/>
            </div>
        </main>
            <Footer />
    </>
        )
}

export default Register;
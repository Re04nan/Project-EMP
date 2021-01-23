import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../axios/Api';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import abelha from '../../assets/images/abelhass.png';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../components/css/global.css';

const Login = () =>{
    const history = useHistory();
    const [msg, setMsg] = useState();
    const [entrar, setEntrar] = useState();
    const [login, setLogin] = useState({
        nome: "",
        senha: ""
    });
    const controleLogin = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        });
    }
    async function upLogin(event) {
        event.preventDefault();

        await API.post('/Login.php', login)
        .then((response) => { 
            if(response.data.sucess !== undefined) {
                setEntrar(true);
                const idUser = response.data.id;
                goMenu(idUser);
            } else {
                setEntrar(false);
                setMsg(false);
                resInfo(msg);
            }
        })
    }

    function resInfo(msg) {
        setTimeout(()=>{
            setMsg(msg);
        }, 3000);
    }

    function goMenu (id) {
        if (entrar === true) {
            history.push(`/Level/${id}`);
        } else {
            history.push("/Login");
        }
    }
    return(
        <>
            <main id="cor-de-fundo">
            <Nav/>
            <div id="conte1" className="container">
                <div className="row justify-content-center pt-4">
                    <form onSubmit={upLogin}>
                        <label id="container-titulo">LOGIN</label>

                        <div className="row justify-content-center">
                            <input onChange={controleLogin} id="InpL" type="text" class="mt-5 row" name="nomeLog" placeholder="NOME DE USUÁRIO" />
                            <input onChange={controleLogin} id="InpL" type="password" class="mt-4" name="senhaLog" placeholder="SENHA" />
                        </div>
                        <div className="row justify-content-center">
                            <input type="checkbox" name="mark-ativo" value="mark-ativo" id="mark-ativo"/>
                            <label id="manter-conectado" for="mark-ativo">MANTER CONECTADO</label>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <button className="btn btn-light rounded-circle" id="botaoplay">
                                <i class="fas fa-play"/>
                            </button>
                        </div>
                        <Link to="/Cadastro" id="clique-aqui" className="mt-4 aqui">NÃO TEM CADASTRO?</Link>
                        <Link to="/AlterarSenha" className="aqui"><p>ESQUECEU A SENHA?</p></Link>
                    </form>
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
export default Login;

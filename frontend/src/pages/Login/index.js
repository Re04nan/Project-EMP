import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import API from '../../axios/Api';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import abelha from '../../assets/images/abelhass.png';

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
            <div id="cor-de-fundo">
            <header>
                <Nav />
            </header>
            <main id="container-login">
                <div className="section-login">
                    <form onSubmit={upLogin} className="box-login">
                        <label className="form-title">LOGIN</label>
                        <input onChange={controleLogin} type="text" className="input-login" name="nomeLog" placeholder="NOME DE USUÁRIO" />
                        <input onChange={controleLogin} type="password" className="input-login" name="senhaLog" placeholder="SENHA" />
                        <Link to="/Password" className="link">ESQUECEU A SENHA?</Link>
                        <div className="box-btn-play">
                            <button className="btn-play">
                                <i class="fas fa-play"/>
                            </button>
                        </div> 
                        <Link to="/Register" className="link">NÃO TEM CADASTRO?</Link>
                        { 
                            msg === false && <div id="alert" className="alert alert-danger mx-auto mt-4 w-75" role="alert"> Erro ao fazer login </div>
                        }
                    </form>
                    <div className="box-personage">
                        <img className="personage" alt="Bee" src={abelha}/>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
            </div>
        </>
    )
}
export default Login;

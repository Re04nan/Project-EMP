import React, {useState} from 'react';
import API from '../../axios/Api';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import abelha from '../../assets/images/abelhass.png';

import '../../components/css/global.css';
import './styles.css';

const Password = () =>{
    const [msg, setMsg] = useState();
    const [update, setUpdate] = useState({
        email: "",
        senha: ""
    });

    const controleUpdate = (event) => {
        setUpdate({
            ...update,
            [event.target.name]: event.target.value
        });
    }

    async function upDate(event) {
        event.preventDefault();

        await API.post('/Alterar.php', update)
        .then((response) => { 
            console.log(response)
            if (response.data.sucess === true) {
                setMsg(true);
                resInfo(msg);
            } else {
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

    return(
        <>  
            <div id="cor-de-fundo">
            <header>
                <Nav />
            </header>
            <main className="container-alter">
                <div className="section-alter">
                    <form onSubmit={upDate} className="box-alter">  
                        <label className="form-title">ALTERAR<br />SENHA</label>
                        <input onChange={controleUpdate} type="email" className="input-alter" name="email" placeholder="E-MAIL"></input>
                        <input onChange={controleUpdate} type="password" className="input-alter" name="senha" placeholder="NOVA SENHA"></input>
                        <div className="box-btn">
                            <button className="btn-alter" nome="alterar">ALTERAR</button>
                        </div> 
                        { 
                            msg === true && <div className="alert alert-success mx-auto mt-4 w-75 msg-send" role="alert"> Alteração feita com sucesso </div>
                        }
                        { 
                            msg === false && <div className="alert alert-danger mx-auto mt-4 w-75 msg-send" role="alert"> Erro ao efetuar alteração </div>
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

export default Password;

            {/*<main id="cor-de-fundo">
                <div id="conte1" className="container">
                    <div className="row justify-content-center pt-4">
                        <form onSubmit={upDate}>
                            <label id="container-titulo">ALTERAR SENHA</label>
                            <div className="row justify-content-center">
                                <input onChange={controleUpdate} id="InpL" type="email" className="mt-5" name="email" placeholder="E-MAIL"></input>
                                <input onChange={controleUpdate} id="InpL" type="password" className="mt-5" name="senha" placeholder="NOVA SENHA"></input>        
                            </div>
                            <div className="row justify-content-center mt-2">
                                <button className="btn" nome="alterar" id="btnC">ALTERAR</button>
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
               
            </main>*/}
import React, {useState} from 'react';
import API from '../../axios/Api';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import abelha from '../../assets/images/abelhass.png';

import '../../components/css/global.css';
import '../../components/css/container.css';
import '../../components/css/button.css';

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
        <main id="cor-de-fundo">
            <Nav />
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
            <Footer />
        </main>   
    )
}

export default Password;
import { Outlet, Link } from "react-router-dom"
import Perfil from '../../img/tartaruga.svg'
import {  BiCube } from 'react-icons/bi';

const WelcomePage = () =>{
    return(
        <div className="div">
            <div className="alcen dfc">
                <span className="imagem" />
                <span className="perfil">
                    <img src={Perfil} />
                </span>
            </div>
            <div className="login-body">

                <div className="text">
            <h1 className="title-logo "><span className="logo">lapso<span>o</span></span> </h1>



                    
                    
                    <h2 className="title">
                        O sistema de gerenciamento de leads
                    </h2>
                    <h3 className="subtitle">
                        que monitora a atividade do seu site e automatiza o seu atendimento
                         
                    </h3>
                </div>
                <nav className="btns">
                    {/* <img className="imagem" src={Fundo} /> */}
                    <Link to='/login' className="btn" > <span >Fazer login</span> </Link>
                    <Link to='/login/cadastrar' className="btn inverte">Criar conta opsus</Link>
                </nav>
            </div>

            <Outlet />

        </div>
    )
}

export default WelcomePage
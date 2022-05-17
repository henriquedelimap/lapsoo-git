import { Link, Outlet } from "react-router-dom"
import Perfil from '../../img/tartaruga.svg'

export default function LoginPage(){
    return(
        <div>
            <form className="formulario">
                <div className="text">
                    <h1 className="title-logo "><span className="logo">lapso<span>o</span></span> </h1>
                    <span className="title-login">
                            Acesse sua conta
                    </span>
                </div>
                <div className="formulario mrgn">
                    <label> 
                        <span>Usuário</span> 
                        <input type='name'/>
                    </label>
                    <label> 
                        <span>Senha</span> 
                        <input type="password"/>
                    </label>
                </div>


                <div className="btns">
                    <Link to='/home' className="btn inverte">Acessar</Link>
                    {/* <input type="submit" className="btn inverte" value='Acessar' /> */}
                    <Link to='cadastrar' className="btn">Cadastrar</Link>
                    <Link to='recuperar-senha' className="link">esqueci minha senha</Link>
               
                </div>

            </form>


        </div>

    )
}


import { Link, Outlet } from "react-router-dom"

export default function LoginPage(){
    return(
        <div>
            <form className="formulario">
                <div className="text">
                    <h2 className="title">
                            Acesse sua conta <span className="logo">lapso<span>o</span></span> 
                    </h2>
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


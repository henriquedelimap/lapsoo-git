export default function RecuperarSenhaPage(){
    return(
        <div>
            <form className="formulario">

                <div className="text">
                    <h2 className="title">
                            Recupere sua conta <span className="logo">lapso<span>o</span></span> 
                    </h2>
                    <h3 className="subtitle">
                            Informe o email vinculado a sua conta para recuperar a senha
                    </h3>
                </div>
                <div className="formulario mrgn">

                <label> <span>email</span> 
                    <input type='name'/>
                </label>
                </div>
                <input type="submit" className="btn" value="Recuperar senha" />
            </form>
        </div>
    )
}


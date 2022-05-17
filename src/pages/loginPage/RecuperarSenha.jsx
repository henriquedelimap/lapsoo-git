export default function RecuperarSenhaPage(){
    return(
        <div>
            <form className="formulario">

            <div className="text">
                    <h1 className="title-logo "><span className="logo">lapso<span>o</span></span> </h1>
                    <span className="title-login">
                        Recupere sua conta
                    </span>
                    <h3 className="subtitle-login">
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


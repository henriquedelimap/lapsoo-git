export default function CadastrarPage(){
    return(
        <div>



            <form className="formulario">
            <div className="text">
                <h2 className="title">
                        Crie sua nova conta <span className="logo">lapso<span>o</span></span>  
                </h2>
            </div>

                <div className="formulario mrgn">





                <label> <span>username</span> 
                    <input type='name'/>
                </label>
                <label> <span>nome</span>
                    <input type='name'/>
                </label>
                <label> <span>email</span>
                    <input type='name'/>
                </label>
                <label> <span>senha</span>
                    <input type="password"/>
                </label>
                </div>
                <input type="submit" className="btn" value="Cadastrar" />
            </form>
        </div>
    )
}
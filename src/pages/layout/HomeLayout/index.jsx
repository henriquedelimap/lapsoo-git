import { Link, Outlet } from "react-router-dom";
import './style.css'
import { MdSettings, MdAccountCircle, MdDashboard } from 'react-icons/md'

import { ScriptMenuLateral } from "../../homePage/menuLateral";
import React from "react";

class  HomePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {button: ''}
    }    

    render(){

        return(
            <div className="container">
                <section className="menu">
                    <h1 className="title "><span className="logo">lapso<span>o</span></span> </h1>
                </section>

                <section className="menu-lateral dfc" >  
                    <div className="dfc menuL-list">
                        {
                            ScriptMenuLateral.map(script=>{
                                return(
                                    
                                    <Link className='Link  ' to={script.route}  >
                                        <span className="MdIcon">{script.icon}</span> 
                                        <span>{script.text}</span> 
                                    </Link> 
                                )
                            })
                        }
                    </div>

                </section>
                
                <section className="body">
                    <Outlet />
                </section>

            </div>
)
}
}

export default HomePage
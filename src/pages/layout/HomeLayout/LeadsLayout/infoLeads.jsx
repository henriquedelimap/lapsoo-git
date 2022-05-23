import React from "react";
import { leads } from '../../../scripts/leads'
import { useParams, Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'


export function InfoChat(){
    let {id} = useParams()
    return(
        <div>
        {leads.map(lead=>{ 
            
            if(id == lead.id){
                return (


                
                <div className=' dfr chat-body'>
                        <Link to='../'>
                                <MdClose className='MdIconColor fs12rem' />
                        </Link>
                        <img  src={lead.img} />
                        <span> 
                            adicionado em: {lead.createdAt}
                        </span> 
                        <span>
                            modificado em: {lead.uploadedaAt}
                        </span>
                        <span>
                            cidade: {lead.cidade}
                        </span>
                        <span>
                            email: {lead.email}
                        </span>
                        <span>
                            telefone: {lead.telefone}
                        </span>
                        <span>
                            corretor: {lead.corretor}
                        </span>
                        <span>
                            indicador: {lead.indicador}
                        </span>
                        <span>
                            status: {lead.status}
                        </span>
                </div>
                )
            }
            })}

    </div>
    )
}
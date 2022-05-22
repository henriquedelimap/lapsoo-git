import { Link } from 'react-router-dom'
import Image from '../../../../img/perfil1.svg'
import {MdArrowUpward} from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { leads } from '../../../scripts/leads'

export function Chat(){
    let {id} = useParams()
    return(
        <div>
            {leads.map(lead=>{ 
            
            if(id == lead.id){
                return (
                    <div className="body-chat c0" key={lead.id}>
                        <div className='dfc alcen chat-header'>
                            {/* <span className='perfil-circle'>
                                <img src={Image} />
                            </span> */}
                            <Link to='../'>
                                <MdArrowUpward className='MdIconColor chat-arrow-upward' />
                            </Link>

                            <span className='leads-name-chat'>{lead.name}</span>


                            <div className=' dfc'>
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
                        </div>
                    </div>
                )
            }
            })}
        </div>
    )
}
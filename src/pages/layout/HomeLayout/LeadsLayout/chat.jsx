import { Link, Outlet } from 'react-router-dom'
import Image from '../../../../img/perfil1.svg'
import {MdArrowUpward, MdInfoOutline} from 'react-icons/md'
import { useParams } from 'react-router-dom'
import { leads } from '../../../scripts/leads'
import { InfoChat } from './infoLeads'

export function Chat(){
    let {id} = useParams()
    return(
        <div>
            {leads.map(lead=>{ 
            
            if(id == lead.id){
                return (
                    <div className="dfc" key={lead.id}>
                        <div className='dfc '>
                            {/* <span className='perfil-circle'>
                                <img src={Image} />
                            </span> */}
                            <div className='chat-header'>
                                <Link to='../'>
                                    <MdArrowUpward className='MdIconColor fs12rem' />
                                </Link>
                                <span className='leads-name-chat'>{lead.name}</span>

                                <Link to='info' >
                                    <MdInfoOutline className='MdIconColor infoIcon fs12rem' />
                                </Link>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                )
            }
            })}
        </div>
    )
}
import {MdManageAccounts, MdSend, MdScheduleSend, MdVisibility} from 'react-icons/md'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { leads } from '../../../scripts/leads'
import {HorizontalScrollContainer, HorizontalScrollItem } from 'react-simple-horizontal-scroller'
export function Leads(){
    let {chat} = useParams()
    return(
        <div>
            <div className="con-card">
                <HorizontalScrollContainer 
                    controlsConfig={{
                        position: 'AFTER_CHILD',
                    }} >
                {leads.map(lead=>{
                    return(         
                        <div key={lead.id}>
                                <HorizontalScrollItem id={lead.id} >

                                    <NavLink to={'chat/'+lead.id} className='tdn'  >
                                        <div className="card-box">

                                        <div className='perfil-container'>
                                            <span className='perfil-circle'>
                                                <img  src={lead.img}></img>
                                            </span>
                                            <span className='status-perfil'></span>
                                        </div>

                                        <div className='leads-info'>
                                            <span className='status c3' />
                                            <span className='leads-name'>                        
                                                {lead.name}
                                            </span>
                                        </div>
                                        </div>
                                    </NavLink>

                                </HorizontalScrollItem>
                        </div>
                    )
                })}
                </HorizontalScrollContainer>
            </div>

            <Outlet />
        </div>
    )
}
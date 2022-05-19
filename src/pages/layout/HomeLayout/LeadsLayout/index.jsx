import {MdManageAccounts, MdSend, MdScheduleSend} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { leads } from '../../../scripts/leads'
import {HorizontalScrollContainer, HorizontalScrollItem } from 'react-simple-horizontal-scroller'
export function Leads(){
    return(
        <div className="con-card">
            <HorizontalScrollContainer >
            {leads.map(lead=>{
                return(         
                    <div >
                            <HorizontalScrollItem id={lead.id} >

                                <Link to='../chat' className='tdn' >
                                    <div className="card-box">

                                    <div className='perfil-container'>
                                        <span className='perfil-circle'>
                                            <img  src={lead.img}></img>
                                        </span>
                                        <span className='status-perfil'></span>
                                    </div>

                                    <div className='dfrc'>
                                        <span className='status c3' />
                                        <span className='leads-name'>                        
                                            {lead.name}
                                        </span>
                                    </div>
                                    </div>
                                </Link>

                            </HorizontalScrollItem>
                    </div>
                )
            })}
            </HorizontalScrollContainer>
        </div>
    )
}
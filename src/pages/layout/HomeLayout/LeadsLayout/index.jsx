import {MdManageAccounts, MdSend, MdScheduleSend} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { leads } from '../../../scripts/leads'

export function Leads(){
    return(
        <div className="con-card">
            {leads.map(lead=>{
                return(         
                    <div className="card-box b1 dfc alcen">
                        <div className='dfrc-between mgntop'>
                            <span className='status c3' />
                            <span className='leads-name'>{lead.name}</span>
                            <span className=" cpointer">
                                <Link to='../chat' >
                                    <MdSend className='MdIconColor' />
                                </Link>
                            </span> 
                        </div>
                        <span className='perfil-circle'>
                            <img  src={lead.img}></img>
                        </span>
                        <span className="MdIcon configPerfil cpointer"><MdManageAccounts /></span> 

                        <div className='dfc leads-info'>
                            <div className='dfc'>
                                <span>data da adição</span>
                                <span className='leads-info-output'>00/00/2022</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
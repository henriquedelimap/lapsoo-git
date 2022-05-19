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
            let leadId = lead.id
            if(id == leadId){
                return (
                    <div className="body-chat c0">
                        <div className='dfc alcen chat-header'>
                            {/* <span className='perfil-circle'>
                                <img src={Image} />
                            </span> */}
                            <Link to='../'>
                                <MdArrowUpward className='MdIconColor chat-arrow-upward' />
                            </Link>

                            <span className='leads-name-chat'>{lead.name}</span>
                        </div>
                    </div>
                )
            }
            })}
        </div>
    )
}
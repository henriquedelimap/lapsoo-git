import { Link } from 'react-router-dom'
import Image from '../../../../img/perfil1.svg'
import {MdArrowBack} from 'react-icons/md'
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
                        <div className='dfrc'>
                            {/* <span className='perfil-circle'>
                                <img src={Image} />
                            </span> */}
                            <Link to='../'>
                                <MdArrowBack className='MdIconColor' />
                            </Link>

                            <span className='leads-name'>{lead.name}</span>
                        </div>
                    </div>
                )
            }
            })}
        </div>
    )
}
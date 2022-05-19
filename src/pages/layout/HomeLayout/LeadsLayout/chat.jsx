import { Link } from 'react-router-dom'
import Image from '../../../../img/perfil1.svg'
import {MdArrowBack} from 'react-icons/md'
import { useParams } from 'react-router-dom'

export function Chat(){
    let {username} = useParams()
    return (
    <div className="body-chat c0">
        <div className='dfrc'>
            {/* <span className='perfil-circle'>
                <img src={Image} />
            </span> */}
            <Link to='../leads'>
                <MdArrowBack className='MdIconColor' />
            </Link>
            <span className='leads-name'>{username}</span>
        </div>
    </div>
    )
}
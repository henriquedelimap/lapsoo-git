import { Link } from 'react-router-dom'
import Image from '../../../../img/perfil1.svg'
import {MdArrowBack} from 'react-icons/md'


export function Chat(){
    return (
    <div className="body-chat c0">
        <div className='dfrc'>
            {/* <span className='perfil-circle'>
                <img src={Image} />
            </span> */}
            <Link to='../leads'>
                <MdArrowBack />
            </Link>
            <span className='title'>henrique</span>
        </div>
    </div>
    )
}
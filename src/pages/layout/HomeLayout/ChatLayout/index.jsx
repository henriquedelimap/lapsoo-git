import Image from '../../../../img/perfil1.svg'
import {MdManageAccounts, MdSend, MdScheduleSend} from 'react-icons/md'

export function Chat(){
    return(
        <div>
            <div className="con-card">
                <div className="card-box b1 dfc alcen">
                    <div className='dfrc '>
                        <span className='status c3' />
                        <span className='title'>henrique</span>
                        <span className="MdIcon cpointer"><MdSend /></span> 
                    </div>
                    <span className='perfil-circle'>
                        <img  src={Image}></img>
                    </span>
                    <span className="MdIcon configPerfil cpointer"><MdManageAccounts /></span> 
                    <div>

                    </div>
                </div>
                





                
            </div>
        </div>
    )
}
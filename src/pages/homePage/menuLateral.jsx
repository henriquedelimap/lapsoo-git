import { MdSettings, MdAccountCircle, MdDashboard } from 'react-icons/md'
import { BsChatRight } from 'react-icons/bs'

export const ScriptMenuLateral = [
    {
        status: 1,
        key: 1,
        route: 'inicio',
        icon: <MdAccountCircle  />,
        text: 'início'
    },
    {
        status: 0,
        key: 2,
        route: 'dashboard',
        icon: <MdDashboard />,
        text: 'dashboard'
    },
    {
        status: 0,
        key: 3,
        route: 'chatbot',
        icon: <BsChatRight />,
        text: 'chat Bot'
    },
    {
        status: 0,
        key: 3,
        route: 'configuracao',
        icon: <MdSettings />,
        text: 'configuração'
    },
    
] 
import { MdSettings, MdAccountCircle, MdDashboard, MdContacts } from 'react-icons/md'

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
        route: 'leads',
        icon: <MdContacts />,
        text: 'leads'
    },
    {
        status: 0,
        key: 3,
        route: 'configuracao',
        icon: <MdSettings />,
        text: 'configuração'
    },
    
    
] 
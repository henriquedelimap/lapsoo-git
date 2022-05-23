import { MdOutlineSettings, MdAttachMoney, MdOutlineDashboardCustomize, MdOutlineContacts } from 'react-icons/md'

export const ScriptMenuLateral = [

    {
        status: 0,
        id: 1,
        route: 'dashboard',
        icon: <MdOutlineDashboardCustomize />,
        text: 'dashboard'
    },
    {
        status: 2,
        id: 2,
        route: 'inicio',
        icon: <MdAttachMoney  />,
        text: 'cotação'
    },
    {
        status: 0,
        id: 3,
        route: 'leads',
        icon: <MdOutlineContacts />,
        text: 'leads'
    },
    {
        status: 0,
        id: 4,
        route: 'configuracao',
        icon: <MdOutlineSettings />,
        text: 'configuração'
    },
    
    
] 
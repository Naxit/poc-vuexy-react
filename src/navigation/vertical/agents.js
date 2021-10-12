import { Circle, Users } from 'react-feather'

export default [
  {
    header: 'Ressources'
  },
  {
    id: 'agents',
    title: 'Agents',
    icon: <Users size={20} />,
    children: [
      {
		    id: 'list',
		    title: 'Liste des agents',
        icon: <Circle size={12} />,
		    navLink: '/agents/list'
      },
      {
		    id: 'sheet',
		    title: 'Fiche agent',
        icon: <Circle size={12} />,
		    navLink: '/agents/sheet'
      }
    ]
  }
]

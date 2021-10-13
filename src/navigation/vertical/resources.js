import { Circle, Users } from 'react-feather'

export default [
  {
    header: 'Ressources'
  },
  {
    id: 'resources',
    title: 'Agents',
    icon: <Users size={20} />,
    children: [
      {
		    id: 'list',
		    title: 'Liste des agents',
        icon: <Circle size={12} />,
		    navLink: '/resources/list'
      },
      {
		    id: 'sheet',
		    title: 'Fiche agent',
        icon: <Circle size={12} />,
		    navLink: '/resources/sheet'
      }
    ]
  }
]

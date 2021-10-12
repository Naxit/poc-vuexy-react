import { Circle, MapPin } from 'react-feather'

export default [
  {
    header: 'Planification'
  },
  {
    id: 'sites',
    title: 'Sites',
    icon: <MapPin size={20} />,
    children: [
      {
		    id: 'list',
		    title: 'Liste des sites',
        icon: <Circle size={12} />,
		    navLink: '/sites/list'
      },
      {
		    id: 'planning',
		    title: 'Planning',
        icon: <Circle size={12} />,
		    navLink: '/sites/planning'
      }
    ]
  }
]

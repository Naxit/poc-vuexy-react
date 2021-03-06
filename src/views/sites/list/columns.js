// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
// import { getUser, deleteUser } from './../../user/store/action/index.js'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, CustomInput } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
  }
}

// ** Renders Role Columns
const renderRole = row => {
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit2
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
      {row.role}
    </span>
  )
}

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

export const columns = [

  {
    name: 'Date',
    minWidth: '320px',
    selector: 'date',
    sortable: true,
    cell: row => row.date
  },
  {
    name: 'Horaire',
    minWidth: '172px',
    selector: 'horaire',
    sortable: true,
    cell: row => renderRole(row)
  },
  {
    name: 'Agent',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='font-weight-bold'>{row.fullName}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>@{row.username}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Profil',
    minWidth: '138px',
    selector: 'currentPlan',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.currentPlan}</span>
  },
  {
    name: 'Activit??',
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'PDS',
    minWidth: '100px',
    cell: row => (
		<CustomInput
    	  className='custom-control-success'
    	  type='switch'
    	  id='success'
    	  name='success'
    	  inline
		  checked={false}
		  onChange={(e)=>console.log(e.target.value)}
    	/>
    )
},
{
  name: 'FDS',
  minWidth: '100px',
  cell: row => (
	  <CustomInput
  	  className='custom-control-success'
  	  type='switch'
  	  id='success'
  	  name='success'
  	  inline
  	  checked={false}
	  onChange={(e)=>console.log(e.target.value)}
  	/>
  )
}
]

// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
// import { getUser, deleteUser } from './../../user/store/action/index.js'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'


const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}

export const columnTableSites = [
  {
    name: 'Site',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
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
    name: 'Code',
    minWidth: '138px',
    selector: 'currentPlan',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.currentPlan}</span>
  }

]

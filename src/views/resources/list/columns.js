// ** React Imports
import { Fragment } from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteInvoice } from '../store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-50' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='mr-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: '#',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
  },
  {
    name: <TrendingUp size={14} />,
    minWidth: '102px',
    selector: 'avatar',
    sortable: true,
    cell: row => {
      const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
        Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
      return (
        <Fragment>
          <Avatar color={color} icon={<Icon size={14} />} id={`av-tooltip-${row.id}`} />
          <UncontrolledTooltip placement='top' target={`av-tooltip-${row.id}`}>
            <span className='font-weight-bold'>{row.invoiceStatus}</span>
            <br />
            <span className='font-weight-bold'>Balance:</span> {row.balance}
            <br />
            <span className='font-weight-bold'>Due Date:</span> {row.dueDate}
          </UncontrolledTooltip>
        </Fragment>
      )
    }
  },
  {
    name: 'NOM PRENOM / MATRICULE',
    minWidth: '350px',
    selector: 'fullName',
    sortable: true,
    cell: row => {

      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{row.fullName}</h6>
            <small className='text-truncate text-muted mb-0'>{row.email}</small>
          </div>
        </div>
      )
    }
  },
  {
    name: 'Payable hours',
    selector: 'hours_worked_payable',
    sortable: true,
    minWidth: '200px',
    cell: row => row.hours_worked_payable
  },
  {
    name: 'Unavailability +',
    selector: 'hours_busy_payable',
    sortable: true,
    minWidth: '164px',
    cell: row => {
      return row.balance !== 0 ? (
        <span>{row.hours_busy_payable}</span>
      ) : (
        <Badge color='light-success' pill>
          Paid
        </Badge>
      )
  }
},
  {
	name: 'Unavailability -',
	selector: 'hours_busy_deducted',
	sortable: true,
	minWidth: '164px',
	cell: row => {
	  return row.balance !== 0 ? (
		<span>{row.hours_busy_deducted}</span>
	  ) : (
		<Badge color='light-success' pill>
		  Paid
		</Badge>
	  )
	}
},
{
  name: 'Delta contract',
  selector: 'delta_contract',
  sortable: true,
  minWidth: '164px',
  cell: row => {
	return row.balance !== 0 ? (
	  <span>{row.delta_contract}</span>
	) : (
	  <Badge color='light-success' pill>
		Paid
	  </Badge>
	)
  }
}
]

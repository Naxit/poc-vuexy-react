// ** React Imports
import { Fragment, useState, useEffect } from 'react'


// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getAllData, getData } from './../store/action/index.js'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ toggleSidebar, handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: '5rem',
                padding: '0 0.8rem',
                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
            <Label for='rows-per-page'>Entries</Label>
          </div>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
          <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
            <Label className='mb-0' for='search-invoice'>
              Search:
            </Label>
            <Input
              id='search-invoice'
              className='ml-50 w-100'
              type='text'
              value={searchTerm}
              onChange={e => handleFilter(e.target.value)}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

const TableVacations = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.users)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState({ value: '', label: 'Select Role' })
  const [currentPlan, setCurrentPlan] = useState({ value: '', label: 'Select Plan' })
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** Get data on mount
  useEffect(() => {
    // dispatch(getAllData())
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
  }, [dispatch, store.data.length])

  // ** User filter options
  const roleOptions = [
    { value: '', label: 'Select Role' },
    { value: 'admin', label: 'Admin' },
    { value: 'author', label: 'Author' },
    { value: 'editor', label: 'Editor' },
    { value: 'maintainer', label: 'Maintainer' },
    { value: 'subscriber', label: 'Subscriber' }
  ]

  const planOptions = [
    { value: '', label: 'Select Plan' },
    { value: 'basic', label: 'Basic' },
    { value: 'company', label: 'Company' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'team', label: 'Team' }
  ]

  const statusOptions = [
    { value: '', label: 'Select Status', number: 0 },
    { value: 'pending', label: 'Pending', number: 1 },
    { value: 'active', label: 'Active', number: 2 },
    { value: 'inactive', label: 'Inactive', number: 3 }
  ]

  // ** Function in get data on page change
  const handlePagination = page => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    dispatch(
      getData({
        page: currentPage,
        perPage: value,
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        role: currentRole.value,
        currentPlan: currentPlan.value,
        status: currentStatus.value,
        q: val
      })
    )
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Number(Math.ceil(store.total / rowsPerPage))

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      role: currentRole.value,
      currentPlan: currentPlan.value,
      status: currentStatus.value,
      q: searchTerm
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

   const [active, setActive] = useState('1')
   const toggle = tab => {
	 setActive(tab)
   }

  return (
    <Fragment>
		  <Nav pills fill>
			<NavItem>
			  <NavLink
				active={active === '1'}
				onClick={() => {
				  toggle('1')
				}}
			  >
				Vacations
			  </NavLink>
			</NavItem>
			<NavItem>
			  <NavLink
				active={active === '2'}
				onClick={() => {
				  toggle('2')
				}}
			  >
				Document
			  </NavLink>
			</NavItem>
			<NavItem>
			  <NavLink
				active={active === '3'}
				onClick={() => {
				  toggle('3')
				}}
			  >
				Plan du site & Acc??s
			  </NavLink>
			</NavItem>
		  </Nav>
		  <TabContent className='py-50' activeTab={active}>
			<TabPane tabId='1'>
			<Card>
				<DataTable
   	           noHeader
   	           pagination
   	           subHeader
   	           responsive
   	           paginationServer
   	           columns={columns}
   	           sortIcon={<ChevronDown />}
   	           className='react-dataTable'
   	           paginationComponent={CustomPagination}
   	           data={dataToRender()}
   	           subHeaderComponent={
   	             <CustomHeader
   	               toggleSidebar={toggleSidebar}
   	               handlePerPage={handlePerPage}
   	               rowsPerPage={rowsPerPage}
   	               searchTerm={searchTerm}
   	               handleFilter={handleFilter}
   	             />
   	           }
   	         />
			 </Card>
			</TabPane>
			<TabPane tabId='2'>
			<Card>
			  <p>
				Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy
				cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing
				cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate
				sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.
			  </p>
			 </Card>
			</TabPane>
			<TabPane tabId='3'>
			<Card>
			  <p>
				Carrot cake drag??e chocolate. Lemon drops ice cream wafer gummies drag??e. Chocolate bar liquorice cheesecake
				cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll
				cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee
				toffee jelly beans bonbon sesame snaps sugar plum candy canes.
			  </p>
			</Card>
			</TabPane>
		  </TabContent>

      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default TableVacations

// ** React Imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Search } from 'react-feather'
import {
	Button,
	Label,
	Input,
	CustomInput,
	Row,
	Col,
	Card,
	CardBody,
	InputGroup,
	InputGroupAddon,
	InputGroupText

} from 'reactstrap'

// ** Store & Actions
import { getData } from './../store/actions/index.js'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue, handlePerPage, rowsPerPage }) => {
	return (
		<div className='invoice-list-table-header w-100 py-2'>
			<Row>
				<Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
					<div className='d-flex align-items-center mr-2'>
						<Label for='rows-per-page'>Show</Label>
						<CustomInput
							className='form-control ml-50 pr-3'
							type='select'
							id='rows-per-page'
							value={rowsPerPage}
							onChange={handlePerPage}
						>
							<option value='10'>10</option>
							<option value='25'>25</option>
							<option value='50'>50</option>
						</CustomInput>
					</div>
					<Button.Ripple tag={Link} to='/apps/invoice/add' color='primary'>
						Add Record
					</Button.Ripple>
				</Col>
				<Col
					lg='6'
					className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pr-lg-1 p-0'
				>
					<Input className='w-auto ' type='select' value={statusValue} onChange={handleStatusValue}>
						<option value=''>Select Status</option>
						<option value='downloaded'>Downloaded</option>
						<option value='draft'>Draft</option>
						<option value='paid'>Paid</option>
						<option value='partial payment'>Partial Payment</option>
						<option value='past due'>Past Due</option>
						<option value='partial payment'>Partial Payment</option>
					</Input>
				</Col>
			</Row>
		</div>
	)
}

const ListResources = () => {
	const dispatch = useDispatch()
	const store = useSelector(state => state.invoice)

	const [value, setValue] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [statusValue, setStatusValue] = useState('')
	const [rowsPerPage, setRowsPerPage] = useState(10)

	useEffect(() => {
		dispatch(
			getData({
				page: currentPage,
				perPage: rowsPerPage,
				status: statusValue,
				q: value
			})
		)
	}, [dispatch, store.data.length])

	const handleFilter = val => {
		setValue(val)
		dispatch(
			getData({
				page: currentPage,
				perPage: rowsPerPage,
				status: statusValue,
				q: val
			})
		)
	}

	const handlePerPage = e => {
		dispatch(
			getData({
				page: currentPage,
				perPage: parseInt(e.target.value),
				status: statusValue,
				q: value
			})
		)
		setRowsPerPage(parseInt(e.target.value))
	}

	const handleStatusValue = e => {
		setStatusValue(e.target.value)
		dispatch(
			getData({
				page: currentPage,
				perPage: rowsPerPage,
				status: e.target.value,
				q: value
			})
		)
	}

	const handlePagination = page => {
		dispatch(
			getData({
				page: page.selected + 1,
				perPage: rowsPerPage,
				status: statusValue,
				q: value
			})
		)
		setCurrentPage(page.selected + 1)
	}

	const CustomPagination = () => {
		const count = Number((store.total / rowsPerPage).toFixed(0))

		return (
			<ReactPaginate
				pageCount={count || 1}
				nextLabel=''
				breakLabel='...'
				previousLabel=''
				activeClassName='active'
				breakClassName='page-item'
				breakLinkClassName='page-link'
				forcePage={currentPage !== 0 ? currentPage - 1 : 0}
				onPageChange={page => handlePagination(page)}
				pageClassName={'page-item'}
				nextLinkClassName={'page-link'}
				nextClassName={'page-item next'}
				previousClassName={'page-item prev'}
				previousLinkClassName={'page-link'}
				pageLinkClassName={'page-link'}
				containerClassName={'pagination react-paginate justify-content-end p-1'}
			/>
		)
	}

	const dataToRender = () => {
		const filters = {
			status: statusValue,
			q: value
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

	return (
		<div className='invoice-list-wrapper'>
		<Row>
			<Col>
				<Card>
					<div className='invoice-list-dataTable'>
						<DataTable
							noHeader
							pagination
							paginationServer
							subHeader={true}
							columns={columns}
							responsive={true}
							sortIcon={<ChevronDown />}
							className='react-dataTable'
							defaultSortField='invoiceId'
							paginationDefaultPage={currentPage}
							paginationComponent={CustomPagination}
							data={dataToRender()}
							subHeaderComponent={
								<CustomHeader
									value={value}
									statusValue={statusValue}
									rowsPerPage={rowsPerPage}
									handleFilter={handleFilter}
									handlePerPage={handlePerPage}
									handleStatusValue={handleStatusValue}
									/>
							}
							/>
					</div>
				</Card>
			</Col>
			<Col>
			<Card>
				<CardBody>
					<Row>
						<Input
							id='search-invoice'
							className='ml-50 mr-2 w-100'
							type='text'
							value={value}
							onChange={e => handleFilter(e.target.value)}
							placeholder='Rechercher un agent'
							/>
					</Row>
					<Row>
						<Button.Ripple color='flat-primary'>Filtres</Button.Ripple>
					</Row>
					<Row>
						<Col className='mb-75'>
							<Input type='select' value={statusValue} onChange={handleStatusValue}>
								<option value=''>Filtre par Sociétés / Agences </option>
								<option value='downloaded'>Downloaded</option>
								<option value='draft'>Draft</option>
								<option value='paid'>Paid</option>
								<option value='partial payment'>Partial Payment</option>
								<option value='past due'>Past Due</option>
								<option value='partial payment'>Partial Payment</option>
							</Input>
						</Col>
					</Row>
					<Row>
						<Col className='mb-75'>
							<Input className='w-auto' type='select' value={statusValue} onChange={handleStatusValue}>
								<option value=''>Filtre par Sous-traitants </option>
								<option value='downloaded'>Downloaded</option>
								<option value='draft'>Draft</option>
								<option value='paid'>Paid</option>
								<option value='partial payment'>Partial Payment</option>
								<option value='past due'>Past Due</option>
								<option value='partial payment'>Partial Payment</option>
							</Input>
						</Col>
					</Row>
					<Row>
						<Col className='mb-75'>
							<Input className='w-auto' type='select' value={statusValue} onChange={handleStatusValue}>
								<option value=''>Filtre par Secteurs </option>
								<option value='downloaded'>Downloaded</option>
								<option value='draft'>Draft</option>
								<option value='paid'>Paid</option>
								<option value='partial payment'>Partial Payment</option>
								<option value='past due'>Past Due</option>
								<option value='partial payment'>Partial Payment</option>
							</Input>
						</Col>
					</Row>
					<Row>
						<Col className='mb-75'>
							<Input className='w-auto ' type='select' value={statusValue} onChange={handleStatusValue}>
								<option value=''>Filtre par Sites </option>
								<option value='downloaded'>Downloaded</option>
								<option value='draft'>Draft</option>
								<option value='paid'>Paid</option>
								<option value='partial payment'>Partial Payment</option>
								<option value='past due'>Past Due</option>
								<option value='partial payment'>Partial Payment</option>
							</Input>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button.Ripple color='flat-primary'> Types de ressources </Button.Ripple>
						</Col>
					</Row>
					<Row>
						<Col>
							<Row>
								<Col>
									<CustomInput
										type='switch'
										id='switch-primary-1'
										name='primary'
										inline
										defaultChecked
										/>
								</Col>
								<Col>
									<strong> Agent </strong>
								</Col>
							</Row>
							<Row>
								<p> Agents employés par la société de sécurité </p>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col>
							<Row>
								<Col>
									<CustomInput
										type='switch'
										id='switch-primary-2'
										name='primary'
										inline
										defaultChecked
										/>
								</Col>
								<Col>
									<strong> Sous-traitants </strong>
								</Col>
							</Row>
							<Row>
								<p> Agents employés par une société sous-traitante </p>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col>
							<Row>
								<Col>
									<CustomInput
										type='switch'
										id='switch-primary-3'
										name='primary'
										inline
										defaultChecked
										/>
								</Col>
								<Col>
									<strong> Candidats </strong>
								</Col>
							</Row>
							<Row>
								<p> Postulant au poste d'agent </p>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button.Ripple color='flat-primary'> Types de contrats </Button.Ripple>
						</Col>
					</Row>
					<Row>
						<Col>
							<CustomInput
								type='checkbox'
								id='checkbox-primary-1'
								name='primary'
								inline
								defaultChecked
								/>
							<strong> CDI </strong>
						</Col>
					</Row>
					<Row>
						<Col>
							<CustomInput
								type='checkbox'
								id='checkbox-primary-2'
								name='primary'
								inline
								defaultChecked
								/>
							<strong> CDD </strong>
						</Col>
					</Row>
				</CardBody>
				</Card>
			</Col>
		</Row>
		</div>
	)
}

export default ListResources

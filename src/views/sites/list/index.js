// ** User List Component
import TableVacations from './TableVacations.js'
import TableSites from './TableSites.js'
import { Card, Dropdown, CardTitle, CardHeader, Input, Row, Col } from 'reactstrap'
import PickerMonth from 'react-month-picker-input'
import 'react-month-picker-input/dist/react-month-picker-input.css'
import CardFilters from './CardFilters.js'
import CardMap from './CardMap.js'
import '@styles/react/libs/maps/map-leaflet.scss'

const ListSites = () => {
	return (
		<div className='app-user-list'>
			<Row className='mb-2'>
				<Col md='3'><h2>Liste des sites</h2></Col>
				<Col md='4'>| Affichage des sites actifs sur le mois:</Col>
				<Col md='3'>
					<PickerMonth
						year={2021}
						month={10}
						onChange={function(maskedValue, selectedYear, selectedMonth) {
						console.log(maskedValue, selectedYear, selectedMonth);
						}}
					/>
				</Col>
			</Row>
			<Row>
				<Col md='4'>
					<CardFilters/>
					<TableSites/>
				</Col>

				<Col md='8'>
					<CardMap/>
					<TableVacations/>
				</Col>
			</Row>
		</div>
	)
}

export default ListSites

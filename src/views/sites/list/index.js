// ** User List Component
import Table from './Table.js'
import { Card, Dropdown, CardTitle, CardHeader, Input, Row, Col } from 'reactstrap'
import PickerMonth from 'react-month-picker-input'
import CardFilters from './CardFilters.js'
import CardMap from './CardMap.js'

const ListSites = () => {
	return (
		<div className='app-user-list'>
			<Row>
				<Col md='2'><h2>Liste des sites</h2></Col>
			</Row>
			<Row>
				<Col md='3'>
					<CardFilters/>
					<Table/>
				</Col>

				<Col>
					<CardMap/>
					<Table/>

				</Col>
			</Row>
		</div>
	)
}

export default ListSites

// ** User List Component
import Table from './Table.js'
import { Card, Cols, Pills, Dropdown, CardTitle, CardHeader, Select, Input } from 'reactstrap'
import PickerMonth from 'react-month-picker-input'

const ListSites = () => {
	return (
      <div className='app-user-list'>
  	  <Card>  <Input
			id='search-invoice'
			className='ml-50 w-100'
			type='text'
			value={''}
			onChange={()=>{}}
		  /><Dropdown/>
		  <Dropdown/>
		  </Card>
  	  <Card>
  	  <CardHeader>
   	   <CardTitle tag='h2'>BTelecom - Ouest</CardTitle>
   	 </CardHeader>
  	 </Card>
  	  <Card><Table/></Card>
  	 <Card><Table/></Card>
      </div>
    )
}

export default ListSites

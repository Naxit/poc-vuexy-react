import { Card, Cols, Pills, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, CardTitle, Input } from 'reactstrap'

const CardFilters = () => {
	return (
		<Card>
			<Input
	   	 	  id='search-invoice'
	   	 	  className='ml-50 w-100'
	   	 	  type='text'
	   	 	  value={''}
	   	 	  onChange={()=>{}}/>
			 <Dropdown></Dropdown>
	   	 	<Dropdown>
			<DropdownToggle color='primary' caret>
	          Primary
	        </DropdownToggle>
				<DropdownMenu>
				<DropdownItem>Option 1</DropdownItem>
				</DropdownMenu>
			</Dropdown>
   	 	</Card>
    )
}

export default CardFilters

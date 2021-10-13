import { Card, Col, Row, Input } from 'reactstrap'
import React, { useState } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


const CardFilters = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const toggle = () => setDropdownOpen(prevState => !prevState)
	return (
		<Card>
			<Col md='10' className='ml-2 mr-2'>
				<Input className='mt-2 mb-2' type='search' placeholder='Rechercher un site...' onChange={(data)=>{console.log(data.target.value)}}/>
				<Select className='mt-2 mb-2' placeholder='Filtre par Sociétés / Agences' options={options}/>
				<Select className='mt-2 mb-2' placeholder='Filtre par Secteurs' options={options}/>
			</Col>
		</Card>
    )
}

export default CardFilters

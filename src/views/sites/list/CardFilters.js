import { Card, Col, Row, Pills, CardTitle, Input } from 'reactstrap'
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
			<Col md='10'>
				<Input type='search' onChange={(data)=>{console.log(data.target.value)}}/>
				<Select placeholder='Filtre par Sociétés / Agences' options={options}/>
				<Select placeholder='Filtre par Secteurs' options={options}/>
			</Col>
		</Card>
    )
}

export default CardFilters

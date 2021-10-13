import { Fragment, useState } from 'react'
import classnames from 'classnames'
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'


import Informations from './informations/Informations'

const PillsDetails = ({ selectedUser }) => {
  const [active, setActive] = useState('1')

  const toggle = tab => {
	setActive(tab)
  }

  return (
	<Fragment>
	  <Nav pills>
		<NavItem>
		  <NavLink
			active={active === '1'}
			onClick={() => {
			  toggle('1')
			}}
		  >
			Informations
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '2'}
			onClick={() => {
			  toggle('2')
			}}
		  >
			Correspondances
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '3'}
			onClick={() => {
			  toggle('3')
			}}
		  >
			Documents
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '4'}
			onClick={() => {
			  toggle('4')
			}}
		  >
			Emplois
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '5'}
			onClick={() => {
			  toggle('5')
			}}
		  >
			Diplômes
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '6'}
			onClick={() => {
			  toggle('6')
			}}
		  >
			Habilitations
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '7'}
			onClick={() => {
			  toggle('7')
			}}
		  >
			Équipements
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '8'}
			onClick={() => {
			  toggle('8')
			}}
		  >
			Formalités
		  </NavLink>
		</NavItem>


		<NavItem>
		  <NavLink
			active={active === '9'}
			onClick={() => {
			  toggle('9')
			}}
		  >
			Langues
		  </NavLink>
		</NavItem>
	  </Nav>








	  <TabContent className='py-50' activeTab={active}>
		<TabPane tabId='1'>
			<Informations selectedUser={selectedUser}/>
		</TabPane>


		<TabPane tabId='2'>
		  <p>
			Correspondances
		  </p>
		</TabPane>


		<TabPane tabId='3'>
		  <p>
			Documents
		  </p>
		</TabPane>


		<TabPane tabId='4'>
		  <p>
			Emplois
		  </p>
		</TabPane>


		<TabPane tabId='5'>
		  <p>
			Diplômes
		  </p>
		</TabPane>


		<TabPane tabId='6'>
		  <p>
			Habilitations
		  </p>
		</TabPane>


		<TabPane tabId='7'>
		  <p>
			Équipements
		  </p>
		</TabPane>


		<TabPane tabId='8'>
		  <p>
			Formalités
		  </p>
		</TabPane>


		<TabPane tabId='9'>
		  <p>
			Langues
		  </p>
		</TabPane>
	  </TabContent>
	</Fragment>
  )
}
export default PillsDetails

import { Nav, NavItem, NavLink } from 'reactstrap'

const PillsDetails = () => {
  return (
	  <Nav pills className='nav-pill-primary my-2'>
	    <NavItem>
	      <NavLink active>Informations</NavLink>
	    </NavItem>
	    <NavItem>
	      <NavLink>Correspondances</NavLink>
	    </NavItem>
	    <NavItem>
	      <NavLink disabled>Documents</NavLink>
	    </NavItem>
	    <NavItem>
	      <NavLink>Emplois</NavLink>
	    </NavItem>
	  </Nav>
  )
}
export default PillsDetails

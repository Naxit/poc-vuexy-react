import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'

import CardContracts from './CardContracts'
import CardCounters from './CardCounters'

const Informations = ({selectedUser}) => {
  return (
	  <Fragment>
			<CardContracts selectedUser={selectedUser}/>
  			<CardCounters selectedUser={selectedUser}/>
  	  </Fragment>
  )
}
export default Informations

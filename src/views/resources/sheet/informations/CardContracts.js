import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import img1 from '@src/assets/images/slider/04.jpg'
import img2 from '@src/assets/images/slider/03.jpg'
import img3 from '@src/assets/images/slider/06.jpg'

const CardContracts = ({selectedUser}) => {
  return (
    <Row className='match-height'>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Contrats de travail</CardTitle>


            <CardText>
              Type
            </CardText>
	        <CardText>
	          Contrat CDD
	        </CardText>
	        <CardText>
	          Dates
	        </CardText>
	        <CardText>
	          Qualifications
	        </CardText>
	        <CardText>
	          Coefficient
	        </CardText>
	        <CardText>
	          Niveau
	        </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default CardContracts

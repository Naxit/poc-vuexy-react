import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import img1 from '@src/assets/images/slider/04.jpg'
import img2 from '@src/assets/images/slider/03.jpg'
import img3 from '@src/assets/images/slider/06.jpg'

const CardCounters = ({selectedUser}) => {
  return (
    <Row className='match-height'>
      <Col lg='4' md='6'>
        <Card>
          <CardBody>
            <CardTitle tag='h4'>Compteur du mois</CardTitle>


			<div>
              <CardText className='mb-50'>Last Month</CardText>
              <h3 className='font-weight-bolder'>
                <sup className='font-medium-1 font-weight-bold mr-25'>$</sup>
                <span>73,683</span>
              </h3>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default CardCounters

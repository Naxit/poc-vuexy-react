// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'

const AgentAbout = ({ selectedUser }) => {
  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return <img src={selectedUser.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={selectedUser.fullName}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '100px',
            width: '100px'
          }}
        />
      )
    }
  }

  return (
    <Card>
      <CardBody>
        <Row>
          <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start'>
                {renderUserImg()}
                <div className='d-flex flex-column ml-1 my-50'>
                  <div className='user-info mb-1'>
                    <h4 className='mb-0'>{selectedUser !== null ? selectedUser.fullName : 'Eleanor Aguilar'}</h4>
                    <CardText tag='span'>
                      {selectedUser !== null ? selectedUser.email : 'eleanor.aguilar@gmail.com'}
                    </CardText>
                  </div>


				    <div className='d-flex flex-wrap align-items-center'>
					  	<div className='user-info-title'>
					  	  <CardText tag='span' className='user-info-title font-weight-bold mr-1'>
					  		Soci??t??
					  	  </CardText>
					  	</div>
					  	<CardText className='mb-0'>
					  	  GLOBAL SKILLS
					  	</CardText>
				    </div>
					<div className='d-flex flex-wrap align-items-center'>
						<div className='user-info-title'>
						  <CardText tag='span' className='user-info-title font-weight-bold mr-1'>
							Secteur
						  </CardText>
						</div>
						<CardText className='mb-0'>
						  TSTSECTEUR
						</CardText>
					</div>
                </div>
              </div>
            </div>


			<div className='d-flex justify-content-start'>
				<h5>Compteurs sur le mois > </h5>
			</div>
          </Col>



          <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
            <div className='user-info-wrapper'>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <User className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Matricule
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedUser !== null ? selectedUser.username : 'eleanor.aguilar'}
                </CardText>
              </div>


              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Check className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    T??l. / Mobile
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.status : 'Active'}
                </CardText>
              </div>


              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Star className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Email
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.email : 'eleanor.aguilar@gmail.com'}
                </CardText>
              </div>


              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Flag className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    N?? S??curit?? Sociale
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.country : 'England'}</CardText>
              </div>


              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Phone className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Nationalit??
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.contact : '(123) 456-7890'}</CardText>
              </div>


              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <Phone className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Carte professionnelle
                  </CardText>
                </div>
                <CardText className='mb-0'>{selectedUser !== null ? selectedUser.contact : '(123) 456-7890'}</CardText>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default AgentAbout

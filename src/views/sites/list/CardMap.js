import { Card, CardHeader, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Archive, PhoneForwarded, Mail } from 'react-feather'
import L from 'leaflet'
import { Fragment, useState, useEffect } from 'react'


const Icon1 = new L.Icon({
  iconUrl: require('@src/assets/images/svg/map-marker.png').default,
  iconRetinaUrl: require('@src/assets/images/svg/map-marker.png').default,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
})

const lat = 51.505
const lng = -0.09
const zoom = 15
const position = [lat, lng]
const position2 = [51.501, -0.09]

const CardMap = () => {

	return (
		<Card className='h-30'>
			<CardHeader>
				<CardTitle tag='h2'>{'Un nom de site interactif'}</CardTitle>
			</CardHeader>
			<CardBody>
				<Row>
				<Col  md='5'>
				<div style ={{width : '100%', height: '100%'}}>
					<MapContainer center={position} zoom={zoom} className='leaflet-map'>
						<TileLayer
						attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={position} icon={Icon1}>
						<Popup>This is a popup</Popup>
						</Marker>
					</MapContainer>
					</div>
				  </Col>
				  <Col md="5">
					  <div className='user-info-title'>
					    <Archive className='mr-1' size={14} />
					    <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
					      Société
					    </CardText>
					  <CardText className='text-capitalize mb-0'>
					  </CardText>
					</div>
					<div className='user-info-title'>
					  <PhoneForwarded className='mr-1' size={14} />
					  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
						Secteur site
					  </CardText>
					<CardText className='text-capitalize mb-0'>
					</CardText>
					</div>
					<div className='user-info-title mt-2'>
					<Archive className='mr-1' size={14} />
					<CardText tag='span' className='user-info-title font-weight-bold mb-0'>
					  Responsable Client
					</CardText>
					<CardText className='text-capitalize mb-0'>
					</CardText>
					</div>
					<div className='user-info-title'>
					<Mail className='mr-1' size={14} />
					<CardText tag='span' className='user-info-title font-weight-bold mb-0'>
					E-mail
					</CardText>
					<CardText className='text-capitalize mb-0'>
					</CardText>
					</div>
					<div className='user-info-title'>
					<Archive className='mr-1' size={14} />
					<CardText tag='span' className='user-info-title font-weight-bold mb-0'>
					Tél/ Mobile
					</CardText>
					<CardText className='text-capitalize mb-0'>
					</CardText>
					</div>
					<div className='user-info-title mt-2'>
					<Archive className='mr-1' size={14} />
					<CardText tag='span' className='user-info-title font-weight-bold mb-0'>
					Responsable d'exploitation
					</CardText>
					<CardText className='text-capitalize mb-0'>
					</CardText>
					</div>
					<div className='user-info-title'>
					<Mail className='mr-1' size={14} />
					<CardText tag='span' className='user-info-title font-weight-bold mb-0'>
					E-mail
					</CardText>
					<CardText className='text-capitalize mb-0'>
					</CardText>
					</div>
					<div className='user-info-title'>
					<Archive className='mr-1' size={14} />
					<CardText tag='span' className='user-info-title font-weight-bold mb-0'>
					Tél/ Mobile
					</CardText>
					<CardText className='text-capitalize mb-0'>
					</CardText>
					</div>
				  </Col>

				</Row>
			</CardBody>
		</Card>
    )
}

export default CardMap

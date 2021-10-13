import { Card, CardHeader, CardTitle, CardBody, Row, Col } from 'reactstrap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const CardMap = () => {

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

	return (
		<Card>
			<CardHeader>
				<CardTitle tag='h2'>BTelecom - Ouest</CardTitle>
			</CardHeader>
			<CardBody>
				<Row>
				<Col md='5'>
					<MapContainer center={position} zoom={zoom} className='leaflet-map'>
						<TileLayer
						attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
						/>
						<Marker position={position} icon={Icon1}>
						<Popup>This is a popup</Popup>
						</Marker>
					</MapContainer>
				  </Col>
				  <Col md="3">
				  <p>Societe</p>
				  <p>Secteur site</p>
				  <p>responsable client</p>
				 <p>email</p>
				 <p>Tél/ Mobile</p>
				 <p>Responsable d'exploitation</p>
				 <p>E-mail</p>
				 <p>Tél/ Mobile</p>
				  </Col>

				</Row>
			</CardBody>
		</Card>
    )
}

export default CardMap

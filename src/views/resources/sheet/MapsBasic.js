import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import '@styles/react/libs/maps/map-leaflet.scss'

const MapsBasic = () => {
  const center = [48.690606, 2.201903],
    zoom = 16

  return (
    <Card className='overflow-hidden'>
      <CardHeader>
        <CardTitle tag='h4'>Adresse principale</CardTitle>
      </CardHeader>
      <CardBody>
        <MapContainer style={{ height: '250px' }} center={center} zoom={zoom} className='leaflet-map'>
          <TileLayer
            attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <Marker position={center} />
        </MapContainer>
      </CardBody>
    </Card>
  )
}
export default MapsBasic

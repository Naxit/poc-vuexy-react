import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	Button,
	Row,
	Card,
	CardBody,
	CardTitle,
	CardText,
	Col,
	CustomInput,
	ListGroup,
	ListGroupItem,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap'
import {
	modalBasic,
	modalTheme,
	modalSizes,
	modalEvents,
	modalForm,
	modalUnmount
} from '../components/modal/ModalSourceCode.js'
import {
	Award,
	Calendar,
	Clipboard,
	Clock,
	Flag,
	Mail,
	MapPin,
	Phone,
	User,
	Zap
} from 'react-feather'
import Avatar from '@components/avatar'
import avatarImg from '@src/assets/images/portrait/small/avatar-s-20.jpg'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import '@styles/react/libs/maps/map-leaflet.scss'


const Services = () => {
	const [basicModal, setBasicModal] = useState(false)
	const [active, setActive] = useState('1')

	const toggle = tab => {
		if (active !== tab) {
			setActive(tab)
		}
	}

	return (
		<div>
			<Row className='mb-2'>
				Pointages
			</Row>

			<Button.Ripple color='primary' outline onClick={() => setBasicModal(!basicModal)}>
				Détail d'une vacation
			</Button.Ripple>

			<Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)} className='modal-dialog-centered'>
				<ModalHeader toggle={() => setBasicModal(!basicModal)}>
					Vacation du 13 octobre 2021 de 08:00 à 20:00
				</ModalHeader>

				<ModalBody>
					<Nav tabs>
						<NavItem>
							<NavLink active={active === '1'} onClick={() => { toggle('1') }}>
								Pointage
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink active={active === '2'} onClick={() => { toggle('2') }}>
								Agent
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink active={active === '3'} onClick={() => { toggle('3') }}>
								Site
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink active={active === '4'} onClick={() => { toggle('4') }}>
								Consignes & accès
							</NavLink>
						</NavItem>
					</Nav>

					<TabContent className='py-50' activeTab={active}>

						{/**	Pointage	*/}
						<TabPane tabId='1'>
							<ModalBody>
								<ListGroup className='list-group-filters mb-1'>
									<ListGroupItem>
										<Row>
											<Col className='mb-0'>
												<Clock className='mr-75' size={18} />
												<span className='align-middle'>Prise de service</span>
											</Col>
											<Col>
												<span className='align-middle'>08:00</span>
											</Col>
											<Col className='col-2'>
												<CustomInput type='switch' id='admin-1' label='' defaultChecked disabled />
											</Col>
										</Row>
									</ListGroupItem>
									<ListGroupItem>
										<Row>
											<Col className='mb-0'>
												<Clock className='mr-75' size={18} />
												<span className='align-middle'>Fin de service</span>
											</Col>
											<Col>
												<span className='align-middle'>20:00</span>
											</Col>
											<Col className='col-2'>
												<CustomInput type='switch' id='admin-2' label='' defaultChecked disabled />
											</Col>
										</Row>
									</ListGroupItem>
								</ListGroup>

								<ListGroup className='list-group-filters mb-1'>
									<ListGroupItem>
										<h4>
											Informations
										</h4>
										<Row className='my-1'>
											<Col>
												<User className='mr-75' size={18} />
												<span>Agent</span>
											</Col>
											<Col>
												John DOE
											</Col>
										</Row>
										<Row className='my-1'>
											<Col>
												<MapPin className='mr-75' size={18} />
												<span>Site</span>
											</Col>
											<Col>
												Carrefour Les Ulis
											</Col>
										</Row>
										<Row className='my-1'>
											<Col>
												<Award className='mr-75' size={18} />
												<span>Prestation</span>
											</Col>
											<Col>
												Gardiennage
											</Col>
										</Row>
										<Row className='my-1'>
											<Col>
												<Flag className='mr-75' size={18} />
												<span>Profil</span>
											</Col>
											<Col>
												SISAP1 JOUR
											</Col>
										</Row>
										<Row className='my-1'>
											<Col>
												<Zap className='mr-75' size={18} />
												<span>Activité</span>
											</Col>
											<Col>
												SSIAP 1
											</Col>
										</Row>
									</ListGroupItem>
								</ListGroup>

								<ListGroup className='list-group-filters mb-1'>
									<ListGroupItem>
										<h4>
											Responsable d'exploitation
										</h4>
										<span>
											Jamel CHERIF
										</span>
										<Row className='mt-1' noGutters>
											<Col>
												<Button.Ripple color='flat-primary' size='sm' className='d-flex nowrap align-items-center'>
													<Phone className='mr-75' size={18} />
													<span>06 28 80 27 93</span>
												</Button.Ripple>
											</Col>
											<Col>
												<Button.Ripple color='flat-primary' size='sm' className='d-flex nowrap align-items-center'>
													<Mail className='mr-75' size={18} />
													<span>jamel.cherif@secu.com</span>
												</Button.Ripple>
											</Col>
										</Row>
									</ListGroupItem>
								</ListGroup>

								<ListGroup className='list-group-filters'>
									<ListGroupItem>
										<h4>
											Responsable client
										</h4>
										<span>
											Mathieu VALLET
										</span>
										<Row className='mt-1' noGutters>
											<Col>
												<Button.Ripple color='flat-primary' size='sm' className='d-flex nowrap align-items-center'>
													<Phone className='mr-75' size={18} />
													<span>06 28 80 27 93</span>
												</Button.Ripple>
											</Col>
											<Col>
												<Button.Ripple color='flat-primary' size='sm' className='d-flex nowrap align-items-center'>
													<Mail className='mr-75' size={18} />
													<span>mathieu.vallet@secu.com</span>
												</Button.Ripple>
											</Col>
										</Row>
									</ListGroupItem>
								</ListGroup>
							</ModalBody>
						</TabPane>

						{/**	Agent	*/}
						<TabPane tabId='2'>
							<ListGroup className='list-group-filters mb-1'>
								<ListGroupItem>
									<Row className='p-1 align-items-center'>
										<Col className='flex-grow-0'>
											<Avatar img={avatarImg} size='xl'/>
											<span className='mt-1'>MAT07389</span>
										</Col>
										<Col className='no-wrap'>
											<Row>
												<Col>
													<h5>
														François-Régis DE FEYDEAU DE SAINT-CHRISTOPHE
													</h5>
												</Col>
											</Row>
											<Row className='pt-1'>
												<Col className='flex-grow-0'>
													<Button.Ripple color='primary' className='d-flex no-wrap align-items-center'>
														<Calendar className='mr-75' size={18} />
														<span>Planning</span>
													</Button.Ripple>
												</Col>
												<Col className='flex-grow-0'>
													<Button.Ripple color='primary' outline className='d-flex no-wrap align-items-center'>
														<Clipboard className='mr-75' size={18} />
														<span>Fiche</span>
													</Button.Ripple>
												</Col>
											</Row>
										</Col>
									</Row>
								</ListGroupItem>
							</ListGroup>
							<ListGroup className='list-group-filters'>
								<ListGroupItem>
									<Row className='pt-1'>
										<Col>
											<h4>Coordonnées</h4>
											<Button.Ripple color='flat-primary' className='d-flex no-wrap align-items-center'>
												<Phone className='mr-75' size={18} />
												<span>06 29 98 28 00</span>
											</Button.Ripple>
											<Button.Ripple color='flat-primary'
												className='d-flex no-wrap align-items-center justify-content-start'>
												<Mail className='mr-75' size={18} />
												<span>francois-regis.de-feydeau@gmail.com</span>
											</Button.Ripple>
										</Col>
									</Row>
									<Row className='mt-1'>
										<Col>
											<span>Carte professionnelle</span>
											<h5>CAR-02B-2022-07-26-20170599381</h5>
										</Col>
									</Row>
									<Row className='mt-1'>
										<Col>
											<span>Numéro de sécurité sociale</span>
											<h5>1 86 08 69 388 039 73</h5>
										</Col>
									</Row>
									<Row className='mt-1'>
										<Col>
											<MapContainer center={[51.5074, 0.1278]} zoom={13} className='leaflet-map'>
												<TileLayer
													attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
													url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
												/>
												<Marker position={[51.5074, 0.1278]} />
											</MapContainer>
										</Col>
									</Row>
									<Row className='mt-1'>
										<Col>
											<span>
												1, rue Terre Neuve<br/>
												91940 LES ULIS, France
											</span>
										</Col>
									</Row>
								</ListGroupItem>
							</ListGroup>
						</TabPane>

						{/**	Site	*/}
						<TabPane tabId='3'>
							<p>
								Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
								cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
								halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
							</p>
							<p>
								Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
								marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
							</p>
						</TabPane>

						{/**	Consignes & accès	*/}
						<TabPane tabId='4'>
							<p>
								Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame snaps. Dessert macaroon bonbon carrot
								cake biscuit. Lollipop lemon drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear claw pie
								halvah oat cake cotton candy sweet roll. Cotton candy sweet roll donut ice cream.
							</p>
							<p>
								Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears chocolate cake topping powder. Sweet
								marzipan cheesecake jelly-o powder wafer lemon drops lollipop cotton candy.
							</p>
						</TabPane>
					</TabContent>
				</ModalBody>
			</Modal>
		</div>
	)
}

export default Services

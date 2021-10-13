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
import { Award, Clock, Flag, Mail, MapPin, Phone, User, Zap } from 'react-feather'
import PerfectScrollbar from 'react-perfect-scrollbar'


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
						<TabPane tabId='1'>
							<ModalBody>
								<ListGroup className='list-group-filters'>
									<ListGroupItem>
										<Row>
											<Col className='mb-0'>
												<Clock className='mr-75' size={18} />
												<span className='align-middle' style={{ marginBottom: 0 }}>Prise de service</span>
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
												<span className='align-middle' style={{ marginBottom: 0 }}>Fin de service</span>
											</Col>
											<Col>
												<span className='align-middle'>20:00</span>
											</Col>
											<Col className='col-2'>
												<CustomInput type='switch' id='admin-1' label='' defaultChecked disabled />
											</Col>
										</Row>
									</ListGroupItem>
								</ListGroup>
							</ModalBody>

							<ModalBody>
								<Row className='my-1'>
									<Col>
										<User className='mr-75' size={18} color='secondary'/>
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
							</ModalBody>

							<ModalBody>
								<ListGroup className='list-group-filters'>
									<ListGroupItem>
										<Row>
											<Col>
												<h4>
													Responsable d'exploitation
												</h4>
												<span>
													Jamel CHERIF
												</span>
											</Col>
										</Row>
										<Row className='mt-1' noGutters>
											<Col>
												<Button.Ripple color='flat-primary' size='sm'
													style={{
														display: 'flex',
														flexWrap: 'nowrap',
														alignItems: 'center',
														whiteSpace: 'nowrap'
													}}
												>
													<Phone className='mr-75' size={18} />
													<span>06 28 80 27 93</span>
												</Button.Ripple>
											</Col>
											<Col>
												<Button.Ripple color='flat-primary' size='sm'
													style={{
														display: 'flex',
														flexWrap: 'nowrap',
														alignItems: 'center',
														whiteSpace: 'nowrap'
													}}
												>
													<Mail className='mr-75' size={18} />
													<span>jamel.cherif@secu.com</span>
												</Button.Ripple>
											</Col>
										</Row>
									</ListGroupItem>
								</ListGroup>

								<ListGroup className='list-group-filters mt-1'>
									<ListGroupItem>
										<Row>
											<Col>
												<h4>
													Responsable client
												</h4>
												<span>
													Mathieu VALLET
												</span>
											</Col>
										</Row>
										<Row className='mt-1' noGutters>
											<Col>
												<Button.Ripple color='flat-primary' size='sm'
													style={{
														display: 'flex',
														flexWrap: 'nowrap',
														alignItems: 'center',
														whiteSpace: 'nowrap'
													}}
												>
													<Phone className='mr-75' size={18} />
													<span>06 28 80 27 93</span>
												</Button.Ripple>
											</Col>
											<Col>
												<Button.Ripple color='flat-primary' size='sm'
													style={{
														display: 'flex',
														flexWrap: 'nowrap',
														alignItems: 'center',
														whiteSpace: 'nowrap'
													}}
												>
													<Mail className='mr-75' size={18} />
													<span>mathieu.vallet@secu.com</span>
												</Button.Ripple>
											</Col>
										</Row>
									</ListGroupItem>
								</ListGroup>
							</ModalBody>
						</TabPane>

						<TabPane tabId='2'>
							<p>
								Dragée jujubes caramels tootsie roll gummies gummies icing bonbon. Candy jujubes cake cotton candy. Jelly-o
								lollipop oat cake marshmallow fruitcake candy canes toffee. Jelly oat cake pudding jelly beans brownie lemon
								drops ice cream halvah muffin. Brownie candy tiramisu macaroon tootsie roll danish.
							</p>
							<p>
								Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart jelly-o caramels apple pie jelly danish
								marshmallow. Icing caramels lollipop topping. Bear claw powder sesame snaps.
							</p>
						</TabPane>

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

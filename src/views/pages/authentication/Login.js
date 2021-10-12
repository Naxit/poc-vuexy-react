import { useState, useContext, Fragment } from 'react'
import classnames from 'classnames'
import Avatar from '@components/avatar'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast, Slide } from 'react-toastify'
import { handleLogin } from '@store/actions/auth'
import { AbilityContext } from '@src/utility/context/Can'
import { Link, useHistory } from 'react-router-dom'
import InputPasswordToggle from '@components/input-password-toggle'
import { getHomeRouteForLoggedInUser, isObjEmpty } from '@utils'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee } from 'react-feather'
import {
  Alert,
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Input,
  FormGroup,
  Label,
  CustomInput,
  Button,
  UncontrolledTooltip
} from 'reactstrap'

import '@styles/base/pages/page-auth.scss'

const ToastContent = ({ name, role }) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
        <h6 className='toast-title font-weight-bold'>Welcome, {name}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span>You have successfully logged in as an {role} user to Vuexy. Now you can start to explore. Enjoy!</span>
    </div>
  </Fragment>
)

const Login = props => {
  const [skin, setSkin] = useSkin()
  const ability = useContext(AbilityContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const [email, setEmail] = useState('admin@demo.com')
  const [password, setPassword] = useState('admin')

  const { register, errors, handleSubmit } = useForm()
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    if (isObjEmpty(errors)) {
      useJwt
        .login({ email, password })
        .then(res => {
          const data = { ...res.data.userData, accessToken: res.data.accessToken, refreshToken: res.data.refreshToken }
          dispatch(handleLogin(data))
          ability.update(res.data.userData.ability)
          history.push(getHomeRouteForLoggedInUser(data.role))
          toast.success(
            <ToastContent name={data.fullName || data.username || 'John Doe'} role={data.role || 'admin'} />,
            { transition: Slide, hideProgressBar: true, autoClose: 2000 }
          )
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <h2>Comète webapp</h2>
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <div style={{
              border: '1px solid hotpink',
              height: '20rem',
              width: '40rem',
              	
            }}>
              <svg width="125.188" height="27.073" viewBox="0 0 125.188 27.073">
                <defs>
                  <radialGradient id="radial-gradient" cx="0.315" cy="0.325" fx="-1.0678871870040894" r="1.411" gradientTransform="translate(0.01) scale(0.98 1)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#feeb17"/>
                    <stop offset="0.74" stop-color="#f8bf01"/>
                  </radialGradient>
                </defs>
                <path id="Comete" data-name="Comete" d="M46.957,8.778,25.26,0l9.431,21.415A9.5,9.5,0,1,0,46.957,8.778ZM43.679,24.1a6.208,6.208,0,0,1-5.764-3.7L31.755,6.435l14.153,5.728A6.2,6.2,0,0,1,43.679,24.1Z" transform="translate(-10.122)" fill="url(#radial-gradient)"/>
                <path id="Letters" data-name="Letters" d="M-4083.692-41.778a9.066,9.066,0,0,1-2.654-6.7,9.182,9.182,0,0,1,2.594-6.657,8.944,8.944,0,0,1,6.705-2.661,8.166,8.166,0,0,1,6.364,2.727,9.588,9.588,0,0,1,2.463,6.59,9.991,9.991,0,0,1-.1,1.385l-14.865.047a5.827,5.827,0,0,0,2.18,3.691,6.771,6.771,0,0,0,4.236,1.312,5.562,5.562,0,0,0,5.112-2.588l2.625,1.486a8.653,8.653,0,0,1-7.79,4.009q-.186.007-.371.007A9.291,9.291,0,0,1-4083.692-41.778Zm.5-7.964h11.846a5.911,5.911,0,0,0-1.984-3.829,5.709,5.709,0,0,0-3.727-1.319q-.148-.007-.3-.007A5.89,5.89,0,0,0-4083.188-49.742Zm-32.59,7.964a9.058,9.058,0,0,1-2.691-6.7,9.18,9.18,0,0,1,2.589-6.668,8.937,8.937,0,0,1,6.705-2.661,8.167,8.167,0,0,1,6.369,2.738,9.582,9.582,0,0,1,2.462,6.59,9.075,9.075,0,0,1-.108,1.385l-14.859.047a5.834,5.834,0,0,0,2.2,3.691,6.775,6.775,0,0,0,4.2,1.312,5.559,5.559,0,0,0,5.11-2.588l2.678,1.486a8.651,8.651,0,0,1-7.789,4.009q-.182.007-.364.007A9.288,9.288,0,0,1-4115.778-41.778Zm.467-7.964h11.846a5.912,5.912,0,0,0-1.984-3.829,5.711,5.711,0,0,0-3.727-1.319q-.149-.007-.3-.007A5.89,5.89,0,0,0-4115.311-49.742Zm-75.428,7.933a9.121,9.121,0,0,1-2.665-6.669,9.12,9.12,0,0,1,2.673-6.652,9.119,9.119,0,0,1,6.657-2.665,8.993,8.993,0,0,1,4.721,1.259,7.958,7.958,0,0,1,3.123,3.391l-2.594,1.486a5.262,5.262,0,0,0-2.073-2.271,6.043,6.043,0,0,0-3.176-.85,5.99,5.99,0,0,0-4.452,1.8,6.153,6.153,0,0,0-1.8,4.505,6.115,6.115,0,0,0,1.8,4.471,5.99,5.99,0,0,0,4.452,1.8,6.18,6.18,0,0,0,3.194-.834,5.593,5.593,0,0,0,2.163-2.252l2.624,1.528a8.615,8.615,0,0,1-3.259,3.349,9.112,9.112,0,0,1-4.721,1.283l-.212,0A9.121,9.121,0,0,1-4190.739-41.808Zm96.909,1.559q-1.882-1.181-1.906-4.489v-9.587h-3.511v-3h3.511v-4.057l3.086-.922v4.967h4.722l.023,2.977h-4.721v9.617a2.708,2.708,0,0,0,.516,1.864,2.122,2.122,0,0,0,1.582.563q1.061,0,2.624-.054V-39.6a17.84,17.84,0,0,1-2.291.163A6.834,6.834,0,0,1-4093.83-40.25Zm-30.769.653V-50.5a4.153,4.153,0,0,0-4.152-4.153A4.152,4.152,0,0,0-4132.9-50.5v10.9h-3.074V-50.514a4.151,4.151,0,0,0-4.148-3.995,4.152,4.152,0,0,0-4.15,3.995V-39.6h-3.068V-50.772a7.191,7.191,0,0,1,4.631-6.758,7.192,7.192,0,0,1,7.952,1.964l.318.36.316-.36a7.192,7.192,0,0,1,7.967-1.959,7.191,7.191,0,0,1,4.617,6.782V-39.6Zm14.589-20.186-3.594-4.68h3.72l2.87,4.68Z" transform="translate(4193.407 65.854)" fill="#23427c"/>
              </svg>
            </div>
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Bienvenue sur Comète !
            </CardTitle>
            <CardText className='mb-2'>Se connecter</CardText>
            <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input
                  autoFocus
                  type='email'
                  value={email}
                  id='login-email'
                  name='login-email'
                  placeholder='john@example.com'
                  onChange={e => setEmail(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-email'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                  <Link to='/forgot-password'>
                    <small>Forgot Password?</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  value={password}
                  id='login-password'
                  name='login-password'
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                  className={classnames({ 'is-invalid': errors['login-password'] })}
                  innerRef={register({ required: true, validate: value => value !== '' })}
                />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-Primary' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple type='submit' color='primary' block>
                Sign in
              </Button.Ripple>
            </Form>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login

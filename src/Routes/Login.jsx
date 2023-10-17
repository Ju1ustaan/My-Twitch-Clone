import React from 'react'
import { useDispatch } from 'react-redux'
import { postAxios } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const [clientId, setClientId] = useState('')
  // const [clientSecret, setClientSecret] = useState('')

  // const handleId = (e) => {
  //   if(e.key === 'Enter'||e.key === 'Tab'){
  //     setClientId(e.target.value)
  //   }
  // }
  // const handleSecret = (e) => {
  //   if(e.key === 'Enter'||e.key === 'Tab'){
  //     setClientSecret(e.target.value)   
  //    }
  // }
  // const handleSubmit = (e) => {
  // dispatch(postAxios(e))
  //   .then(res => {
  //     localStorage.setItem('token', res.data.access_token)
  //     if (res.data.access_token) {
  //       navigate('/')
  //     }
  //   })
  // }

  // Валидация 
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(5, 'Че так коротко')
      .max(50, 'Оу май')
      .required('Required'),
    // .matches(/^[aA-zZ]+$/, "error?"),
    password: Yup.string()
      // .matches(/^[aA-zZ0-9.-_--]+$/, "error?")
      .min(5, 'Че так коротко')
      .max(50, 'Оу май')
      .required('Required'),

  });

  const logIn = (values) => {
    dispatch(postAxios(values))
      .then((res) => {
        localStorage.setItem('token', res.data.access_token)
        if (res.data.access_token) {
          navigate('/')
        }
      })
  }

  return (
    <div className='login'>
      <div className="login__wrapper">
        <p className="login__title">Авторизация</p>
        <Formik
          initialValues={{
            fullName: '',
            password: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            logIn(values)
          }}>

          {
            ({ errors, touched, values, handleChange }) => (

              <Form className='login__form'>
                <input
                  type="text"
                  name="fullName"
                  className="login__inp"
                  placeholder="Full Name"
                  onChange={handleChange} />

                {errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}

                <input
                  type="text"
                  name="password"
                  className="login__inp"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {errors.password && touched.password ? <div>{errors.password}</div> : null}

                <button
                  type="submit"
                  className="login__btn"
                >LogIn</button>

              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default Login
import axios from 'axios'
import swAlert from '@sweetalert/with-react'
import { useNavigate, Navigate } from 'react-router-dom'

const Login = () => {

  const history = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email === '' || password === '') {
      swAlert(
        <h2>email or password required</h2>
      )
      return
    }

    if(email !== '' && !regexEmail.test(email)) {
      swAlert(
        <h2>enter a valid email address</h2>
      )
      return
    }

    if(email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert(
        <h2>incorrect password or email</h2>
      )
      return
    }

    axios
      .post('http://challenge-react.alkemy.org', {email, password})
      .then(res => {
          console.log(res.data)
          const hardCodeToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxM…AyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"
          sessionStorage.setItem('token', hardCodeToken)
          history('/list')
      })
  }

  let token = sessionStorage.getItem('token')

  return (
    <>
      {token && <Navigate replace to="/list"/>}

      <div className='row'>
        <div className='col-6 offset-3'>
          <h2>Login Form</h2>
          <form onSubmit={submitHandler}>
            <label className='form-label d-block'>
                <span>Email</span> <br/>
                <input className='form-control' type='email' name='email' /> 
            </label>
            <br />
            <label className='form-label d-block '>
                <span>Password</span> <br/>
                <input className='form-control' type='password' name='password' /> 
            </label>
            <br />
            <button className='btn btn-success' type='submit'>Login</button>
            <p className='mt-4'>Get access using:</p>
            <p className='m-0'>
              Email: challenge@alkemy.org
            </p>
            <p>Password: react</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
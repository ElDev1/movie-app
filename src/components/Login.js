import axios from 'axios'
import swAlert from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom'

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
          const token = res.data.token
          localStorage.setItem('token', token)
          history('/list')
      })

  }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <span>Email</span> <br/>
            <input type='email' name='email' /> 
        </label>
        <br />
        <label>
            <span>Password</span> <br/>
            <input type='password' name='password'/> 
        </label>
        <br />
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login
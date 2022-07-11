import React from 'react'

const Login = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email === '' || password === '') {
      console.log('email or password required')
      return
    }

    if(email !== '' && !regexEmail.test(email)) {
      console.log('enter a valid email address')
      return
    }

    if(email !== 'example@gmail.com' || password !== 'react') {
      console.log('incorrect password or email')
      return
    }

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
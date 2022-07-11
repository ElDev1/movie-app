import React from 'react'

const Login = () => {
  return (
    <form>
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
import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export const Login = () => {

   const [credentials, setCredentials] = useState({
    
      email: "",
      password: "",
      
    })
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      try {
        const response = await fetch("http://localhost:5000/api/loginuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           
            email: credentials.email,
            password: credentials.password,
           
          })
        })
  
        const json = await response.json()
        console.log(json)
  
        if (response.ok && json.success) {
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"))
          navigate("/")
        } else {
          alert(json.message || " Enter valid credentials")
        }
  
      } catch (error) {
        console.error(error)
        alert(" Server error")
      }
    }
  
    const handleChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  return (
    <div >
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name='email'
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name='password'
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>

        <Link to='/createuser' className='m-3 btn btn-danger'>
          i am a new user
        </Link>

      </form>
    </div>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
          location: credentials.geolocation
        })
      })

      const json = await response.json()
      console.log(json)

      if (response.ok && json.success) {
        alert("successfully ")
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
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name='name'
            value={credentials.name}
            onChange={handleChange}
            required
          />
        </div>

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

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            name='geolocation'
            value={credentials.geolocation}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>

        <Link to='/login' className='m-3 btn btn-danger'>
          Already a user
        </Link>

      </form>
    </div>
  )
}

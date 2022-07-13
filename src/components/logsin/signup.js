import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Sairam Nomula"
          />
        </div>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="sairamnomula14@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="******"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={() => this.nextPath('/Fbconnect') }>
            Sign Up
          </button>
        </div>
        <p  className="forgot-password text-center">
          Already registered? <Link style={{textDecoration: 'none'}}classname='enroute' to={'/sign-in'}>
                    Login
                  </Link>
        </p>
      </form>
    )
  }
}
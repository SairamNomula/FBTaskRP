import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Login to your account</h3>
        <div className="mb-3">
          <label>Email</label>
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
            placeholder="**********"
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
          <button type="submit" className="btn btn-primary">
          <Link to={'/fb-connect'}>
            Submit
            </Link>
          </button>
        </div>
        <p className="forgot-password text-center">
          New to myapp? <Link style={{textDecoration: 'none'}} to={'/sign-up'}>
                    Sign up
                  </Link>
        </p>
      </form>
    )
  }
}
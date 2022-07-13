import React, { Component } from 'react'
export default class Fbdisconnect extends Component {
  render() {
    return (
      <form>
        <h3>Facebook page integration</h3>
        <h6>Integrated Page: <strong>Amazon Business</strong></h6>
        
        <div className="d-grid">
          <button className="btn btn-danger">
            Delete Integration
          </button>
        </div>
        <br />
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Reply to messages
          </button>
        </div>
      </form>
    )
  }
}
import React, { Component } from 'react'
export default class Fbconnect extends Component {
  render() {
    return (
      <form>
        <h3>Facebook page integration</h3>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Connect Page
          </button>
        </div>
      </form>
    )
  }
}
import React, { Component, Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class SideBarHeader extends Component {
  render() {
    return (
      <React.Fragment>

        <div id="profile">
          <div className="wrap">
            <img id="profile-img" src="https://www.nextgreencar.com/i/ngc-logo.png" className="online" alt="" />
            <p>Next Green Car</p>
            
            
            <div id="status-options">
              <ul>
                <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
              </ul>
            </div>
            
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SideBarHeader extends Component {
  render() {
    return (
      <React.Fragment>

        <div id="profile">
          <div className="wrap">
            <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" className="online" alt="" />
            <p>Mike Ross</p>
            <FontAwesomeIcon icon="fa-chevron-down"/>
            <i className="fa fa-chevron-down expand-button" aria-hidden="true"></i>
            <div id="status-options">
              <ul>
                <li id="status-online" className="active"><span className="status-circle"></span> <p>Online</p></li>
                <li id="status-away"><span className="status-circle"></span> <p>Away</p></li>
                <li id="status-busy"><span className="status-circle"></span> <p>Busy</p></li>
                <li id="status-offline"><span className="status-circle"></span> <p>Offline</p></li>
              </ul>
            </div>
            <div id="expanded">
              <label for="twitter"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
              <input name="twitter" type="text" value="mikeross" />
              <label for="twitter"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
              <input name="twitter" type="text" value="ross81" />
              <label for="twitter"><i className="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
              <input name="twitter" type="text" value="mike.ross" />
            </div>
          </div>
        </div>
        
      </React.Fragment>
    )
  }
}

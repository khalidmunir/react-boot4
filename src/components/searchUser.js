import React, { Component, Fragment } from 'react'

export default class SearchUser extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="search">
            
            <label for=""><i className="fa fa-search" aria-hidden="true"></i></label>
            <input type="text" placeholder="Search contacts..." />
            <FontAwesomeIcon icon={faSearch}/>
          </div>
      </React.Fragment>
    )
  }
}

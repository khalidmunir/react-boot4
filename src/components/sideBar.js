import React, { Component } from 'react'
import SideBarHeader from './sideBarHeader'
import SearchUser from './searchUser'
import SideBarUserList from './sideBarUserList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class SideBar extends Component {
    render() {
        
    return (
        <React.Fragment>
        <div id="sidepanel">
        <SideBarHeader />
      
        <SideBarUserList users={this.props.userList}/>
        
      </div>
      </React.Fragment>
    )
  }
}

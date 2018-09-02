import React, { Component } from 'react'
import SideBarHeader from './sideBarHeader'
import SearchUser from './searchUser'
import SideBarUserList from './sideBarUserList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class SideBar extends Component {
    render() {
        console.log(this.props)
        const { userList } = this.props
    return (
        <React.Fragment>
        <div id="sidepanel">
        <SideBarHeader />
      
        <SideBarUserList userList={userList}/>
        
      </div>
      </React.Fragment>
    )
  }
}

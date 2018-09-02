import React, { Component, Fragment } from 'react'
import ChatItem from './chatItem'

class ChatWindow extends Component {
  render() {
    console.log(this.props)
    return (
        <React.Fragment>
            <div className="content">
        <div className="contact-profile">
          <img src="https://www.nextgreencar.com/i/ngc-logo.png" alt="" />

          <div className="social-media">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
             <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
        <div className="messages">
          <ul>
            {this.props.chats.map( item => <ChatItem chat={item} /> )}
          </ul>
        </div>
        
      </div>
        </React.Fragment>
    )
  }
}

export default ChatWindow

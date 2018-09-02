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
            <li className="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
              <p>When you're backed against the wall, break the god damn thing down.</p>
            </li>
            <li className="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
              <p>Excuses don't win championships.</p>
            </li>
            <li className="sent">
              <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
              <p>Oh yeah, did Michael Jordan tell you that?</p>
            </li>
            <li className="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
              <p>No, I told him that.</p>
            </li>
            <li className="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
              <p>What are your choices when someone puts a gun to your head?</p>
            </li>
            <li className="sent">
              <img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
              <p>What are you talking about? You do what they say or they shoot you.</p>
            </li>
            <li className="replies">
              <img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
              <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
            </li>
          </ul>
        </div>
        
      </div>
        </React.Fragment>
    )
  }
}

export default ChatWindow

import React, { Component } from 'react'

 const ChatItem = (props) => {
    const { classes, chat } = props;
    // extract further from the chat in props
    //const { id, avatar, comment, username, validParent } = chat;
    const { id, parent, username, full_name, avatar, dateenglish, datehumanform, comment, validParent } = chat;
  
    //console.log("CHAT", chat)
    //console.log("validParent", validParent)
    const cssHandle = validParent ? 'send' : 'recieve'
  
    return (
  
        <li key={id} className={cssHandle}>
            <img src={ avatar } alt={ full_name } />
            <p>{ comment }</p>
        </li>

    );
  }

export default ChatItem


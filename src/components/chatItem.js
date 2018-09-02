import React, { Component } from 'react'

 const ChatItem = (props) => {
    const { chat } = props;
    // extract further from the chat in props
    //const { id, avatar, comment, username, validParent } = chat;
    const { id, parent, username, full_name, avatar, dateenglish, datehumanform, comment, validParent } = chat;
  
    const cssHandle = validParent ? 'replies' : 'sent'
  
    return (
  
        <li key={id} className={cssHandle}>
            <img src={ avatar } alt={ full_name } />
            <p>{ comment } <br /><br />{datehumanform}</p>
        </li>

    );
  }

export default ChatItem


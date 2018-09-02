import React, { Component, Fragment } from 'react'

class SideBarUserList extends Component {
    render() {
    const { users } = this.props
    console.log("SideBarUserList props", users)

    let aList = users.map(user => {
        console.log('user.fullname', user.fullname)    
        return  <li key={user.fullname} className="contact">
            <div className="wrap">
            
                <span className="contact-status online"></span>
                <img src={user.url} alt={user.fullname} />
                <div className="meta">
                    <p className="name">{user.fullname}</p>
                    <p className="preview">{user.UserChatList[0].comment}</p>
                </div>
            </div>
          </li>
        
      })






    const userList = users.map(user => {
        <li> {user.fullname} </li>
        //console.log("INSIDE USER LIST", user)

        // <li key={user.fullname} className="contact">
            // <div className="wrap">
            //     <span className="contact-status online"></span>
            //     <img src={user.url} alt={user.fullname} />
            //     <div className="meta">
            //         <p className="name">{user.fullname}</p>
            //         <p className="preview">{user.UserChatList[0].comment}</p>
            //     </div>
            // </div>
        // </li>
        
        
         
      })

    return (
      <React.Fragment>

        <div id="contacts">
            <ul style={{listStyleType: "none" }}>
            
                {aList}
         
          </ul>
        </div>
        
      </React.Fragment>

      
    )
  }
}

export default SideBarUserList

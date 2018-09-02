import React, { Component } from 'react';
import moment from 'moment'
import logo from './logo.svg';
import './App.css';
import ChatWindow from './components/chatWindow'
import SideBar from './components/sideBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

class App extends Component {
  
  state = {
    chats: [],
    userList: [],
    isLoading: true,
    errors: null,
  };

  fetchUsers() {
    // Where are we fetching data from
    fetch(`http://localhost:8000/api/chats`)
      // We get the API response then receive data in JSON...
      .then(response => response.json())
      // Normally would use a store like redux
      // being this example demo - simpler to it do this way.. 
      .then(sorted => this.fixRelationships(sorted))
      // finally data should look good - so set the state.
      .then(data =>
        this.setState({
          chats: data,
          isLoading: false,
        })
      )
      // Catch any unknowns (errors) and update loading status
      .catch(error => this.setState({ error, isLoading: false }));
  }

fixRelationships(inList) {

  // check if the parent id does exists- only then add to the array.
  //let resortedList = null; 

  let sorted_items = inList.sort((a,b) => {
    // wasted much time figuring this - need to use minus due to behaviour of moment.js
    // return value giving falsy/truths. Made me wish I stuck to underscore 
    // and using the helper function for sorting by date 
    return moment(b.date).format('X') -  moment(a.date).format('X') 
  });

  // fix and add relevant date helpers
  sorted_items.map( (item) => {
    
    item.dateenglish = moment(item.date).format('MMMM Do YYYY, h:mm:ss a')
    item.datehumanform = moment(item.date).fromNow()
    item.validParent = null;

    return item;
  })

  let chatByUser = (userName) => sorted_items.filter( (item) => {
    return item.full_name === userName
  })

  // Grab all the users from the json
  const userList = sorted_items.map( (item) => {
    let { avatar, username, full_name : fullname } = item

    return { fullname: fullname, 
             url: avatar, 
             username: username,
             UserChatList: chatByUser(fullname) 
           }
  })
  //this.setState( { userList } )

  // make them unique 
  const uniqueUsers = [...userList.reduce( (itemsMap, item) => 
    itemsMap.has(item.fullname) ? 
    itemsMap : 
    itemsMap.set(item.fullname, item), new Map()).values()]

  console.log("Uniqe users", uniqueUsers)
  this.setState( { userList: uniqueUsers } )
  
  // grab all the parents - children are more tricky as only some have valid parents (they dont exist in the array).
  // (don't remove orphaned children as they will need to be re-inserted date sorted)
  let parentList = sorted_items.filter( (item) => { 
    return ((item.parent === null)||(item.parent !== null && (sorted_items.findIndex(x => x.id === item.parent) < 0)))
  })

  // grab Only the children with valid parents from the parentlist
  let childrenList = sorted_items.filter( (item) => {
    return item.parent !== null && (parentList.findIndex(x => x.id === item.parent) > 0)
  })

  // Algorithm required - To fix List : 
  // map through the childrenList and find the parentList entry to append to..
  childrenList.map( (child, index) => {
    
    // keep it simple to show/explain logic - 
    // could have used a find and prevent the 'for' looping 
    // of the array.
    for(let i=0;i<parentList.length;i++) {        
      if( parentList[i].id == child.parent) {
        // can use later as valid reply flag
        child.validParent = true;
        parentList.splice( i+1, 0, child );
        break;
      }
    }
  })

  console.log(" ### FIXED Parent List ###", parentList)
  this.setState({ chats: parentList })

  return parentList;
}

componentDidMount() {

  this.fetchUsers()
}

  render() {
    return (
      <div id="frame">
        <SideBar userList={this.state.userList}/>
        <ChatWindow chats={this.state.chats} />
        
      </div>
    );
  }
}

export default App;

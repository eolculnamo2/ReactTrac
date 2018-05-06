import React from 'react';
import './Menu.scss';

class Menu extends React.Component {
    logout(){
      fetch('/authenticate/logout',
       {
           method: "get",
           headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
               'Cache': 'no-cache'
             },
             credentials: 'same-origin'
       })
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        data.name == 'success' ? this.props.changePage('login',null,null,false) : alert('Logout Error')
      })
    }
    showMenu(){
      if(this.props.currentPage != 'login'){
        return(
          <ul className="options">
              <li onClick = {this.props.changePage.bind(this,'ticket-list','My Tickets',null,null,'my-tickets',null)}>
                  My Tickets
              </li>
              <li>
                  Search
              </li>
              <li>
                  Settings
              </li>
              <li onClick = {this.logout.bind(this)}>
                  Logout
              </li>
          </ul>
        )
      }
    }
    render(){
        return(
            <div className="menu">
                <h1 onClick={()=>{this.props.changePage('categories')}}>ReactTrac</h1>
                {this.showMenu()}
            </div>
        )
    }
}

export default Menu;

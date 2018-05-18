import React from 'react';
import mobileMenu from '../../../assets/img/hamburger.png';
import './Menu.scss';

class Menu extends React.Component {
    componentDidUpdate(){
      if(document.getElementById("mobile-icon") != undefined){
        document.body.addEventListener("mouseover",(e)=>{
          if(e.target.id == ("dropdown-list") || e.target.id == ("mobile-icon") || e.target.nodeName == ("LI")){
            document.getElementById("dropdown-list").style.display="block";
          }
          else{
            document.getElementById("dropdown-list").style.display="none";
          }
        })
      }
    }
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
          <div className="options-main">
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
            <div className="mobile">
              <div className="mobile-menu">
                <img id="mobile-icon" src={mobileMenu}/>
                <ul id="dropdown-list">
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
              </div>
            </div>
          </div>
        )
      }
    }

    render(){
        return(
            <div className="menu">
                <h1 onClick={()=>{this.props.changePage('categories')}}>ReactTrac</h1>
                { this.showMenu() }
            </div>
        )
    }
}

export default Menu;

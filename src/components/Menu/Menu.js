import React from 'react';
import './Menu.scss';

class Menu extends React.Component {
    logout(){
      fetch('/authenticate/logout')
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
        console.log(data.name)
        data.name == 'success' ? this.props.changePage('login') : alert('Logout Error')
      })
    }
    render(){
        return(
            <div className="menu">
                <h1 onClick={()=>{this.props.changePage('categories')}}>JTrac Clone</h1>
                <ul className="options">
                    <li>
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
        )
    }
}

export default Menu;

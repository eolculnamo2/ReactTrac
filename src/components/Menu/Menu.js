import React from 'react';
import './Menu.scss';

class Menu extends React.Component {
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
                    <li>
                        Logout
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;

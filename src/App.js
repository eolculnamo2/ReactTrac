import React from 'react';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import TicketList from './components/TicketList/TicketList';

class App extends React.Component{
    constructor(){
        super()
        this.state={
            currentPage: "ticketlist"
        }
    }
    render(){
        if(this.state.currentPage == "login"){
        return( 
                <div>
                    <Menu />
                    <Login /> 
                </div>
            )
        }
        else if(this.state.currentPage == "categories"){
            return (
                    <div> 
                        <Menu />
                        <Categories />
                    </div>
                )
        }
        else if(this.state.currentPage == "ticketlist"){
            return (
                    <div> 
                        <Menu />
                        <TicketList />
                    </div>
                )
        }
    }
}

export default App;
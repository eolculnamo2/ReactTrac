import React from 'react';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Categories from './components/Categories/Categories';
import TicketList from './components/TicketList/TicketList';
import TicketInterface from './components/TicketList/TicketItem/TicketInterface/TicketInterface';

class App extends React.Component{
    constructor(){
        super()
        this.state={
            currentPage: "categories",
            currentList: "",
            currentTicket: "test",
            tickets: [
                    {
                        name: "Change h1 element",
                        assignedTo: "Rob",
                        assignedBy: "Bre",
                        priority: "Low",
                        createDate: "01/01/2018",
                        category: 'Styles',
                        dueDate: "01/01/2019",
                        description: "Make the h1 element on our homepage something different"
                    },
                    {
                        name: "Fix JavaScript Error",
                        assignedTo: "Rob",
                        assignedBy: "Bre",
                        priority: "Medium",
                        createDate: "01/01/2018",
                        category: 'Apps',
                        dueDate: "01/01/2019",
                        description: "JavaScript keeps breaking on this page!"
                    },
                    {
                        name: "Broken Modal",
                        assignedTo: "Rob",
                        assignedBy: "Bre",
                        priority: "Medium",
                        createDate: "01/01/2018",
                        category: 'Styles',
                        dueDate: "01/01/2019",
                        description: "Modal does not show when button is clicked. Please fix."
                    }
                ]
        }
        this.handleChangePage=this.handleChangePage.bind(this);
    }
    componentDidMount(){
      //Will house fetch request to determine whether or not user is logged in
    }
    handleChangePage(page,list,ticket){
      this.setState({currentPage: page,
                     currentList: list != undefined ? list : "",
                     currentTicket: ticket != undefined ? ticket : ""
                   })
    }
    render(){
        if(this.state.currentPage == "login"){
        return(
                <div>
                    <Menu
                      changePage={this.handleChangePage}
                      />
                    <Login />
                </div>
            )
        }
        else if(this.state.currentPage == "categories"){
            return (
                    <div>
                        <Menu
                          changePage={this.handleChangePage}
                         />
                        <Categories
                          changePage={this.handleChangePage}
                         />
                    </div>
                )
        }
        else if(this.state.currentPage == "ticket-list"){
          //currentList sends filter name to TicketList
            return (
                    <div>
                        <Menu
                          changePage={this.handleChangePage}
                         />
                        <TicketList
                          currentList={this.state.currentList}
                          currentTicket={this.state.currentTicket}
                          tickets={this.state.tickets}
                          changePage={this.handleChangePage}
                         />
                    </div>
                )
        }
        else if(this.state.currentPage == "ticket-interface"){
          //currentList sends filter name to TicketList
            return (
                    <div>
                        <Menu
                          changePage={this.handleChangePage}
                         />
                        <TicketInterface
                          currentList={this.state.currentList}
                          currentTicket={this.state.currentTicket}
                          tickets={this.state.tickets}
                          changePage={this.handleChangePage}
                         />
                    </div>
                )
        }
    }
}

export default App;

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
            authenticated: false,
            currentPage: "login",
            currentList: "",
            currentTicket: "",
            users: [
              {
                username: "Joe"
              },
              {
                username: "Bre"
              },
              {
                username: "Rob"
              }
            ],
            tickets: [
                    {
                        name: "Change h1 element",
                        assignedTo: "Rob",
                        assignedBy: "Bre",
                        priority: "Low",
                        createDate: "01/01/2018",
                        category: 'Styles',
                        dueDate: "01/01/2019",
                        status: "open",
                        description: "Make the h1 element on our homepage something different",
                        comments: [
                          {
                            author: "Rob",
                            timestamp:"JStimestamp",
                            status: "Open",
                            comment: "How about we change the h1 to Hello World?"
                          },
                          {
                            author: "Bre",
                            timestamp:"JStimestamp",
                            status: "Open",
                            comment: "I think Hello WORLD! would be better"
                          },
                          {
                            author: "Rob",
                            timestamp:"JStimestamp",
                            status: "In Progress",
                            comment: "Should we change the color?"
                          }
                        ]
                    },
                    {
                        name: "Fix JavaScript Error",
                        assignedTo: "Rob",
                        assignedBy: "Bre",
                        priority: "Medium",
                        createDate: "01/01/2018",
                        category: 'Apps',
                        dueDate: "01/01/2019",
                        status: "open",
                        comments: [],
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
                        status: "open",
                        comments: [],
                        description: "Modal does not show when button is clicked. Please fix."
                    }
                ]
        }
        this.handleChangePage=this.handleChangePage.bind(this);
    }
    componentDidMount(){
      fetch('/authenticate/checkLogin')
      .then((response)=>{
        return response.json();
      })
      .then((data)=>{
          this.setState({currentPage: data.name == 'authenticated' ? 'categories' : 'login',
                         authenticated: data.name == 'authenticated' ? true : false})
      })
    }
    handleChangePage(page,list,ticket,authenticate){
      this.setState({
                     authenticated: authenticate != undefined ? authenticate : this.state.authenticated,
                     currentPage: this.state.authenticated || authenticate == true ? page : 'login',
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
                    <Login
                      changePage={this.handleChangePage}
                     />
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
                          users={this.state.users}
                          changePage={this.handleChangePage}
                          tickets={this.state.tickets}
                         />
                    </div>
                )
        }
        else if(this.state.currentPage == "ticket-list"){
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

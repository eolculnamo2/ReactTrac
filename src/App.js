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
            currentUser: {},
            currentPage: "login",
            currentList: "",
            currentTicket: "",
            categories: [],
            users: [],
            filters: 'none',
            tickets: []
        }
        this.handleChangePage=this.handleChangePage.bind(this);
        this.updateTickets=this.updateTickets.bind(this);
        this.updateCategories=this.updateCategories.bind(this);
    }
    componentWillMount(){
      fetch("/authenticate/checkLogin",
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
          this.setState({currentPage: data.name == 'authenticated' ? 'categories' : 'login',
                         authenticated: data.name == 'authenticated' ? true : false,
                         currentUser: data.user})
      });

      fetch('/posts/getTickets',{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin"
        })
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        this.setState({tickets: data})
      });

      fetch('/posts/getCategories',{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin"
        })
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        this.setState({categories: data})
      });

      fetch('/posts/getUsers',{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin"
        })
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        this.setState({users: data})
      });
    }

    handleChangePage(page,list,ticket,authenticate,filter,user){
      this.setState({
                     authenticated: authenticate != undefined ? authenticate : this.state.authenticated,
                     currentPage: this.state.authenticated || authenticate == true ? page : 'login',
                     currentList: list != undefined ? list : "",
                     currentTicket: ticket != undefined ? ticket : "",
                     filters: filter != undefined ? filter : 'none',
                     currentUser: user != undefined ? user: this.state.currentUser
                   })
    }

    updateTickets(){
      fetch('/posts/getTickets',{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin"
        })
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        this.setState({tickets: data})
      });
    }

    updateCategories(){
      fetch('/posts/getCategories',{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "same-origin"
        })
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        this.setState({categories: data})
      });
    }

    render(){
        if(this.state.currentPage == "login"){
        return(
                <div>
                    <Menu
                      changePage={this.handleChangePage}
                      currentPage={this.state.currentPage}
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
                          updateTickets={this.updateTickets}
                          updateCategories={this.updateCategories}
                          categories={this.state.categories}
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
                          currentUser={this.state.currentUser.username}
                          tickets={this.state.tickets}
                          changePage={this.handleChangePage}
                          filter={this.state.filters}
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
                          updateTickets={this.updateTickets}
                          currentList={this.state.currentList}
                          currentTicket={this.state.currentTicket}
                          tickets={this.state.tickets}
                          users={this.state.users}
                          changePage={this.handleChangePage}
                         />
                    </div>
                )
        }
    }
}

export default App;

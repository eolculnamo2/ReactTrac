import React from 'react';
import TicketForm from './TicketForm/TicketForm';
import './Category.scss';

class Category extends React.Component{
    constructor(){
      super()
      this.state={
        ticketModal: false,
        counter: 0
      }
    }
    updateCounter(tkts){
      var counter = 0;
      tkts.forEach((x)=>{
        if(x.category == this.props.categoryName){
          counter++;
        }
      })
      this.setState({counter: counter})
    }
    componentDidMount(){
      this.updateCounter(this.props.tickets);
    }
    componentWillReceiveProps(x){
      //allows for inline updating
      this.updateCounter(x.tickets);
    }
    render(){
        return(
          <div>
            <div className = "category">
                <h3 className="center" onClick = {this.props.changePage}>{this.props.categoryName}</h3>
                <h3 className="center" onClick={()=>{this.setState({ticketModal: true})}}>New Ticket</h3>
                <h3 className="center" onClick = {this.props.changePage}>{this.state.counter}</h3>
            </div>
            <TicketForm
              users={this.props.users}
              hideTicketForm={()=>{this.setState({ticketModal:false})}}
              visible={this.state.ticketModal}
              categoryArray={this.props.categoryArray}
              updateTickets={this.props.updateTickets}
             />
          </div>
        )
    }
}

export default Category;

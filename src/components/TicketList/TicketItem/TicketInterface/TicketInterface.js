import React from 'react';
import './TicketInterface.scss';

class TicketInterface extends React.Component{
  constructor(){
    super()
    this.state={
      ticket: {}
    }
  }
  componentDidMount(){
    for(var i=0; i < this.props.tickets.length; i++){
      if(this.props.tickets[i].name == this.props.currentTicket){
        this.setState({ticket: this.props.tickets[i]});
        break;
      }
    }
  }
  render(){
    return(
      <div>
        <h1>
          {this.state.ticket.name}
          </h1>
          <p>
          {this.state.ticket.description}
          </p>
      </div>
    )
  }
}

export default TicketInterface;

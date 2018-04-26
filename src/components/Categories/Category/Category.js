import React from 'react';
import TicketForm from './TicketForm/TicketForm';
import './Category.scss';

class Category extends React.Component{
    constructor(){
      super()
      this.state={
        ticketModal: false
      }
    }
    render(){
        return(
          <div>
            <div className = "category">
                <h3 onClick = {this.props.changePage}>{this.props.categoryName}</h3>
                <h3 onClick={()=>{this.setState({ticketModal: true})}}>New Ticket</h3>
                <h3 onClick = {this.props.changePage}>{this.props.ticketNumber}</h3>
            </div>
            <TicketForm
              users={this.props.users}
              hideTicketForm={()=>{this.setState({ticketModal:false})}}
              visible={this.state.ticketModal}
              categoryArray={this.props.categoryArray}
             />
          </div>
        )
    }
}

export default Category;

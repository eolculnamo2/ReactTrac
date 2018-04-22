import React from 'react';
import './TicketInterface.scss';

class TicketInterface extends React.Component{
  constructor(){
    super()
    this.state={
      ticket: {}
    }
  }
  componentWillMount(){
    for(var i=0; i < this.props.tickets.length; i++){
      if(this.props.tickets[i].name == this.props.currentTicket){
        this.setState({ticket: this.props.tickets[i]},()=>{alert(JSON.stringify(this.state.ticket.comments))});
        break;
      }
    }
  }
  sideBar(){
    return(
      <div className="side-info-bar">
        <h3>
          Critical Information
        </h3>
          <p><span>Category:</span> {this.state.ticket.category}</p>
          <p><span>Priority:</span> {this.state.ticket.priority}</p>
          <p><span>Assigned To:</span> {this.state.ticket.assignedTo}</p>
          <p><span>Assigned By:</span> {this.state.ticket.assignedBy}</p>

      </div>
    )
  }
  commentsSection(){
    return(
      <div className="comments-section">
      <h2>
      Comments
      </h2>
       {this.state.ticket.comments.map((x)=>{
         return(
           <div className="comment">
             <div className="comment-details">
              <h3>
              {x.author}
              </h3>
              <h3>
              {x.status}
              </h3>
              <h3>
              {x.timestamp}
              </h3>
             </div>
             <div className="comment-text">
              <p>
                {x.comment}
              </p>
             </div>
           </div>
         )
       })}
       <select>
        <option value="Open">Open</option>
        <option value="In Progress">In Progress</option>
        <option value="Solved">Solved</option>
        <option value="Closed">Closed</option>
        <option value="Test">Test</option>
        <option value="Production">Production</option>
       </select><br/>
       <textarea className="comment-input" /><br/>
       <button>
        Submit
       </button>
      </div>
    )
  }
  render(){
    return(
      <div className="ticket-interface-main">
        <div className="ticket-essential-info">
          <div>
            <h1>
              {this.state.ticket.name}
            </h1>
            <span>
              Opened:
              {this.state.ticket.createDate}
            </span>
            <span>
              Due:
              {this.state.ticket.dueDate}
            </span>
            <p>
              {this.state.ticket.description}
            </p>
          </div>
        </div>
        <div className="flexed-info">
        {this.commentsSection()}
        {this.sideBar()}
        </div>

      </div>
    )
  }
}

export default TicketInterface;

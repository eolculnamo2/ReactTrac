import React from 'react';
import TicketItem from './TicketItem/TicketItem';
import './TicketList.scss';

class TicketList extends React.Component{

    ticketMainList(){
      var filters ={
        'none': {check: 'category', against: 'currentList'},
        'my-tickets': {check: 'assignedTo', against: 'currentUser'}
      }
      return(
        <div className="ticketlist-main-div">
          <h1>
            {this.props.currentList}
            </h1>
            {this.props.tickets.map((x)=>{
              var a = filters[this.props.filter].check
              var b = filters[this.props.filter].against

              if(x[a] == this.props[b])
                return(
                    <TicketItem
                        name={x.name}
                        assignedTo={x.assignedTo}
                        assignedBy={x.assignedBy}
                        priority={x.priority}
                        createDate={x.createDate}
                        dueDate={x.dueDate}
                        description={x.description}
                        changePage={this.props.changePage.bind(this,'ticket-interface',this.props.currentList,x.name)}
                            />
                )
            })}
        </div>
      )
    }
    render(){
        return this.ticketMainList();
    }
}

export default TicketList;

import React from 'react';
import TicketItem from './TicketItem/TicketItem';
import './TicketList.scss';

class TicketList extends React.Component{
    render(){
        return(
            <div className="ticketlist-main-div">
              <h1>
                {this.props.currentList}
                </h1>
                {this.props.tickets.map((x)=>{
                  if(x.category == this.props.currentList)
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
}

export default TicketList;

import React from 'react';
import './TicketItem.scss';

class TicketItem extends React.Component{
    render(){
        return(
            <div className="category" onClick={this.props.changePage}>
                <h3>{this.props.name}</h3>
                <h3 className="center">{this.props.assignedTo}</h3>
                <h3 className="right">{this.props.dueDate}</h3>
            </div>
        )
    }
}

export default TicketItem;

import React from 'react';
import './TicketItem.scss';

class TicketItem extends React.Component{
    render(){
        return(
            <div className="category">
                <h3>{this.props.name}</h3>
                <h3>{this.props.name}</h3>
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default TicketItem;
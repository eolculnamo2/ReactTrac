import React from 'react';
import './Category.scss';

class Category extends React.Component{
    render(){
        return(
            <div className="category">
                <h3>{this.props.title}</h3>
                <h3>{this.props.title}</h3>
                <h3>{this.props.ticketNumber}</h3>
            </div>
        )
    }
}

export default Category;
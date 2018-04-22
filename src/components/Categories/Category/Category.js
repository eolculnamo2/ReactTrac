import React from 'react';
import './Category.scss';

class Category extends React.Component{
    render(){
        return(
            <div className = "category" onClick = {this.props.changePage}>
                <h3>{this.props.categoryName}</h3>
                <h3>{this.props.categoryName}</h3>
                <h3>{this.props.ticketNumber}</h3>
            </div>
        )
    }
}

export default Category;

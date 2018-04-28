import React from 'react';
import Category from './Category/Category';
import './Categories.scss';

class Categories extends React.Component{
    constructor(){
        super()
        this.state={
            categoryArray: [
                {
                    categoryName: "Apps"
                },
                {
                    categoryName: "Styles"
                },
                {
                    categoryName: "Website"
                }
            ]
        }
    }
    componentDidMount(){
        var apiUrl = "";
        fetch(apiUrl)
        .then((response)=>{

        })
        .then((data)=>{

        })
    }
    mapArray(){
        return(
            <div className="categories-main-div">
              <h1>
                Dashboard
                </h1>
                {this.state.categoryArray.map((x,i)=>{
                    return(
                        <div>
                            <Category
                                users={this.props.users}
                                categoryName={x.categoryName}
                                tickets={this.props.tickets}
                                changePage={this.props.changePage.bind(this,'ticket-list', x.categoryName)}
                                categoryArray={this.state.categoryArray}
                                updateTickets={this.props.updateTickets}
                                />
                            </div>
                    )
                })}
                </div>
        )
    }
    render(){
        return this.mapArray();
    }
}

export default Categories;

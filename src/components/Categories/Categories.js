import React from 'react';
import Category from './Category/Category';
import './Categories.scss';

class Categories extends React.Component{
    constructor(){
        super()
        this.state={
            categoryArray: [
                {
                    categoryName: "Apps",
                    number: 38
                },
                {
                    categoryName: "Styles",
                    number: 24
                },
                {
                    categoryName: "Website",
                    number: 28
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
                {this.state.categoryArray.map((x,i)=>{
                    return(
                        <div>
                            <Category
                                users={this.props.users}
                                categoryName={x.categoryName}
                                ticketNumber={x.number}
                                changePage={this.props.changePage.bind(this,'ticket-list', x.categoryName)}
                                categoryArray={this.state.categoryArray}
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

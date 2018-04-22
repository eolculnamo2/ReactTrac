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
                                categoryName={x.categoryName}
                                ticketNumber={x.number}
                                changePage={this.props.changePage.bind(this,'ticket-list', x.categoryName)}
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

import React from 'react';
import Category from './Category/Category';
import './Categories.scss';

class Categories extends React.Component{
    constructor(){
        super()
        this.state={
            categoryArray: [
                {
                    title: "Apps",
                    number: 38
                },
                {
                    title: "Styles",
                    number: 24
                },
                {
                    title: "Website",
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
                                title={x.title}
                                ticketNumber={x.number}
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
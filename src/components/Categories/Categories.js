import React from 'react';
import Category from './Category/Category';
import './Categories.scss';

class Categories extends React.Component{
    addCategory(){
      var newCat = prompt("New Category Name: ");
      var load = {categoryName: newCat}
      if(newCat != null && newCat.length > 0){
          fetch('/posts/addCategory',{
              method: "POST",
              body: JSON.stringify(load),
              headers: { "Content-Type": "application/json" },
              credentials: "include"
            })
            .then((response)=>{
              if(response.status == 200){
                alert("Save Successful")
              }
              else{
                alert("Save Error")
              }
              return response.json();
            })
            .then((data)=>{
              this.props.updateCategories();
            })
          }
    }

    mapArray(){
        return(
            <div className="categories-main-div">
            <div className="flex-between">
              <h1>
                Dashboard
                </h1>
              <button onClick={this.addCategory.bind(this)}>
              + Category +
              </button>
              </div>
              <div className="category category--main">
                <h3 className="center">
                Ticket
                  </h3>
                <h3 className="center">
                Options
                  </h3>
                <h3 className="center">
                Quantity
                  </h3>
                </div>
                {this.props.categories.map((x,i)=>{
                    return(
                        <div>
                            <Category
                                users={this.props.users}
                                categoryName={x.name}
                                tickets={this.props.tickets}
                                changePage={this.props.changePage.bind(this,'ticket-list', x.name)}
                                categoryArray={this.props.categories}
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

import React from 'react';
import './TicketForm.scss';

//Assign to and Categories will be turned into dropdowns populated by db
/*
TO DO
STYLE
ADD PATTERN TO DATE
VALIDATIONS?
*/
class TicketForm extends React.Component{
  submitForm(){
    //Each ticket will also need a tag identification.. i.e. APP-322

    /*
    assigned by back end
      assignedBy
      createDate
    assigned by other process
      comments
    */

    //this.setSTate with a submit callback
    var submission ={
      name: this.refs.name.value,
      assignedTo: this.refs.assignedTo.value,
      priority: this.refs.priority.value,
      dueDate: this.refs.dueOn.value,
      category: this.refs.category.value,
      status: "open",
      description: this.refs.description.value
    }

    fetch('/posts/newTicket',{
        method: "POST",
        body: JSON.stringify(submission),
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin"
      })
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      this.props.updateTickets(data);
    })
  }
  render(){
    if(this.props.visible){
    return(
      <div className='ticket-form-main'>
        <h3>
          New Ticket
        </h3>
        <div>
          <label>
            Ticket Title:
          </label>
          <input ref="name"/>
        </div>
        <div>
          <label>
            Assign To
          </label>
          <select ref="assignedTo">
          {this.props.users.map((x)=>{
            return (<option value={x.username}>{x.username}</option>)
          })}
          </select>
        </div>
        <div>
          <label>
            Due On
          </label>
          <input
            ref="dueOn"
            placeholder="yyyymmdd"
            maxlength="8"/>
        </div>
        <div>
          <label>
          Category
          </label>
          <select ref="category">
            {this.props.categoryArray.map((x)=>{
              return <option value={x.categoryName}>{x.categoryName}</option>
            })}
          </select>
        </div>
        <div>
          <label>
            Description
          </label>
          <textarea ref="description"/>
        </div>
        <div>
          <label>
          Priority
          </label>
          <select ref="priority">
              <option value='very-low'>
                Very Low
              </option>
              <option value='low'>
                Low
              </option>
              <option value='medium'>
                Medium
              </option>
              <option value='high'>
                High
              </option>
              <option value='highest'>
                Highest
              </option>
              <option value='urgent'>
                Urgent
              </option>
          </select>
        </div>

        <button onClick={this.props.hideTicketForm}>
        Cancel
        </button>
        <button onClick={this.submitForm.bind(this)}>
        Submit
        </button>
      </div>
      )
    }
  else{
    return null;
    }
  }
}

export default TicketForm;

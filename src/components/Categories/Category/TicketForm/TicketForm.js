import React from 'react';
import './TicketForm.scss';

//Assign to and Categories will be turned into dropdowns populated by db

class TicketForm extends React.Component{
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
          <input/>
        </div>
        <div>
          <label>
            Assign To
          </label>
          <input/>
        </div>
        <div>
          <label>
            Due On
          </label>
          <input/>
        </div>
        <div>
          <label>
          Category
          </label>
          <input/>
        </div>
        <div>
          <label>
            Description
          </label>
          <textarea />
        </div>
        <div>
          <label>
          Priority
          </label>
          <select>
            <option>
            Very Low
            </option>
            <option>
            Low
            </option>
            <option>
            Medium
            </option>
            <option>
            High
            </option>
            <option>
            Highest
            </option>
            <option>
            Urgent
            </option>
          </select>
        </div>

        <button onClick={this.props.hideTicketForm}>
        Cancel
        </button>
        <button>
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

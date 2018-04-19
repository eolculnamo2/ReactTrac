import React from 'react';
import TicketItem from './TicketItem/TicketItem';
import './TicketList.scss';

class TicketList extends React.Component{
    constructor(){
        super()
        this.state={
            tickets: [
                {
                    name: "Change h1 element",
                    assignedTo: "Rob",
                    assignedBy: "Bre",
                    priority: "Low",
                    createDate: "01/01/2018",
                    dueDate: "01/01/2019"
                },
                {
                    name: "Fix JavaScript Error",
                    assignedTo: "Rob",
                    assignedBy: "Bre",
                    priority: "Medium",
                    createDate: "01/01/2018",
                    dueDate: "01/01/2019"
                },
                {
                    name: "Broken Modal",
                    assignedTo: "Rob",
                    assignedBy: "Bre",
                    priority: "Medium",
                    createDate: "01/01/2018",
                    dueDate: "01/01/2019"
                }
            ]
        }
    }
    componentDidMount(){
     /*    fetch("#")
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{

        }) */
    }
    render(){
        return(
            <div className="ticketlist-main-div">
                {this.state.tickets.map((x)=>{
                    return(
                        <TicketItem
                            name={x.name}
                            assignedTo={x.assignedTo}
                            assignedBy={x.assignedBy}
                            priority={x.priority}
                            createDate={x.createDate}
                            dueDate={x.dueDate}
                                />
                    )
                })}
            </div>
        )
    }
}

export default TicketList;
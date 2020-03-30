import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import Ticket from '../../Tickets/Ticket'
import User from '../../Users/User'
import Contract from '../../Contract/Contract'


class TicketPage extends Component {

    
    render(){
        return(
            <div className = 'ticketPage'>
                <Form>
                    <Ticket 
                        toggleValue = {this.props.toggleValue}
                        customValue = {this.props.inputsValue}
                        closeTicket = {this.props.closeTicket}
                        handlerSubmit = {this.props.handlerSubmit}
                    />
                    <div className = 'app-body'>
                        <User customValue = {this.props.inputsValue}/>
                        <Contract contract = {this.props.contract} customValue = {this.props.inputsValue}/>
                    </div>
                </Form>
            </div>
        )
    }
}
export default TicketPage
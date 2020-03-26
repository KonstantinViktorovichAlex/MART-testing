import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import Ticket from '../../Tickets/Ticket'
import User from '../../Users/User'
import Contract from '../../Contract/Contract'


class TicketPage extends Component {



    handlerSubmit = (event) => {
        event.preventDefault()
    }

    


    render(){
        const {toggleValue, contract, arrInfo} = this.props
        return(
            <div className = 'ticketPage'>
                <Form onSubmit = {this.handlerSubmit}>
                    <Ticket 
                        toggleValue = {toggleValue}
                        customValue = {this.props.customValue}
                        closeTicket = {this.props.closeTicket}
                    />
                    <div className = 'app-body'>
                        <User arrInfo = {arrInfo}/>
                        <Contract contract = {contract}/>
                    </div>
                </Form>
            </div>
        )
    }
}
export default TicketPage
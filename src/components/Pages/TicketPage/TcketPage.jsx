import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import Ticket from '../../Tickets/Ticket'
import User from '../../Users/User'
import Contract from '../../Contract/Contract'


class TicketPage extends Component {

    state = {
        id: 777,
        contract: 'IPoE',
        source: 'Обращение',
        status:'Новый',
        responsible: 'работник1 ',
        type:'IPoE',
        priority:'средний',
        date:'',
        problem:'',
        users:'',
        telefon:'',
        email:'',
        licNumber:'',
        commentsUser:'',
        adress:'',
        contractNumber:'',
        rate:'',
        commentsContract:'',
        startContract:'',
        endContract:''
    }

    toggleValueType = (event) => {
        this.setState({
            contract: event.target.value,
            type:event.target.value
        })
        
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        console.log('submited')
        this.setState({
            id:Math.floor(Math.random() * 1000)
        })
        const newdata = this.state
        console.log(newdata)
        
    }

    inputsValue = (event) => {
        const {id, value} = event.target
        this.setState({[id]: value})
        
    }


    render(){
        
        return(
            <div className = 'ticketPage'>
                <Form onSubmit = {() => {this.props.updateState('noooooooo')}}>
                    <Ticket 
                        toggleValue = {this.toggleValueType}
                        customValue = {this.inputsValue}
                        closeTicket = {this.props.closeTicket}
                        
                    />
                    <div className = 'app-body'>
                        <User customValue = {this.inputsValue}/>
                        <Contract contract = {this.state.contract} customValue = {this.inputsValue}/>
                    </div>
                </Form>
            </div>
        )
    }
}
export default TicketPage
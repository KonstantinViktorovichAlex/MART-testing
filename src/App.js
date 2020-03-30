import React, {Component} from 'react';
import MainPage from './components/Pages/MainPage/MainPage'
import TicketPage from './components/Pages/TicketPage/TcketPage'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const arr = []
class App extends Component {

    state = {
        showFormTickets: false,
        id: 777,
        contract: 'PPPoE',
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
        endContract:'',
        data: []
    }


    addHandleTicket = () => {
        this.setState({
            showFormTickets: true
        })
    }
    closeHandleTicket = () => {
        this.setState({
            showFormTickets: false
        })
    }

    toggleValueType = (event) => {
        this.setState({
            contract: event.target.value,
            type:event.target.value
        })
    }

    handlerSubmit = (event) => {
        event.preventDefault()
        const newdata = this.state
        arr.push(newdata)

        this.setState({
            id:Math.floor(Math.random() * 1000),
            data: arr
        })
    }

    inputsValue = (event) => {
        const {id, value} = event.target
        this.setState({[id]: value})
        
    }
    
    render(){
        return(
            <div className ='App'>
                {this.state.showFormTickets === true ? 
                    <TicketPage 
                        contract = {this.state.contract}
                        closeTicket = {this.closeHandleTicket}
                        handlerSubmit = {this.handlerSubmit}
                        inputsValue = {this.inputsValue}
                        toggleValue = {this.toggleValueType}
                    /> : 
                    <MainPage
                        handleClick = {this.addHandleTicket}
                        data = {this.state.data}
                    />}
            </div>
    )
  }
}
export default App;

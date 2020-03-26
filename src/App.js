import React, {Component} from 'react';
import MainPage from './components/Pages/MainPage/MainPage'
import TicketPage from './components/Pages/TicketPage/TcketPage'


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const arrTikets = []

const userInfo = [
    {
        name: 'ИВАНОВ ИВАН ИВАНОВИЧ',
        telefon: '+79111111111',
        mail: 'example@example.ru',
        numberLic:'12.54.000004',
        comments:'plohoy chelovek'
    }
]

class App extends Component {

    state = {
        showFormTickets: false,
        contract: 'IPoE'
    }

    toggleValueType = (event) => {
        this.setState({
            contract: event.target.value
        })
        
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

    inputsValue = (event) => {

        const obj = {
            idInput : event.target.id,
            valueInput: event.target.value
        }
        
        arrTikets.push(obj)
        console.log(arrTikets)
    }

    render(){

        return(
            <div className ='App'>
                
                {this.state.showFormTickets === true ? 
                    <TicketPage 
                        toggleValue = {this.toggleValueType} 
                        contract = {this.state.contract}
                        customValue = {this.inputsValue}
                        closeTicket = {this.closeHandleTicket}
                        arrInfo = {userInfo}
                    /> : 
                    <MainPage
                        handleClick = {this.addHandleTicket}
                    />}
            </div>
    )
  }
}
export default App;

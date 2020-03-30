import React, {Component} from 'react';
import MainPage from './components/Pages/MainPage/MainPage'
import TicketPage from './components/Pages/TicketPage/TcketPage'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ticketsData = [
    {   id: 1,
        ticketInfo: {
            source: 'Звонок',
            status: 'Новый',
            responsible: 'Работник 1',
            typeConnect: 'IPoE',
            priority:'Средний',
            date:'21.06.2020',
            problem:'disconnect'
        },
        infoUser: {
            name: 'ИВАНОВ ИВАН ИВАНОВИЧ',
            telefon: '+79111111111',
            mail: 'example@example.ru',
            numberLic:'12.54.000004',
            comments:'plohoy chelovek'
        },
        contractConnect: {
            adress: 'Маршала Жукова 5',
            numberContract: 2513.26,
            tarif: 300,
            comments:'new connect',
            start:'25.04.2020',
            end:'25.05.2020'
        },
        typsConnects:{
            vlan: '195***',
            port: 8080,
            mac: '20b.7A.85B.80:25193',
            mail:'xxx.@mail.ru',
            postponement: 'отсрочка'
        },
    
    },
    {   id: 2,
        ticketInfo: {
            source: 'Письмо',
            status: 'Новый',
            responsible: 'Работник 2',
            typeConnect: 'IP',
            priority:'Высокий',
            date:'21.06.2020',
            problem:'bad connection'
        },
        infoUser: {
            name: 'ОЛЕГОВ ОЛЕГ ОЛЕГОВИЧ',
            telefon: '+79111111111',
            mail: 'example@example.ru',
            numberLic:'12.54.000004',
            comments:'chelovek'
        },
        contractConnect: {
            adress: 'Улица Пушкина',
            numberContract: 2513.26,
            tarif: 300,
            comments:'new connect',
            start:'25.04.2020',
            end:'25.05.2020'
        },
        typsConnects:{
            vlan: '195***',
            port: 8080,
            mac: '20b.7A.85B.80:25193',
            mail:'xxx.@mail.ru',
            postponement: 'отсрочка'
        },
    
    },
]

class App extends Component {

    state = {
        showFormTickets: false,
        da:'dddaaaaaa'
    }

    // toggleValueType = (event) => {
    //     this.setState({
    //         contract: event.target.value
    //     })
        
    // }

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

    updateState = (dd) => {
        this.setState({da:dd})
    }
    
    componentDidUpdate(){
        console.log(this.state.da)
    }

    render(){

        return(
            <div className ='App'>
                
                {this.state.showFormTickets === true ? 
                    <TicketPage 
                        contract = {this.state.contract}
                        closeTicket = {this.closeHandleTicket}
                        updateState = {this.updateState}
                    /> : 
                    <MainPage
                        handleClick = {this.addHandleTicket}
                        data = {ticketsData}
                    />}
            </div>
    )
  }
}
export default App;

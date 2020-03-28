import React,{Component} from 'react'
import {Card, Button} from 'react-bootstrap'
import FullInfo from './FullInfo/FullInfo'
import './cardTicket.css'

class CardTicket extends Component {

    state = {
        showFullInfo: false,
    }

    toggleShowInfo = () => {
        this.setState({
            showFullInfo: true
        })
        
    }

    toggleCloseInfo = () => {
        this.setState({
            showFullInfo: false
        })
    }

    render(){

        const {data} = this.props
        
            return(
                <>
                {this.state.showFullInfo ? 
                    <div><FullInfo data ={data} hideInfo = {this.toggleCloseInfo}/></div> : 
                        <div className = 'cards'>
                            {data.map((item, index) => {
                                return(
                                    <Card style={{ width: '18rem'  }} 
                                        className = 'cardBody' 
                                        key = {index}
                                        border = 'primary'
                                    >
                                        <Card.Body>
                                            <Card.Title>Тикет №{item.id}</Card.Title> 
                                            <hr></hr>
                                            <Card.Title>Информация о тикете</Card.Title>
                                            <Card.Subtitle className="mb-2">Источник: {item.ticketInfo.source}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2">Статус: {item.ticketInfo.status}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2">Ответственный: {item.ticketInfo.responsible}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2">Тип подключения: {item.ticketInfo.typeConnect}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2">Приоритет: {item.ticketInfo.priority}</Card.Subtitle>
                                            <Card.Subtitle className="mb-2">Крайний срок: {item.ticketInfo.date}</Card.Subtitle>
                                            <hr></hr>
                                            <Card.Text>
                                                Описание проблемы: {item.ticketInfo.problem}   
                                            </Card.Text>
                                            <hr></hr>
                                                <Button variant = 'primary'
                                                        onClick = {this.toggleShowInfo}
                                                        className = 'open'
                                                >OPEN</Button>
                                            <Button variant = 'danger'>DELETE</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                    </div>}
                </>          
        )
    }
}
export default CardTicket

           

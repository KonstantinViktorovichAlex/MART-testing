import React from 'react'
import {Card , Button} from 'react-bootstrap'
import './cardTicket.css'

const CardTicket = () => {
    return(
        <Card style={{ width: '18rem'  }} className = 'cardBody' >
            <Card.Body>
                <Card.Title>Тикет №006247</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Приоритет: средний</Card.Subtitle>
                <Card.Text>
                    Описание проблемы
                </Card.Text>
                <Button variant = 'primary' className = 'open'>OPEN</Button>
                <Button variant = 'danger'>DELETE</Button>
            </Card.Body>
        </Card>
    )
}
export default CardTicket
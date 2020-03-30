import React from 'react'
import {Card, Button} from 'react-bootstrap'

import './fullInfo.css'

const FullInfo = (props) => {
    const {data, hideInfo} = props
    return(
        <div className = 'body-info'>
            {data.map((item, index)=>{
                return(
                    <Card key = {index}
                style={{ width: '20rem'  }} 
                className = 'cardBody full' 
                border = 'primary'
            >
                <Card.Body>
                    <Card.Title>Информация об абоненте</Card.Title>
                        <Card.Subtitle className="mb-2">ФИО: {item.name}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Телефон: {item.telefon}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Почта: {item.mail}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Номер лицевого счета: {item.numberLic}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Комментарий: {item.comments}</Card.Subtitle>
                        <hr></hr>
                        <Card.Title>Информация о подключении</Card.Title>
                        <Card.Subtitle className="mb-2">Адрес: {item.adress}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Номер договора: {item.numberContract}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Тариф: {item.tarif}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Комментарий: {item.comments}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Начало приостановки: {item.start}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Конец приостановки: {item.end}</Card.Subtitle>
                        <hr></hr>
                        <Card.Subtitle className="mb-2">vlan: {item.vlan}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">port: {item.port}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">mac: {item.mac}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">email: {item.mail}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">отсрочка: {item.postponement}</Card.Subtitle>
                        <Button variant = 'success' onClick = {hideInfo} className = 'close-info'>CLOSE</Button>
                    </Card.Body>
            </Card>
                )
            })}
        </div>
    )
}
export default FullInfo
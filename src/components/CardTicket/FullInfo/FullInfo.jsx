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
                        <Card.Subtitle className="mb-2">ФИО: {item.infoUser.name}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Телефон: {item.infoUser.telefon}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Почта: {item.infoUser.mail}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Номер лицевого счета: {item.infoUser.numberLic}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Комментарий: {item.infoUser.comments}</Card.Subtitle>
                        <hr></hr>
                        <Card.Title>Информация о подключении</Card.Title>
                        <Card.Subtitle className="mb-2">Адрес: {item.contractConnect.adress}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Номер договора: {item.contractConnect.numberContract}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Тариф: {item.contractConnect.tarif}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Комментарий: {item.contractConnect.comments}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Начало приостановки: {item.contractConnect.start}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">Конец приостановки: {item.contractConnect.end}</Card.Subtitle>
                        <hr></hr>
                        <Card.Subtitle className="mb-2">vlan: {item.typsConnects.vlan}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">port: {item.typsConnects.port}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">mac: {item.typsConnects.mac}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">email: {item.typsConnects.mail}</Card.Subtitle>
                        <Card.Subtitle className="mb-2">отсрочка: {item.typsConnects.postponement}</Card.Subtitle>
                        <Button variant = 'success' onClick = {hideInfo} className = 'close-info'>CLOSE</Button>
                    </Card.Body>
            </Card>
                )
            })}
        </div>
    )
}
export default FullInfo
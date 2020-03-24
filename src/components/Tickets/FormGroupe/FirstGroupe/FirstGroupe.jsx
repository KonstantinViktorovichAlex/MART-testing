import React from 'react'
import {Form} from 'react-bootstrap'

import './firstGroupe.css'

const FirstGroupe = () => {
    return(
        <div className = 'first-items'>
            <Form.Group controlId="source">
                <Form.Label>Источник</Form.Label>
                    <Form.Control as="select">
                        <option>Звонок</option>
                        <option>Обращение</option>
                        <option>Письмо</option>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId="status">
                <Form.Label>Статус</Form.Label>
                    <Form.Control as="select">
                        <option>Новый</option>
                        <option>Старый</option>
                        <option>Выполненный</option>
                    </Form.Control>
            </Form.Group>
            <Form.Group controlId="responsible">
                <Form.Label>Ответственный</Form.Label>
                        <Form.Control as="select">
                            <option>вар1</option>
                            <option>вар2</option>
                            <option>вар3</option>
                        </Form.Control>
            </Form.Group>
        </div> 
    )
}
export default FirstGroupe
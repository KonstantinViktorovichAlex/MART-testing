import React, {Component} from 'react'
import {Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEdit } from '@fortawesome/free-solid-svg-icons'
import {FormGroup, Label, Input } from 'reactstrap';
import './ticket.css'

import CustomInput from '../../components/input/CustomInput'
export default class Ticket extends Component {
    render(){
        return(
            <div className = 'ticket'>
                <Form>
                    <div className = 'header'>
                        <div className = 'header-info'>
                            <FontAwesomeIcon icon = {faBookmark}/>
                            <p className = 'ticket-text'>Тикет №006247</p>
                        </div>
                        <div className = 'buttons-groupe'>
                            <Button variant = 'primary' className ='next'><FontAwesomeIcon icon = {faEdit}/>Следущее действие</Button>
                            <Button variant = 'success' className = 'save'>Сохранить</Button>
                        </div>
                    </div>
                        <div className = 'first-groupe'>
                            <CustomInput 
                                label = 'Источник' 
                                controlId = 'source' 
                                control = 'select' 
                                options = {['Звонок', 'Обращение', 'Письмо']}
                                width = {300}
                                classes = {'myClass'}
                            />
                            <CustomInput 
                                label = 'Статус' 
                                controlId = 'status' 
                                control = 'select' 
                                options = {['Новый', 'Старый', 'Неизвестно']}
                                width = {300}
                                classes = {'myClass'}
                            />
                            <CustomInput 
                                label = 'Ответсвенный' 
                                controlId = 'responsible' 
                                control = 'select' 
                                options = {['Вар1', 'Вар2', 'Вар3']}
                                width = {300}
                                classes = {'myClass'}
                            />
                        </div>
                        <div className = 'second-groupe'>
                            <CustomInput 
                                label = 'Тип' 
                                controlId = 'type' 
                                control = 'select' 
                                options = {['IPoE', 'PPPoE', 'IP адреса']}
                                width = {300}
                                classes = {'myClass'}
                            />
                            <CustomInput 
                                label = 'Приоритет' 
                                controlId = 'priority' 
                                control = 'select' 
                                options = {['Средний', 'Высокий','Стандарт']}
                                width = {300}
                                classes = {'myClass'}
                            />
                            <FormGroup>
                                <Label for="Date">Крайний срок</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="Date"
                                />
                            </FormGroup>
                        </div>
                        <div className = 'text'>
                            <CustomInput 
                                label = 'Проблема' 
                                controlId = 'problem' 
                                control = 'textarea' 
                                classes = {'textproblem'}
                            />
                        </div>
                </Form>
                
            </div>
        )
    }
}
import React, {Component} from 'react'
import {Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEdit } from '@fortawesome/free-solid-svg-icons'
import {FormGroup, Label, Input } from 'reactstrap';
import CustomInput from '../../components/input/CustomInput'

import './ticket.css'

export default class Ticket extends Component {


    render(){
        return(
            <div className = 'ticket'>
                    <div className = 'header'>
                        <div className = 'header-info'>
                            <FontAwesomeIcon icon = {faBookmark}/>
                            <p className = 'ticket-text'>Тикет №006247</p>
                        </div>
                        <div className = 'buttons-groupe'>
                            <Button variant = 'primary' className ='next'><FontAwesomeIcon icon = {faEdit}/>Следущее действие</Button>
                            <Button variant = 'success' className = 'save' type = 'submit' onClick = {this.props.handlerSubmit} >Сохранить</Button>
                            <Button variant = 'danger' className = 'closeButton' onClick = {this.props.closeTicket}>Закрыть</Button>
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
                                change = {this.props.customValue}
                            />
                            <CustomInput 
                                label = 'Статус' 
                                controlId = 'status' 
                                control = 'select' 
                                options = {['Новый', 'Старый', 'Неизвестно']}
                                width = {300}
                                classes = {'myClass'}
                                change = {this.props.customValue}
                            />
                            <CustomInput 
                                label = 'Ответсвенный' 
                                controlId = 'responsible' 
                                control = 'select' 
                                options = {['работник 1', 'работник 2', 'работник 3']}
                                width = {300}
                                classes = {'myClass'}
                                change = {this.props.customValue}
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
                                change = {this.props.toggleValue}
                            />
                            <CustomInput 
                                label = 'Приоритет' 
                                controlId = 'priority' 
                                control = 'select' 
                                options = {['Средний', 'Высокий','Стандарт']}
                                width = {300}
                                classes = {'myClass'}
                                change = {this.props.customValue}
                            />
                            <FormGroup>
                                <Label for="Date">Крайний срок</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="date"
                                    onChange = {this.props.customValue}
                                />
                            </FormGroup>
                        </div>
                        <div className = 'text'>
                            <CustomInput 
                                label = 'Проблема' 
                                controlId = 'problem' 
                                control = 'textarea' 
                                classes = {'textproblem'}
                                change = {this.props.customValue}
                            />
                        </div>
            </div>
        )
    }
}
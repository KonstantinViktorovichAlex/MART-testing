import React, {Component} from 'react'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faEdit } from '@fortawesome/free-solid-svg-icons'

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
                        <Button color = 'primary' className ='next'><FontAwesomeIcon icon = {faEdit}/>Следущее действие</Button>
                        <Button color = 'success' className = 'save'>Сохранить</Button>
                    </div>
                </div>
                <div className = 'body-ticket'>
                    <div className = 'form-groupe'> 
                        <Form className = 'body-form'>
                            <FormGroup>
                                <Label for="source">Источник</Label>
                                <Input type="select" name="select" id="source">
                                    <option>Звонок</option>
                                    <option>Обращение</option>
                                    <option>Письмо</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="typeConnect">Тип</Label>
                                    <Input type="select" name="select" id="typeConnect" onChange = {this.props.toggleValue}>
                                        <option>IPoE</option>
                                        <option>PPPoE</option>
                                        <option>IP</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="status">Статус</Label>
                                    <Input type="select" name="select" id="status">
                                        <option>Новый</option>
                                        <option>Старый</option>
                                        <option>Древний</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="priority">Приоитет</Label>
                                    <Input type="select" name="select" id="priority">
                                        <option>Важный</option>
                                        <option>Средний</option>
                                        <option>вообще делать не надо</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="responsible">Ответственный</Label>
                                    <Input type="select" name="select" id="responsible">
                                        <option>чел с района</option>
                                        <option>Работник кухни</option>
                                        <option>неизвестно</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="deadline">Крайний срок</Label>
                                <Input
                                    type="date"
                                    name="date"
                                    id="deadline"
                                />
                            </FormGroup>
                        </Form>
                        <Form className = 'problem'>
                            <FormGroup className = 'last-elem'>
                                <Label for="propblem">Проблема</Label>
                                <Input type="textarea" name="text" id="problem"/>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
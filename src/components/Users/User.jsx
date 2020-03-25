import React from 'react'
import {Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import CustomInput from '../input/CustomInput'


import './user.css'

const User = () => {
    return(
        <div className = 'user'>
            <div className = 'user-header'>
                    <FontAwesomeIcon icon = {faUserAlt} color = 'white'/>
                    <p>Информация об обоненте</p>
                </div>
            <Form>
                <div className = 'user-body'>   
                    <CustomInput
                        label = 'ФИО' 
                        controlId = 'Users' 
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                    />
                    <CustomInput
                        label = 'Телефон' 
                        controlId = 'telefon' 
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                    />
                    <CustomInput
                        label = 'Почта' 
                        controlId = 'email' 
                        control = 'email' 
                        width = {300}
                        classes = {'UserClass'}
                    />
                    <CustomInput
                        label = 'Номер лицевого счета' 
                        controlId = 'lic-number' 
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                    />
                    <CustomInput
                        label = 'Комментарий' 
                        controlId = 'comments' 
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                    />
                </div>
            </Form>
        </div>
    )
}
export default User
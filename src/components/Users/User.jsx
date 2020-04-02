import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import CustomInput from '../input/CustomInput'

import './user.css'

const User = (props) => {
    return(
        <div className = 'user'>
            <div className = 'user-header'>
                    <FontAwesomeIcon icon = {faUserAlt} color = 'white'/>
                    <p>Информация об обоненте</p>
                </div>
                <div className = 'user-body'>   
                    <CustomInput
                        label = 'ФИО' 
                        controlId = 'users'
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                        change = {props.customValue}
                    />
                    <CustomInput
                        label = 'Телефон' 
                        controlId = 'telefon' 
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                        change = {props.customValue}
                    />
                    <CustomInput
                        label = 'Почта' 
                        controlId = 'email' 
                        control = 'email' 
                        width = {300}
                        classes = {'UserClass'}
                        change = {props.customValue}
                    />
                    <CustomInput
                        label = 'Номер лицевого счета' 
                        controlId = 'licNumber' 
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                        change = {props.customValue}
                    />
                    <CustomInput
                        label = 'Комментарий' 
                        controlId = 'commentsUser' 
                        control = 'text' 
                        width = {300}
                        classes = {'UserClass'}
                        change = {props.customValue}
                    />
                </div>
        </div>
    )
}
export default User
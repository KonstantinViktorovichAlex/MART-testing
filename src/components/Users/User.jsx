import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'


import './user.css'

const User = () => {
    return(
        <div className = 'user'>
            <div className = 'user-header'>
                <FontAwesomeIcon icon = {faUserAlt} color = 'white'/>
                <p>Информация об обоненте</p>
            </div>
            <div className = 'user-body'>   
                <p>ФИО</p>
                <input type="text"/>
                <p >Телефон</p>
                <input type="text"/>
                <p>Почта</p>
                <input type="email"/>
                <p>Номер лицевого счета</p>
                <input type="text" name="text" id="AccountNumber"/>
                <p>Комментарий</p>
                <textarea></textarea>
            </div>
        </div>
    )
}
export default User
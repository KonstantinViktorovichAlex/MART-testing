import React from 'react'
import {Button} from 'reactstrap'
import './contract.css'

import ContractConnectIP from './ContractConnect/IP/ContractConnectIP'
import ContractConnectIPoE from './ContractConnect/IPoE/ContractConnectIPoE'
import ContractConnectPPPoE from './ContractConnect/PPPoE/ContractConnectPPPoE'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'

const Contract = (props) => {
    console.log(props)

    let connect = null

    if(props.contract === 'IP'){
        connect = <ContractConnectIP/>
    }else if(props.contract === 'IPoE'){
        connect = <ContractConnectIPoE/>
    }else if(props.contract === 'PPPoE'){
        connect = <ContractConnectPPPoE/>
    }

    return(
        <div className = 'contract'>
            <div className = 'contract-header'>
                <div className = 'icon'>
                <FontAwesomeIcon icon = {faCheckCircle}/>
                <p>{props.contract}</p>
                </div>
                
                <div className = 'buttons-groupe'>
                        <Button color = 'warning' className ='next'><FontAwesomeIcon icon = {faEdit}/> Экспорт в биллинг</Button>
                        <Button color = 'primary' className = 'save'><FontAwesomeIcon icon = {faSearch}/> Поиск договора</Button>
                    </div>
            </div>
            <div className = 'contract-body'>
                <div className = 'adress'>
                    <p>Адрес</p>
                    <input type = 'text'/>
                </div>
                <div className = 'contract-number'>
                    <p>Номер договора</p>
                    <input type = 'text'/>
                    <p>Тариф</p>
                    <input type = 'text'/>
                </div>
                <div className = 'comments'>
                    <p>Комментарий</p>
                    <input type = 'text'/>
                </div>
                <div className = 'start-end'>
                    <p>Начало приостановки</p>
                    <input type = 'text'/>
                    <p>Конец приостановки</p>
                    <input type = 'text'/>
                </div>
            </div>
            <hr/>
            {connect}
        </div>  
    )
}

export default Contract
import React from 'react'
import {Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import CustomInput from '../input/CustomInput'
import ContractConnectIP from './ContractConnect/IP/ContractConnectIP'
import ContractConnectIPoE from './ContractConnect/IPoE/ContractConnectIPoE'
import ContractConnectPPPoE from './ContractConnect/PPPoE/ContractConnectPPPoE'

import './contract.css'

const Contract = (props) => {

    let connect = null

    if(props.contract === 'IP адреса'){
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
                        <FontAwesomeIcon icon = {faCheckCircle} className = 'iconImage'/>
                        <p>{props.contract}</p>
                    </div>
                    <div className = 'buttons-groupe'>
                        <Button variant = 'warning' className ='next'><FontAwesomeIcon icon = {faEdit}/> Экспорт в биллинг</Button>
                        <Button variant = 'primary' className = 'save'><FontAwesomeIcon icon = {faSearch}/> Поиск договора</Button>
                    </div>
                </div>
                <div className = 'contract-body'>
                    <div className = 'adress'>
                        <CustomInput
                            label = 'Адрес' 
                            controlId = 'adress' 
                            control = 'text' 
                            classes = {'adresInput'}
                            change = {props.customValue}
                        />
                    </div>
                    <div className = 'contract-number'>
                        <CustomInput
                            label = 'Номер договора' 
                            controlId = 'contractNumber' 
                            control = 'text' 
                            classes = {'contractInput'}
                            width = {600}
                            change = {props.customValue}
                        />
                        <CustomInput
                            label = 'Тариф' 
                            controlId = 'rate' 
                            control = 'text' 
                            classes = {'rateInput'}
                            width = {600}
                            change = {props.customValue}
                        />
                    </div>
                    <div className = 'comments'>
                        <CustomInput
                            label = 'Комментарий' 
                            controlId = 'commentsContract' 
                            control = 'text' 
                            classes = {'commentsInput'}
                            change = {props.customValue}
                        />
                    </div>
                    <div className = 'start-end'>
                        <CustomInput
                            label = 'Начало приостаноки' 
                            controlId = 'startContract' 
                            control = 'text' 
                            classes = {'startContractInput'}
                            width = {600}
                            change = {props.customValue}
                        />
                        <CustomInput
                            label = 'Конец приостаноки' 
                            controlId = 'endContract' 
                            control = 'text' 
                            classes = {'endContractInput'}
                            width = {600}
                            change = {props.customValue}
                        />
                    </div>
                </div>
                <hr/>
                {connect}
        </div>  
    )
}

export default Contract
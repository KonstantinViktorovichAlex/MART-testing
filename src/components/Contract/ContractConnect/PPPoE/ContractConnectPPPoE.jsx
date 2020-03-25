import React from 'react'
import './ContractConnectPPPoE.css'
import {Form} from 'react-bootstrap'

import CustomInput from '../../../input/CustomInput'

const ContractConnectPPPoE = () => {
    return(
        <div className = 'contractPPPoE'>
            <Form className = 'contractPPPoEForm'>
                <div className = 'login-body'>
                    <div className = 'login'>
                        <CustomInput
                            label = 'Логин' 
                            controlId = 'logun' 
                            control = 'text' 
                            classes = {'loginInput'}
                            width = {600}
                        />
                    </div>
                    <div className = 'login-vlan'>
                        <CustomInput
                            label = 'vlan' 
                            controlId = 'vlan' 
                            control = 'text' 
                            classes = {'vlanInput'}
                            width = {600}
                        />  
                    </div>
                </div>
                <div className = 'mail-body'>
                    <div className = 'mail'>
                        <CustomInput
                            label = 'Email' 
                            controlId = 'email' 
                            control = 'email' 
                            classes = {'emailInput'}
                            width = {600}
                        />  
                    </div>
                    <div className = 'login-time'>
                        <CustomInput
                            label = 'Отсрочка' 
                            controlId = 'login-time' 
                            control = 'text' 
                            classes = {'loginTimeInput'}
                            width = {600}
                        />  
                    </div>
                </div>
            </Form>
        </div>
    )
}
export default ContractConnectPPPoE



                
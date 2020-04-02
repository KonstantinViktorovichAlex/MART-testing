import React from 'react'
import CustomInput from '../../../input/CustomInput'

import './contractConnectIPoE.css'

const ContractConnectIPoE = () => {
    return(
        <div className = 'contractIPoE'>
                <div className = 'vlan-body'>
                    <div className = 'vlan'>
                        <CustomInput
                            label = 'vlan' 
                            controlId = 'vlan' 
                            control = 'text' 
                            classes = {'vlanInput'}
                            width = {600}
                        />  
                    </div>
                    <div className = 'port'>
                        <CustomInput
                            label = 'port' 
                            controlId = 'port' 
                            control = 'text' 
                            classes = {'portInput'}
                            width = {600}
                        />  
                    </div> 
                </div>
                <div className = 'mac-body'>
                    <div className = 'mac'>
                        <CustomInput
                            label = 'mac' 
                            controlId = 'mac' 
                            control = 'text' 
                            classes = {'macInput'}
                            width = {300}
                        />  
                    </div>
                    <div className = 'email'>
                        <CustomInput
                            label = 'email' 
                            controlId = 'email' 
                            control = 'email' 
                            classes = {'emailInput'}
                            width = {300}
                        />  
                    </div>
                    <div className = 'time'>
                        <CustomInput
                            label = 'Отсрочка' 
                            controlId = 'timer' 
                            control = 'text' 
                            classes = {'timerInput'}
                            width = {300}
                        />  
                    </div>
                </div>
        </div>
    )
}
export default ContractConnectIPoE 
                        
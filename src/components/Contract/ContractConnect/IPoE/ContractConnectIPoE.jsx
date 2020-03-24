import React from 'react'

import './contractConnectIPoE.css'

const ContractConnectIPoE = () => {
    return(
        <div className = 'contractIPoE'>
            <div className = 'vlan-body'>
                <div className = 'vlan'>
                    <p>vlan</p>
                    <input type="text"/>
                </div>
                <div className = 'port'>
                    <p>порт</p>
                    <input type = 'text'/>
                </div>
                
            </div>
            <div className = 'mac-body'>
                <div className = 'mac'>
                    <p>mac адрес</p>
                    <input type="text"/>
                </div>
                <div className = 'email'>
                    <p>email</p>
                    <input type = 'email'/>
                </div>
                <div className = 'time'>
                    <p>отсрочка</p>
                    <input type = 'text'/>
                </div>
            </div>
        </div>
    )
}
export default ContractConnectIPoE 

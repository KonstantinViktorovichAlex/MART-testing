import React from 'react'
import './ContractConnectPPPoE.css'

const ContractConnectPPPoE = () => {
    return(
        <div className = 'contractPPPoE'>
            <div className = 'login-body'>
                <div className = 'login'>
                    <p>Логин</p>
                    <input type="text"/>
                </div>
                <div className = 'login-vlan'>
                    <p>vlan</p>
                    <input type="text"/>
                </div>
            </div>
            <div className = 'mail-body'>
                <div className = 'mail'>
                    <p>email</p>
                    <input type="text"/>
                </div>
                <div className = 'login-time'>
                    <p>Отсрочка</p>
                    <input type="text"/>
                </div>
            </div>
        </div>
    )
}
export default ContractConnectPPPoE



                
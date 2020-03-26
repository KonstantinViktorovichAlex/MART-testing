import React from 'react'
import {Button} from 'react-bootstrap'

import './aSide.css'

const ASide = (props) => {
    return (
        <div className = 'ASide'>
            <Button variant = 'success' onClick = {props.handleClick}>Добавить тикет</Button>
        </div>
    )
}
export default ASide
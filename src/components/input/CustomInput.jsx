import React from 'react'
import {Form} from 'react-bootstrap'


const CustomInput = (props) => {
    const label = props.label
    const controlId = props.controlId
    const control = props.control
    const options = props.options

    if(!options){
        return(
            <Form.Group controlId = {controlId} >
                <Form.Label>{label}</Form.Label>
                <Form.Control as = {control}></Form.Control>
            </Form.Group>
        )
    }else{
        let option = options.map((item, index) => {
            return(
                    <option key = {index}>{item}</option>
            )
        })
    
        return(
            <Form.Group controlId = {controlId} >
                    <Form.Label>{label}</Form.Label>
                    {control==='select' ? <Form.Control as = {control}>{option}</Form.Control> : <Form.Control as = {control}></Form.Control>}
            </Form.Group>
        )
    }

    
}

export default CustomInput

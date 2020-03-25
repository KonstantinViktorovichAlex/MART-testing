import React from 'react'
import {Form} from 'react-bootstrap'

const CustomInput = (props) => {
    const {label, controlId, control, options, width, classes} = props

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
            <Form.Group controlId = {controlId} className = {classes}>
                <Form.Label>{label}</Form.Label>
                    {control==='select' ? 
                        <Form.Control as = {control} style = {{width: `${width}px`}}>{option}</Form.Control> : 
                        <Form.Control as = {control} style = {{width: `${width}px`}}></Form.Control>}
            </Form.Group>
        )
    }
}
export default CustomInput

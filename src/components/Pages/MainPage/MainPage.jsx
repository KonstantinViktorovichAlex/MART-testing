import React, {Component} from 'react'
import ASide from '../../ASide/ASide'
import CardTicket from '../../CardTicket/CardTicket'

import './mainPage.css'

class MainPage extends Component {

    render(){
        const {handleClick} = this.props 

        return(
            <div className = 'mainPage'>
                <ASide handleClick = {handleClick}/>
                <CardTicket/>
            </div>
        )
    }
    
}
export default MainPage
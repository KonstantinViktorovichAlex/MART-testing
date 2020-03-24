import React, {Component} from 'react';

import Ticket from './components/Tickets/Ticket'
import User from './components/Users/User'
import Contract from './components/Contract/Contract'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {

    state = {
        contract: 'IPoE'
    }

    // toggleValueType = (event) => {
    //     this.setState({
    //         contract: event.target.value
    //     })
        
    // }
    // <Ticket toggleValue = {this.toggleValueType}/>

    render(){
        return(
            <div className ='App'>
                <Ticket />
                <div className = 'app-body'>
                    <User/>
                    <Contract contract = {this.state.contract}/>
                </div>
            </div>
    )
  }
}
export default App;

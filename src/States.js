import '../src/St.css'
import React, { Component } from 'react'

export default class States extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"TN",
            count:0
        }
    
    }
    render() {
        setTimeout(() => {
            this.setState({
                name:"AP"
            })
        }, 2000);
        
        return (
            <div class="demo">
                <h1>States {this.state.name} Count {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count:this.state.count+1
                })
                }}>Increment Count</button>
                
                <button onClick={() => {
                    this.setState({
                        count:this.state.count-1
                })
                }}>Decrement Count</button>

                <button onClick={() => {
                    this.setState({
                        count:0
                })
                }}>Reset</button>

            </div>
        )
    }
}

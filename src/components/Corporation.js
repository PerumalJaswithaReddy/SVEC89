import React, { Component } from 'react'

export default class Corporation extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporation bank {this.props.location}</h1>
            </div>
        )
    }
}

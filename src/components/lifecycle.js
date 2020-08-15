import React, { Component } from 'react'

class Lifecycle extends Component {
    
    // 1- get default props

    // 2- set default state
    state = {
        title: 'Life Cycle'
    }

    // 3- before render

    // 4- render jsx
    render() {
        return(
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }

    // 5- after render
}

export default Lifecycle
import React, { Component } from 'react'

class Lifecycle extends Component {
    
    // 1- get default props

    // 2- set default state
    state = {
        title: 'Life Cycle'
    }

    // 3- before render
    UNSAFE_componentWillMount() {
        console.log('3- before render')
    }

    // 4- render jsx
    render() {
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={
                    () => this.setState({
                    title: 'something else'
                })} 
                >Click To Change</button>
            </div>
        )
    }

    // 5- after render
    componentDidMount() {
        console.log('5- after render')
    }

    UNSAFE_componentWillUpdate() { // before component is updated
        console.log('BEFORE UPDATE RENDER')
    }

    componentDidUpdate() { // after component is updated
        console.log('AFTER UPDATE RENDER')
    }

    shouldComponentUpdate(nextProps, nextState) { // check if component should update or not
        console.log(this.state.title)
        console.log(nextState.title)

        if (nextState.title === 'something else') {
            return true;
        }
        return false;
    }

    UNSAFE_componentWillReceiveProps() { // if new props receive within same component after mount
        console.log('BEFORE RECEIVE PROPS')
    }

    componentWillUnmount() {
        console.log('UNMOUNT')
    }
}

export default Lifecycle
// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch(' http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    people: json.people
                })
            })
    }

    render() {
        return (
            <div> {this.state.people.map(person => person.name)}</div>
        )
    }
}
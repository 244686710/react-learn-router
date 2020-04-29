import React, { Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: ''
        }
    }
    componentDidMount() {
        console.log(this.props)
        let temId = this.props.match.params.id
        this.setState({
            id: temId
        })
    }
    render() { 
        return (
            <h2>list-page {this.state.id}</h2>
        );
    }
}
 
export default List;
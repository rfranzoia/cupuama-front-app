import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'



class Fruits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: [
                {id: 1, name: 'CUPUACU', initials: 'CUPU', harvest: ''}, 
                {id: 2, name: 'GOIABA', initials: 'GOI', harvest: ''}, 
                {id: 3, name: 'MARACUJA', initials: 'MARA', harvest: ''}, 
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>List of Fruits</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Initials</th>
                            <th>Harvest</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.fruits.map(
                               fruit =>
                                    <tr>
                                        <td>{fruit.id}</td>
                                        <td>{fruit.name}</td>
                                        <td>{fruit.initials}</td>
                                        <td>{fruit.harvest}</td>
                                        <td>
                                            <Button variant="danger" size="sm">Remove</Button>
                                        </td>
                                    </tr>
                           )
                       }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Fruits
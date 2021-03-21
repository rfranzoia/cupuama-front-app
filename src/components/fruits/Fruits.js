import React, { Component } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
//import AuthenticationService from '../../utils/AuthenticationService'


class Fruits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: [
                { id: 1, name: 'CUPUACU', initials: 'CUPU', harvest: '' },
                { id: 2, name: 'GOIABA', initials: 'GOI', harvest: '' },
                { id: 3, name: 'MARACUJA', initials: 'MARA', harvest: '' },
            ]
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h1>List of Fruits</h1>
                    </Row>
                    <Row>
                        <div><Button variant="primary" size="sm">New Fruit</Button></div>
                        <hr />
                    </Row>
                    <Row>
                        <Table bordered hover size="sm">
                            <thead>
                                <tr>
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
                                            <tr key={fruit.id}>
                                                <td>{fruit.name}</td>
                                                <td>{fruit.initials}</td>
                                                <td>{fruit.harvest}</td>
                                                <td>
                                                    <Button variant="primary" size="sm">Edit</Button>
                                                    <span>&nbsp;</span>
                                                    <Button variant="danger" size="sm">Remove</Button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Fruits
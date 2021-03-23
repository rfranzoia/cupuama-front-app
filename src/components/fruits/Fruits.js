import React, { Component } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FruitApi from '../../api/fruitApi'

class Fruits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: [],
            message: null
        }

    }

    componentDidMount() {
        this.listFruits()
    }

    componentDidUpdate() {

    }

    listFruits = () => {
        FruitApi.list()
            .then(response => {
                this.setState({ fruits: response.data.value })
                console.log(this.state)
            })
            .catch(error => {
                console.log("=>", error)
            });
    }

    editFruit = (id) => {
        this.props.history.push(`/fruits/${id}`)
    }

    deleteFruit = (id) => {
        FruitApi.delete(id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ message: `fruit ${id} deleted successfully` })
                    this.listFruits()
                } else {
                    throw new Error('delete fail');
                }
            })
            .catch(error => {
                console.log("=>", error)
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h1>Fruits</h1>
                        <hr />
                    </Row>
                    {this.state.message && <div className="alert alert-warning">{this.state.message}</div>}
                    <Row>
                        <Table striped bordered hover size="sm">
                            <thead style={{ backgroundColor: "#a6aabf" }}>
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
                                                    <Row className="justify-content-md-center">
                                                        <Col xs={1}>
                                                            <Button variant="primary" size="sm" onClick={() => this.editFruit(fruit.id)}>Update</Button>
                                                        </Col>
                                                        <Col xs={4}>
                                                            <Button variant="danger" size="sm" onClick={() => this.deleteFruit(fruit.id)}>Remove</Button>
                                                        </Col>
                                                    </Row>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <div><Button variant="primary" size="sm" onClick={() => this.editFruit(-1)}>Create</Button></div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Fruits
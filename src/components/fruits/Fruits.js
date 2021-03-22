import React, { Component } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import FruitApi from '../../api/fruitApi'

class Fruits extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fruits: []
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
                console.log("response=>", response)
                this.setState(() => {
                    return { fruits: response.data.value }
                })
            })
            .catch(error => {
                console.log("=>", error)
            });
    }

    getFruit = (id) => {
        FruitApi.get(id)
            .then(response => {
                console.log("getFruit=>", response.data.value)
            })
            .catch(error => {
                console.log("=>", error)
            })
    }

    deleteFruit = (id) => {
        FruitApi.delete(id)
            .then(response => {
                if (response.status === 200) {
                    console.log("deleteFruit success!")
                    this.props.history.push("/fruits")
                } else {
                    throw new Error('delete fail');
                }
            })
            .catch(error => {
                console.log("=>", error)
            })
    }

    btnEditClicked = (event) => {
        this.getFruit(event.target.name)
    }

    btnRemoveClicked = (event) => {
        this.deleteFruit(event.target.name)
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
                                                    <Button variant="primary" size="sm" name={fruit.id} onClick={this.btnEditClicked}>Edit</Button>
                                                    <span>&nbsp;</span>
                                                    <Button variant="danger" size="sm" name={fruit.id} onClick={this.btnRemoveClicked}>Remove</Button>
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
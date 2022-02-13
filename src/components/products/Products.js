import React, {Component} from 'react'
import {Container, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProductApi from "../../api/productApi";

class Products extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            message: null
        }
    }

    componentDidMount() {
        this.listProducts()
    }

    componentDidUpdate() {
    }

    listProducts = () => {
        ProductApi.list()
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch(error => {
                console.log("=>", error)
            });
    }

    editProduct = (id) => {
        this.props.history.push(`/products/${id}`)
    }

    deleteProduct = (id) => {
        ProductApi.delete(id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ message: `product ${id} deleted successfully` })
                    this.listProducts()
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
                        <h1>Products</h1>
                        <hr />
                    </Row>
                    {this.state.message && <div className="alert alert-warning">{this.state.message}</div>}
                    <Row>
                        <Table>
                            <thead style={{ backgroundColor: "#a6aabf" }}>
                                <tr>
                                    <th>Name</th>
                                    <th>Unit</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td>{product.unit}</td>
                                            <td>
                                                <Button variant="primary" size="sm" onClick={() => this.editProduct(product.id)}>Update</Button>
                                                &nbsp;
                                                <Button variant="danger" size="sm" onClick={() => this.deleteProduct(product.id)}>Remove</Button>
                                            </td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <div><Button variant="primary" size="sm" onClick={() => this.editProduct(-1)}>Create</Button></div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Products

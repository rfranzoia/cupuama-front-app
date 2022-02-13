import {Formik, Form, Field, ErrorMessage} from 'formik'
import React, {Component} from 'react'
import {Button, Card, Col, Container, Row} from 'react-bootstrap'
import productApi from '../../api/productApi'


class EditProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            unit: ''
        }
    }

    onSubmit = (values) => {

        let product = {
            id: this.state.id,
            name: values.name,
            unit: values.unit
        }

        if (this.state.type === "create") {
            productApi.create(product)
                .then(response => {
                    this.listProducts()
                })
                .catch(error => console.log(error))
        } else {
            productApi.update(this.state.id, product)
                .then(response => {
                    this.listProducts()
                })
                .catch(error => console.log(error))

        }
    }

    listProducts = () => {
        this.props.history.push('/products');
    }

    validate = (values) => {
        let errors = {}

        if (!values.name) {
            errors.name = "Name cannot be empty"

        }
        return errors
    }

    componentDidMount = () => {
        if (this.props.match.params.id <= 0) {
            this.setState({id: 0, type: 'create'})

        } else {
            productApi.get(this.props.match.params.id)
                .then(response => {
                    let product = response.data;
                    this.setState({
                        id: product.id,
                        name: product.name,
                        unit: product.unit
                    })
                })
        }
    }

    render() {
        let name = this.state.name
        let unit = this.state.unit
        return (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{padding: '10px'}}>
                <Card border="secondary" style={{width: '50rem'}}>
                    <Card.Header>Product</Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={{name, unit}}
                            onSubmit={this.onSubmit}
                            validateOnBlur={false}
                            validateOnChange={false}
                            validate={this.validate}
                            enableReinitialize={true}>
                            {
                                () => {
                                    return (
                                        <Container>
                                            <Form>
                                                <ErrorMessage name="name" component="div"
                                                              className="alert alert-warning"/>
                                                <fieldset className="form-group">
                                                    <Field className="form-control" id="name" name="name"
                                                           placeholder="Product Name"/>
                                                </fieldset>
                                                <Row>
                                                    <Col>
                                                        <fieldset className="form-group">
                                                            <Field className="form-control" id="unit" name="unit"
                                                                   placeholder="Unit"/>
                                                        </fieldset>
                                                    </Col>
                                                </Row>
                                                <Button variant="primary" type="submit">Save</Button>
                                                &nbsp;
                                                <Button variant="danger"
                                                        onClick={() => this.listProducts()}>Cancel</Button>
                                            </Form>
                                        </Container>
                                    )
                                }
                            }
                        </Formik>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}

export default EditProduct

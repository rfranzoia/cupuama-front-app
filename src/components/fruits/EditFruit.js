import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { Component } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import fruitApi from '../../api/fruitApi'


class EditFruit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            initials: '',
            harvest: '',
            type: ''
        }
    }

    onSubmit = (values) => {

        let fruit = {
            id: this.state.id,
            name: values.name,
            initials: values.initials,
            harvest: values.harvest
        }

        if (this.state.type === "create") {
            fruitApi.create(fruit)
                .then(response => {
                    this.listFruits()
                })
                .catch(error => console.log(error))
        } else {
            fruitApi.update(this.state.id, fruit)
                .then(response => {
                    this.listFruits()
                })
                .catch(error => console.log(error))

        }
    }

    listFruits = () => {
        this.props.history.push('/fruits');
    }

    validate = (values) => {
        let errors = {}

        if (!values.name || !values.initials) {
            errors.name = "Name and Initials cannot be empty"

        } else if (values.initials.length > 4) {
            errors.initials = "Initials must be 4 characters at most"
        }
        return errors
    }

    componentDidMount = () => {
        if (this.props.match.params.id <= 0) {
            this.setState({ id: 0, type: 'create' })

        } else {
            fruitApi.get(this.props.match.params.id)
                .then(response => {
                    let fruit = response.data;
                    this.setState({
                        id: fruit.id,
                        name: fruit.name,
                        initials: fruit.initials,
                        harvest: fruit.harvest
                    })
                })
        }
    }

    render() {
        let name = this.state.name
        let initials = this.state.initials
        let harvest = this.state.harvest
        return (
            <div className="d-flex flex-column justify-content-center align-items-center" style={{ padding: '10px' }}>
                <Card border="secondary" style={{ width: '50rem' }}>
                    <Card.Header>Fruit</Card.Header>
                    <Card.Body>
                        <Formik
                            initialValues={{ name, initials, harvest }}
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
                                                <ErrorMessage name="name" component="div" className="alert alert-warning" />
                                                <ErrorMessage name="initials" component="div" className="alert alert-warning" />
                                                <fieldset className="form-group">
                                                    <Field className="form-control" id="name" name="name" placeholder="Fruit Name" />
                                                </fieldset>
                                                <Row>
                                                    <Col>
                                                        <fieldset className="form-group">
                                                            <Field className="form-control" id="initials" name="initials" placeholder="Fruit initials" />
                                                        </fieldset>
                                                    </Col>
                                                    <Col>
                                                        <fieldset className="form-group">
                                                            <Field className="form-control" id="harvest" name="harvest" placeholder="Harvest" />
                                                        </fieldset>
                                                    </Col>
                                                </Row>
                                                <Button variant="primary" type="submit">Save</Button>
                                        &nbsp;
                                        <Button variant="danger" onClick={() => this.listFruits()}>Cancel</Button>
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

export default EditFruit
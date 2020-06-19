import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


class FormProduct extends Component {



    async ProductList() {
        try {
            const res = await axios.get('http://localhost/test2/src/api/apiProducto.php');
            this.setState({
                productos: res.data
            })

        } catch (error) {
            console.error(error);
        }
    }


    async CreateProduct(e) {
        e.preventDefault();
        const { id, nombre, categoria, referencia, precio, peso, stock } = this.state;

        const productobj = {
            id,
            nombre,
            categoria,
            referencia,
            precio,
            peso,
            stock,

        };

        axios
            .post("http://localhost/test2/src/api/CreateProduct.php", productobj)
            .then(function (body) {
                this.setState.productos = productobj;
            })
            .catch(function (error) {
                console.log(error);
            });




    }



    componentDidMount() {
        this.ProductList();

    }





    constructor(props) {
        super(props);

        this.ProductList();
        this.state = {
            id: '',
            nombre: '',
            categoria: '',
            referencia: '',
            precio: '',
            peso: '',
            stock: '',



        }


    }


    render() {



        return (

            <Form style={{ margin: '10px' }} onSubmit={this.CreateProduct.bind(this)}>
                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="id">ID</Label>
                            <Input type="number"
                                name="id"
                                id="id"
                                placeholder="id del producto"
                                onChange={e => this.setState({ id: e.target.value })}
                                value={this.state.id} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="nombre">Nombre</Label>
                            <Input
                                type="text"
                                name="nombre"
                                id="nombre"
                                onChange={e => this.setState({ nombre: e.target.value })}
                                value={this.state.nombre} />
                        </FormGroup>
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <Label for="referencia">Referencia</Label>
                            <Input
                                type="text"
                                name="referencia"
                                id="referencia"
                                onChange={e => this.setState({ referencia: e.target.value })}
                                value={this.state.referencia} />
                        </FormGroup>
                    </Col>

                    <Col md={2}>
                        <FormGroup>
                            <Label for="precio">Precio</Label>
                            <Input
                                type="number"
                                name="precio"
                                id="precio"
                                onChange={e => this.setState({ precio: e.target.value })}
                                value={this.state.precio} />
                        </FormGroup>
                    </Col>
                </Row>


                <Row form>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="categoria">Categoria</Label>
                            <Input
                                type="text"
                                name="categoria"
                                id="categoria"
                                onChange={e => this.setState({ categoria: e.target.value })}
                                value={this.state.categoria} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="stock">Stock</Label>
                            <Input
                                type="number"
                                name="stock"
                                id="stock"
                                onChange={e => this.setState({ stock: e.target.value })}
                                value={this.state.stock} />
                        </FormGroup>
                    </Col>


                </Row>





                <input type="submit" className="btn btn-success" value="Enviar" />
            </Form>
        );
    }
}

export default FormProduct;
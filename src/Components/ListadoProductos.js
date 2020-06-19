import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';


class ListadoProductos extends Component {

    ProductList() {

        fetch('http://localhost/test2/src/api/apiProducto.php')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    productos: data
                });
            })
    }




    constructor(props) {
        super(props);
        this.state = {
            productos: []
        }
        this.ProductList();
    }




    render() {


        return (

            <div>
                <br></br>
                <h3>Listado de productos</h3>
                <br></br>

                < Table >



                    < thead >
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Referencia</th>
                            <th>Precio</th>
                            <th>Peso</th>
                            <th>Categoria</th>
                            <th>Stock</th>
                        </tr>
                    </thead >
                    <tbody>
                        {this.state.productos.map(product => {
                            return (

                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.nombre}</td>
                                    <td>{product.referencia}</td>
                                    <td>{product.precio}</td>
                                    <td>{product.peso}</td>
                                    <td>{product.categoria}</td>
                                    <td>{product.stock}</td>
                                </tr>
                            );
                        })}



                    </tbody>
                </Table >
            </div>


        );
    }
}

export default ListadoProductos;
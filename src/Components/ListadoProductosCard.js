import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';




class ListadoProductos extends Component {


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




    constructor(props) {
        super(props);
        this.state = {
            productos: []
        }
        this.ProductList();
    }





    render() {



        return (


            <div className="row p-3">

                {

                    this.props.productos.map(item => {
                        return (

                            <div className="card p-2 m-2" key={item.id}>
                                <img width="180" src="productlogo.jpg" alt="img"></img>
                                <div className="card-body">
                                    <h3>{item.nombre}</h3>
                                    <h6>Ref: {item.referencia}</h6>
                                    <h6>Precio: {item.precio}</h6>
                                    <button className="btn btn-danger mx-2"
                                        onClick={(e) => this.eliminar(e, item.id)}>Eliminar</button>
                                    <button className="btn btn-info"
                                        onClick={(e) => this.editar(e, item.id)}>Editar</button>
                                </div>

                            </div>
                        )
                    })
                }

            </div>


        );




    }
}

export default ListadoProductos;
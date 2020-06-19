import React, { Component } from 'react';

import ListadoCard from './ListadoProductosCard.js';

import FormRegisterProduct from './FormProducts.js';

class Personas extends Component {




    render() {
        return (

            <div>

                <FormRegisterProduct />

                <ListadoCard />
            </div>


        );
    }
}

export default Personas;

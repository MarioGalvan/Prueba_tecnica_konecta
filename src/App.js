import React, { Component, useState } from 'react';
import { Table } from 'reactstrap';

import NavBar from './Components/NavBar.js'
import Inventario from './Components/Inventario.js';


class Crud extends Component {
  state = {}



  render() {




    return (
      <div>
        <NavBar />

        <Inventario />


      </div>










    );
  }
}

export default Crud;



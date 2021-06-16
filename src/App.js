import React from 'react';
import './App.css';
import Producto from './components/Producto'
import { Container, Row } from 'reactstrap'
import Navegacion from './components/Navegacion'
import { listaProducto } from './listaProducto.json'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listaProducto
    }
  }
  render() {
    const arregloComponentes = this.state.listaProducto.map(
      (listaProducto, i) => {
        return (
          <Producto
            key={i}
            title={listaProducto.title}
            img={listaProducto.img}
            description={listaProducto.description}
            price={listaProducto.price}
            stock={listaProducto.stock}
          />
        )
      }
    )
    return (
      <Container>
        <Navegacion title='Shop Online' />
        <Row>
          {arregloComponentes}
        </Row>
      </Container>
    );
  }
}

export default App;

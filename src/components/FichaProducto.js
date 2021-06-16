import React from 'react'
import { Modal, Button, Container, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap'
import { listaCarrito } from '../listaCarrito.json'

class FichaProducto extends React.Component {
    constructor(props) {
        super()
        this.state = {
            modal: false,
            listaCarrito,
            stock: props.props.stock
        }
        this.toggle = this.toggle.bind(this)
        this.agregarCarrito = this.agregarCarrito.bind(this)
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    agregarCarrito() {
        listaCarrito.push({
            "title": this.props.props.title,
            "price": this.props.props.price
        })
        this.setState(prevState => ({
            modal: !prevState.modal

        }))

        this.state.stock !== 0 ? this.setState(prevState => ({ stock: prevState.stock - 1 })) : alert("Producto Agotado")

        const cantidadProductosAgregados = document.getElementById('cantidad-productos-agregados')
        cantidadProductosAgregados.textContent = listaCarrito.length
    }
    render() {
        return (
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal} >
                    <ModalHeader>{this.props.props.title}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.img} />
                        <p>Descripcion</p>
                        {this.props.props.description}
                        <p>Este producto tiene un valor de <b>{this.props.props.price}</b></p>
                        <p>Hay <b>{this.state.stock}</b> unidades de este producto disponibles</p>
                    </ModalBody>
                    <ModalFooter className='modalFooter'>
                        <Button color='primary' onClick={this.agregarCarrito}>Agregar al Carrito</Button>
                        <Button color='secondary' onClick={this.toggle}>Volver atras</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        )
    }
}
export default FichaProducto

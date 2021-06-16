import React from 'react'
import { Popover, Badge, Button, PopoverHeader, PopoverBody, Table } from 'reactstrap'
import { listaCarrito } from '../listaCarrito.json'
class Carro extends React.Component {
    constructor() {
        super()
        this.state = {
            popoverOpen: false,
            listaCarrito
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }))
    }
    render() {
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return (
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{listaCarrito.title}</td>
                        <td>{listaCarrito.price}</td>
                    </tr>
                )
            }
        )

        const sumarCarrito = this.state.listaCarrito.reduce((sum, listaCarrito) => {
            return sum + Number(listaCarrito.price) * 1000
        }, 0)
        
        return (
            <div>
                <Button id="Popover1" color='info'>
                    <span className="material-icons">
                        shopping_cart</span>
                    <Badge id="cantidad-productos-agregados" color="secondary">{listaCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total:</th>
                                    <th></th>
                                    <th>{Intl.NumberFormat("de-DE").format(sumarCarrito)} CLP</th>
                                </tr>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        )
    }
}

export default Carro

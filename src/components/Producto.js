import React from 'react'
import {  CardText, CardTitle, CardBody, CardImg, Col, Card, CardSubtitle } from 'reactstrap'
import FichaProducto from './FichaProducto'
import './Producto.css'
import './FichaProducto.css'

class Producto extends React.Component {
    render() {
        //this.pops.img
        //const Producto = ({title,img,description,price, button}) => {
        return (

            <Col sm='4' >
                <Card className='Card' body outline color='primary'>
                    <CardImg src={this.props.img} />
                    <CardBody>
                        <CardTitle> {this.props.title}</CardTitle>
                        <CardSubtitle><b>Valor:</b> {this.props.price}</CardSubtitle>
                        <CardText>
                            {this.props.description}
                        </CardText>
                    </CardBody>
                    <FichaProducto props={this.props}/>
                    {/* <Button className='Button'>Comprar</Button>
                    <Button className='Button'>Ver Ficha</Button> */}
                </Card>
            </Col>

        )
    }
}

export default Producto

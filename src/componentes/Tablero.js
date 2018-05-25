import React, { Component } from 'react';
import CardDetails from './CardDetails';
import ContenedorCartas from './ContenedorCartas';

export default class Tablero extends Component {
  constructor(props) {
        super(props);
        this.state={
          detalles:false,
          IdCarta:0
        };
        this.verdetalles=this.verdetalles.bind(this);
        this.volver=this.volver.bind(this);
    }
  verdetalles(id){
    this.setState({ detalles:true , IdCarta:id });
  }
  volver(event){
    this.setState({ detalles:false });
  }
  render() {
    		var datosFiltrados = this.props.datosTarjeta;
        if(this.state.detalles){
          return (
                <CardDetails
                      btnBack={this.volver.bind(this)}
                      IdCarta={this.state.IdCarta}
                      datos={datosFiltrados}
                       />
          )
        }else{
	 		 	return (
                <ContenedorCartas
                      detalleCarta={this.verdetalles}
                      datos={datosFiltrados}
                />
					);
        }
  }
}

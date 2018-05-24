import React, { Component } from 'react';
import Card from './Card';
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
    var detalles = this.state.detalles;
    var IdCarta = this.state.IdCarta;
    this.setState({ detalles:true , IdCarta:id });
  //  console.log('id carta: ',IdCarta);

  }
  volver(event){
    var detalles = this.state.detalles;
    this.setState({ detalles:false });
  }
  render() {
    		var datosFiltrados = this.props.datosTarjeta;
        //var detalles = this.state.detalles;
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

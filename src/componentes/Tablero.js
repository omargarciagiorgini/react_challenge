import React, { Component } from 'react';
import Card from './Card';

export default class Tablero extends Component {
  constructor(props) {
        super(props);
        this.state={
          detalles:false
        };
    }
  verdetalles(event){
    var detalles = this.state;
    this.setState({ detalles:true });
    //console.log('detalles',detalles);

  }
  volver(event){
    var detalles = this.state;
    this.setState({ detalles:false });
    //console.log('detalles',detalles);
  }
  render() {
    		var datosFiltrados = this.props.datosTarjeta;
        var detalles = this.state.detalles;
      //  console.log('detalles en el render',detalles);

        if(detalles){
          return (
            <div id='tablero' className='col'>
                    <button className='btn' onClick={this.volver.bind(this)} >Back</button>
                        <h2>ESTOS SON LOS DETALLES</h2>
            </div>
          )
        }else{
	 		 	return (
	 		 		<div id='tablero' className='col'>
						{
							datosFiltrados.map(function(element){
							return (
                <Card      cardImageUrl={element.cardImageUrl}
                           cardDescription={element.cardDescription}
                      />

									);
								})
              }
					</div>

					);
        }

  }
}

import React, { Component } from 'react';

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
    console.log('detalles',detalles);
    return detalles;
  }
  volver(event){
    var detalles = this.state;
    this.setState({ detalles:false });
    console.log('detalles',detalles);
  }
  render() {
    	//var datosTarjeta = this.props.datosTarjeta;
	 			var datosFiltrados = this.props.datosTarjeta;
        var detalles = this.state.detalles;
        console.log('detalles en el render',detalles);

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

                <div className="card"   >
                      <img className="card-img-top"
                      src={'http://localhost/avalith/challenge/src/'+element.cardImageUrl} alt="Card image"
                       height="350" width="390"/>
                      <div className="card-body">
                          <p className="card-text">{element.cardDescription}</p>
                        {/*  <button className='btn' onClick={this.verdetalles.bind(this)} > Detalles</button>
                          */}
                      </div>
              </div>

									);
								})
              }
					</div>

					);
        }

  }
}

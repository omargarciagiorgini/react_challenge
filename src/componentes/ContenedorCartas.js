import React, { Component } from 'react';
import Card from './Card';

export default class ContenedorCartas extends Component {
  constructor(props) {
        super(props);
        this.details=this.details.bind(this);
        };
  details(id){
        this.props.detalleCarta(id);
  }

  render() {
    		var datosFiltrados = this.props.datos;
        let filtrarPorBusqueda = this.props.filtrarPorBusqueda;
        let filtrarPor = this.props.filtrarPor; // "Backend", "Frontend", null

	 		 	return (

	 		 		<div id='tablero' className='col-md-9'>

              <div className='LANGUAGES-TECHNOLOGIES'>LANGUAGES & TECHNOLOGIES </div>
              <div className='d-flex  p-3 flex-wrap flex-row bg-light container-fluid bg-success'>
            {  datosFiltrados.map((element)=>{
  
  if ( (!filtrarPorBusqueda || element.cardTitle.toLowerCase().includes(filtrarPorBusqueda.toLowerCase())) &&
     (!filtrarPor || element.cardTechnology.includes(filtrarPor))){
							return (
                <Card      cardImageUrl={element.cardImageUrl}
                           cardDescription={element.cardDescription}
                           cardTitle={element.cardTitle}
                           cardId={element.cardId}

                           detalleCarta={this.details}
                />
								      );
        }
								})
              }
              </div>

					</div>

					);
        }
}

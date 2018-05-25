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
	 		 	return (
	 		 		<div id='tablero' className='col'>
            <div className='LANGUAGES-TECHNOLOGIES'>LANGUAGES & TECHNOLOGIES</div>
						{
              datosFiltrados.map((element)=>{
							return (
                <Card      cardImageUrl={element.cardImageUrl}
                           cardDescription={element.cardDescription}
                           cardTitle={element.cardTitle}
                           cardId={element.cardId}

                           detalleCarta={this.details}
                      />
								      );
								})
              }
					</div>
					);
        }
}

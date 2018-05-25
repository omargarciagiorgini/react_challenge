import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
export default class CardDetails extends Component
  {
    constructor(props) {
          super(props);
          this.btnVolver=this.btnVolver.bind(this);
  		}

  btnVolver(event){

    this.props.btnBack(event);
  }
    render()
		 {        var cartas = this.props.datos;
              var id_carta = this.props.IdCarta;
              var detallesCarta = cartas.find((element)=> {
                    return element.cardId === id_carta;
                       }
             );
       return(
            <div id='tablero' className='col'>
             <button className='btn' onClick={this.btnVolver} >Back</button>
            {/*<Doughnut ref='chart' data={[34,43,24,12]} /> */}
            <div className="element" >

                  <div className="card col-md-12 details"   id={detallesCarta.cardId}>
                   <img className="card-header img-thumbnail"
                   src={'http://localhost/avalith/challenge/src/'+detallesCarta.cardImageUrl} alt="Card image"
                                 height="350" width="390"/>
                                <div className="card-body">
                                   <h3 className="card-title"> {detallesCarta.cardTitle}</h3>
                                    <p className="card-text">{detallesCarta.cardDescription}</p>
                                </div>
                  </div>

             </div>
            </div>
          )
      };
		}

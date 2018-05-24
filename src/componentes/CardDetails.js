import React, { Component , PropTypes} from 'react';
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
          //  console.log('cartas ',cartas);
          //  console.log('cartas ',id_carta);
            var detallesCarta = cartas.find((element)=> {
                    return element.cardId == id_carta;
                       }
             );
          //   console.log('detallesCarta ',detallesCarta);
   return(
            <div id='tablero' className='col'>
             <button className='btn' onClick={this.btnVolver} >Back</button>
            {/*<Doughnut ref='chart' data={[34,43,24,12]} /> */}
            <div className="element" >
            <div className="col-md-12" >

             <div className="card"   id={detallesCarta.cardId}>
                 <img className="card-header"
                   src={'http://localhost/avalith/challenge/src/'+detallesCarta.cardImageUrl} alt="Card image"
                                 height="350" width="390"/>
                                <div className="card-body">
                                   <h3 className="card-title"> {detallesCarta.cardTitle}</h3>
                                    <p className="card-text">{detallesCarta.cardDescription}</p>
                                </div>
                        </div>
               </div>
             </div>
            </div>
          )
      };
		}
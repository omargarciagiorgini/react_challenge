import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';
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

             this.state=({ data:
                                {
                                  datasets:[{
                                          backgroundColor: [
                                              'rgba(255, 99, 132, 0.2)',
                                              'rgba(54, 162, 235, 0.2)',
                                              'rgba(255, 206, 86, 0.2)'
                                                        ],
                                            borderColor: 'rgb(255, 99, 132)',
                                            data:detallesCarta.cardGraph.data
                                          }],
                                  options:[{responsive:true}]
                                }
                             });

       return(
    <div id='tablero' className='col'>

      {/* <div className="element" > */}

        <div className="card col-md-12 details"   id={detallesCarta.cardId}>
              <button className='btn' onClick={this.btnVolver} >Back</button>
                   <img className="card-header img-thumbnail"
                   src={'http://localhost/avalith/challenge/src/'+detallesCarta.cardImageUrl} alt="Card image"
                                 height="350" width="390"/>

                                <div className="card-body">
                                   <h3 className="card-title"> {detallesCarta.cardTitle}</h3>
                                    <p className="card-text">{detallesCarta.cardDescription}</p>
                                </div>
                      <div className='pie'>  <Pie ref='chart' data={this.state.data} />  </div>
        </div>


          {/*   </div> */}
            </div>
          )
      };
		}

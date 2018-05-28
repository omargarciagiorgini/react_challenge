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
             this.state={ data:
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
                             };
       return(
    <div id='tablero' className='col'>

          <div className="col detallesCarta"   id={detallesCarta.cardId}>
              <button className='btn' onClick={this.btnVolver} >Back</button>
                   <img className="card-header "
                   src={'http://localhost/avalith/challenge/src/'+detallesCarta.cardPost.postImageUrl} alt="Card image"
                                 />
                                <h3> {detallesCarta.cardPost.postTitle} </h3>
                                <div className="row">
                                   <div className="col-md-7"> {detallesCarta.cardPost.postDescription}</div>
                                    <div className="col-md-5">
                                               <Pie ref='chart' data={this.state.data} />
                                    </div>
                                </div>
                      </div>
          </div>
          )
      };
		}

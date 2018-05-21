import React, { Component , PropTypes} from 'react';
import axios from 'axios';
import Tablero from './Tablero'

export default class Contenido extends Component
  {

    constructor(props) {
          super(props);
          this.state={
            cartas_a_mostrar:[],
            cards:[],
            BackFilter:false,
            FrontFilter:false,
            ver:true
          };
  		}

	 	 componentDidMount() {
      		axios
        		.get('http://localhost/avalith/challenge/src/componentes/cards.json')
        		.then(res => {
                        const cards = res.data;
                        const cartas_a_mostrar = res.data;
                        this.setState({ cards });
                        this.setState({ cartas_a_mostrar });

                         }
                       );



  		           }
    Filtrar(event){
      var cartas = this.state.cards;
      console.log('cartas',cartas);
      var cartas_a_mostrar = cartas.filter(function(item){
            return item.cardTitle.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
                  }
              );
      console.log('cartas_a_mostrar',cartas_a_mostrar);
      this.setState({cartas_a_mostrar});
        }

    ToggleFrontFilter(event){


      var cartas = this.state.cards;
      var cartas_a_mostrar = cartas.filter(function(item){
            return item.cardTechnology.find(function(element) {
              return element == "Frontend";
                          });
                  }
                );


              console.log('cartas_a_mostrar',cartas_a_mostrar);

              cartas_a_mostrar.sort();

              this.setState({cartas_a_mostrar});


        }

    ToggleBackFilter(event){


      var cartas = this.state.cards;
      var cartas_a_mostrar = cartas.filter(function(item){
            return item.cardTechnology.find(function(element) {
              return element == "Backend";
                          });
                  }
                );


              console.log('cartas_a_mostrar',cartas_a_mostrar);
              this.setState({cartas_a_mostrar});


        }

		render()
		 {
        var cartas_a_mostrar = this.state.cartas_a_mostrar;
        //console.log('cartas_a_mostrar',cartas_a_mostrar);
   return(
      <div className='row'>
          <div className={'col-md-3 hide-' + this.props.muestraSideBar} id='barraLateral'>
  		    	   <input type='text' value={this.state.search} onChange={this.Filtrar.bind(this)} placeholder='Type here' />
               <h3>Filter By</h3>

  							       <div id='infoDev'>
  								             <h4>Omar Garcia Giorgini</h4>
  								             <h4>DNI 28804659</h4>
  								             <h4>37 years old</h4>
  							        </div>

  							<input type='radio' name='Front' onClick={this.ToggleFrontFilter.bind(this)} /> <br/>

          			<input type='radio' name='Back' onClick={this.ToggleBackFilter.bind(this)}  />
  			    </div>
  			 			     <Tablero  datosTarjeta={cartas_a_mostrar}/>
    </div>
		 	);

			}

		}

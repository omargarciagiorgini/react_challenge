import React, { Component , PropTypes} from 'react';
import axios from 'axios';
import Tablero from './Tablero'
import SideBar from './SideBar'

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
            var cartas_a_mostrar = cartas.filter(function(item){
            return item.cardTitle.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
                  }
              );
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

   return(
      <div className='row'>
                  <SideBar
                      filtrar={this.Filtrar.bind(this)}
                      filtrarFront={this.ToggleFrontFilter.bind(this)}
                      filtrarBack={this.ToggleBackFilter.bind(this)}
                      search={this.state.search}
                      muestraSideBar={this.props.muestraSideBar}
                      nameDev='Omar Garcia Giorgini' age='37' dni='28804659'/>
  			 			    <Tablero  datosTarjeta={cartas_a_mostrar}/>
    </div>
		 	);

			}

		}

import React, { Component } from 'react';

export default class SideBar extends Component
  {
      Filter(event){
              this.props.filtrar(event);
            }

      FrontFilter(event){
              this.props.filtrarFront(event);
          }

      BackFilter(event){
              this.props.filtrarBack(event);
          }

    render()
		 {
   return(
          <div className={'col-md-3 hide-' + this.props.muestraSideBar} id='barraLateral'>
  		    	   <input type='text' value={this.props.search} onChange={this.Filter.bind(this)} placeholder='Type here' />
               <h3>Filter By</h3>
  							       <div id='infoDev'>
  								             <h4>{this.props.nameDev}</h4>
  								             <h4>{this.props.dni}</h4>
  								             <h4>{this.props.age +'years old'}</h4>
  							        </div>
  							<input type='radio' name='Front' onClick={this.FrontFilter.bind(this)} /> <br/>
          			<input type='radio' name='Back' onClick={this.BackFilter.bind(this)}  />
  			    </div>
		 	);

			}

		}

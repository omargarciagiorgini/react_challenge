import React, { Component } from 'react';

export default class Card extends Component
  {
    detalles(x){
      this.props.detalleCarta(x);
      }

    render()
		 {
   return(
     <div className="element" >
     <div className="col-md-12" >

      <div className="card"  onClick={() => { this.detalles(this.props.cardId)}} id={this.props.cardId}>
          <img className="card-header img-thumbnail"
            src={'http://localhost/avalith/challenge/src/'+this.props.cardImageUrl} alt="Card image"
                          />
                         <div className="card-body">
                            <h3 className="card-title"> {this.props.cardTitle}</h3>
                             <p className="card-text">{this.props.cardDescription}</p>
                         </div>
                 </div>
        </div>
      </div>
               )
      };

		}

import React, { Component , PropTypes} from 'react';

export default class Card extends Component
  {
    constructor(props) {
          super(props);

  		}
    render()
		 {
   return(
               <div className="card"   >
                         <img className="card-img-top"
                         src={'http://localhost/avalith/challenge/src/'+this.props.cardImageUrl} alt="Card image"
                          height="350" width="390"/>
                         <div className="card-body">
                             <p className="card-text">{this.props.cardDescription}</p>
                          
                         </div>
                 </div>
               )
      };
		}

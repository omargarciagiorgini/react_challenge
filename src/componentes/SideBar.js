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
          <div className={'sidenav col-md-3 hide-' + this.props.muestraSideBar} >

          <div className="form-group">

          <p className='infoDev'>
                  <label className='DEV-NAME'>{this.props.nameDev}</label>
                  <label className='DNI-XXXXXXXX'>{this.props.dni}</label><br/>
                  <label className='XX-YEARS-OLD'>{this.props.age +'years old'}</label>
           </p>

                <input type="text" className="form-control Shape-1 "  value={this.props.search} onChange={this.Filter.bind(this)}
                        placeholder='Search in cards' />

               <label className='Filter-by'>Filter By </label>

                <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" value="" onClick={this.FrontFilter.bind(this)} />
                          <div className='Frontend'>Frontend</div>
                        </label>
                </div>
                <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" value="" onClick={this.BackFilter.bind(this)}  />
                            <div className='Backend'>Backend</div>
                      </label>
                </div>

  			    </div>
            </div>
		 	);

			}

		}

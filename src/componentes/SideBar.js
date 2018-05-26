import React, { Component } from 'react';
//import { RadioGroup, RadioButton ,ReversedRadioButton} from 'react-radio-buttons';

export default class SideBar extends Component
  {
    constructor(props){
      super(props);
      this.state={
          selectedOption: 'none',
          icono_1:false,
          icono_2:false
        }
    }
      Filter(event){
              this.props.filtrar(event);
            }

      FrontFilter(event){
        var icono_1=this.state.icono_1;
          this.setState({
                selectedOption: event.target.value,
                icono_1:!icono_1
                });
              this.props.filtrarFront(event);
          }

      BackFilter(event){
        var icono_2=this.state.icono_2;
        this.setState({
              selectedOption: event.target.value,
              icono_2:!icono_2
              });
              this.props.filtrarBack(event);
          }

    render()
		 {
   return(
          <div className={'sidenav  col-md-3 hide-' + this.props.muestraSideBar} >

          <div className="form-group">

          <p className='infoDev'>
                  <label className='DEV-NAME'>{this.props.nameDev}</label>
                  <label className='DNI-XXXXXXXX'>{this.props.dni}</label><br/>
                  <label className='XX-YEARS-OLD'>{this.props.age +' years old'}</label>
           </p>

                <input type="text" className="form-control Shape-1 "  value={this.props.search} onChange={this.Filter.bind(this)}
                        placeholder='Search in cards' />

               <label className='Filter-by'>Filter By </label>

                <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" value="Frontend"
                             checked={this.state.selectedOption === 'Frontend'} onClick={this.FrontFilter.bind(this)} />
                              <img src={'http://localhost/avalith/challenge/src/images/'+this.state.icono_1+'.png'} />
                          <div className='Frontend'>Frontend</div>

                        </label>
                </div>
                <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" value="Backend"
                             checked={this.state.selectedOption === 'Backend'} onClick={this.BackFilter.bind(this)}  />
                             <img src={'http://localhost/avalith/challenge/src/images/'+this.state.icono_2+'.png'} />
                            <div className='Backend'>Backend</div>
                      </label>
                </div>


  			    </div>
            </div>
		 	);

			}

		}

import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './css/estilo.css';

//import Top from './componentes/Top'
import Footer from './componentes/Footer'
import Contenido from './componentes/Contenido'

class App extends Component {

  constructor(props) {
            super(props);
            this.state={
              muestraSideBar:true

            };
    		}

  Toggle(){
      var { muestraSideBar } = this.state;
      this.setState({
          muestraSideBar: !muestraSideBar,
          });
      console.log({muestraSideBar});
  }

  render() {
    return (
      <div className='container'>
      <div className='row'>
            <div className='col-md-auto' id='top'>
            <img src={'http://localhost/avalith/challenge/src/images/avalith.png'} height="35" width="39"
            onClick={this.Toggle.bind(this)} />
            </div>
      </div>
                  <Contenido muestraSideBar={this.state.muestraSideBar}/>
      <div className='row'>
            <div className='col-md-auto' id='footer'>
                    <Footer/>
            </div>
      </div>
</div>
    );
  }
}

export default App;

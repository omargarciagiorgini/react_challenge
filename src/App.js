import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import './css/estilo.css';

import Top from './componentes/Top'
//import Footer from './componentes/Footer'
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
                    <Top ToggleSideBar={this.Toggle.bind(this)}/>
                  <Contenido muestraSideBar={this.state.muestraSideBar}/>
      </div>
    );
  }
}

export default App;

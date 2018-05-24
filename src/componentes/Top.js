import React, { Component } from 'react';

export default class Top extends Component {
  Cambia(event){
        this.props.ToggleSideBar(event);
  }
  render() {
    return (

          <div className='row'>
                <nav className='col-md-12 navbar navbar-dark bg-dark' >
                    <img src={'http://localhost/avalith/challenge/src/images/avalith.png'} height="35" width="39"
                          onClick={this.Cambia.bind(this)} />
                </nav>
          </div>
    );
  }
}

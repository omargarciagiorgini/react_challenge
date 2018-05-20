import React, { Component } from 'react';

export default class Top extends Component {
  Hacealgo(){
      console.log('hiciste click');
      alert('vamos carajo !!!');
  }
  render() {
    return (

          <img src={'http://localhost/avalith/challenge/src/images/avalith.png'} height="35" width="39"
          onClick={this.Hacealgo} />

    );
  }
}

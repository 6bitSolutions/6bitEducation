import React, { Component } from 'react';
import './App.css';
import img_elLogo from './images/Navbar_elLogo_77800.jpg';


export default class Navbar extends Component {

  // This component doesn't use any properties

  onClick_elLogo = (ev) => {
    // Go to screen 'Home'
    this.props.appActions.goToScreen('home', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#feffff',
     };
    const style_elLogo = {
        height: 'auto',
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="Navbar" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="foreground">
          <img className='elLogo' style={style_elLogo} src={img_elLogo} alt="" onClick={this.onClick_elLogo}  />
        </div>
      </div>
    )
  }
  

}

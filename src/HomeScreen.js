import React, { Component } from 'react';
import './App.css';
import img_elLogo from './images/Navbar_elLogo_77800.jpg';


export default class HomeScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      tagline: (<div>Optimising<br />The Future Of<br />Edcuation</div>),
      tagline_plainText: "Optimising\nThe Future Of\nEdcuation",
      aboutus: (<div>About Us</div>),
      aboutus_plainText: "About Us",
      contact: (<div>Contact</div>),
      contact_plainText: "Contact",
    };
  }

  onClick_elAboutUs = (ev) => {
    // Go to screen 'AboutUs'
    this.props.appActions.goToScreen('aboutus', { transitionId: 'slideIn_right' });
  
  }
  
  
  onClick_elContact = (ev) => {
    // Go to screen 'Contact'
    this.props.appActions.goToScreen('contact', { transitionId: 'slideIn_right' });
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#feffff',
     };
    const style_elLogo = {
        height: 'auto',
     };
    const style_elTagline = {
        fontSize: 32.3,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elAboutUs = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elAboutUs_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elContact = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elContact_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen HomeScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elLogo'>
            <img style={style_elLogo} src={img_elLogo} alt=""  />
          
          </div>
          
          <div className='font-avenirNextHeavy  elTagline'>
            <div style={style_elTagline}>
              <div><div dangerouslySetInnerHTML={{__html: this.state.tagline_plainText.replace(/\n/g, '<br>')}}></div></div>
            </div>
          
          </div>
          
          <div className='baseFont elAboutUs' style={style_elAboutUs_outer}>
            <div style={style_elAboutUs} onClick={this.onClick_elAboutUs} >
              <div>{this.state.aboutus}</div>
            </div>
          
          </div>
          
          <div className='baseFont elContact' style={style_elContact_outer}>
            <div style={style_elContact} onClick={this.onClick_elContact} >
              <div>{this.state.contact}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}

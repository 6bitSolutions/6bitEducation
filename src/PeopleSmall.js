import React, { Component } from 'react';
import './App.css';
import img_elRoundimage from './images/PeopleSmall_elRoundimage_990244.png';


export default class PeopleSmall extends Component {

  // Properties used by this component:
  // picture, name, about

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
    const style_elRoundimage = {
        height: 'auto',
     };
    const value_roundimage = this.props.picture;
    
    const style_elText = {
        fontSize: 19.4,
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text = this.props.name;
    
    const style_elText2 = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_text2 = this.props.about;
    
    
    return (
      <div className="PeopleSmall" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow">
          <div className='elRoundimage'>
            <img style={style_elRoundimage} src={(value_roundimage || img_elRoundimage)} alt=""  />
          
          </div>
          
          <div className='font-avenirNextDemiBold  elText'>
            <div style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.peoplesmall_text_872109}</span>)}</div>
            </div>
          
          </div>
          
          <div className='baseFont elText2'>
            <div style={style_elText2}>
              <div>{value_text2 !== undefined ? value_text2 : (<span className="propValueMissing">{this.props.locStrings.peoplesmall_text2_117470}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}

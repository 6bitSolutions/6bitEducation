import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import PeopleSmall from './PeopleSmall';


export default class AboutUsScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    
    const dataSheet_people = this.props.dataSheets['people'];
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#feffff',
     };
    const style_elTitle = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elAbout = {
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('people').items);
    
    
    return (
      <div className="AppScreen AboutUsScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elNavbar'>
            <div>
              <Navbar ref={(el)=> this._elNavbar = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          
          </div>
          
          <div className='headlineFont elTitle'>
            <div style={style_elTitle}>
              <div>{this.props.locStrings.aboutus_text_523449}</div>
            </div>
          
          </div>
          
          <div className='baseFont elAbout'>
            <div style={style_elAbout}>
              <div>{this.props.locStrings.aboutus_text_769887}</div>
            </div>
          
          </div>
          
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols2_${index % 2}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <PeopleSmall dataSheetId={'people'} dataSheetRow={row} {...{ 'picture': row['picture'], 'name': row['name'], 'about': row['about'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}

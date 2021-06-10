import React from 'react';
//import NavButton from './NavButton.js';

class FooterBox extends React.Component{
	
    render() {
    	var style = { display : 'none' };
		var homeStyle = { display : 'none' };
		var homeDisplayStyle={ margin: "3px 6px -42px 26px" };
    	if (this.props.page === 'ABOUT') {
			style = {  fill:"rgb(180, 40, 46)", left:"190px", zIndex: "-2"  };
			homeStyle=homeDisplayStyle;
		}
    	else if (this.props.page === 'EXPLORE') {
			style = {  fill:"rgb(86, 12, 112)", left:"500px"  };
			homeStyle=homeDisplayStyle;
		}
    	else if (this.props.page === 'NAMES'){
			 style = {  fill:"rgb(209, 68, 20)", left:"814px"  };
 			homeStyle=homeDisplayStyle;
 		}
    	else if (this.props.page === 'STORIES') {
			style = {  fill:"rgb(3,103,70)", left:"1130px"  };
			homeStyle= homeDisplayStyle ;
		}
    	var triangleStyle = { strokeWidth: "px"};

    	var triangle = 
    			<svg className="triangle" style={style}>
		  			<polygon points="0,0 54,0 27,50" style={triangleStyle} />
				</svg>;
		var home=
				<img alt='' src="css/heididesigns/AQT_LA_TouchScreen_logo_v3-01.png" style= {homeStyle} onClick={() => this.props.onClick('AQTTable')}/>;
	  return (
	  		<div className="button_holder">
 				{triangle}
				<button className="naviBtn aboutBtn" onClick={() => this.props.onClick('ABOUT')}>ABOUT</button>
	            <button className="naviBtn exploreBtn" onClick={() => this.props.onClick('EXPLORE')}>EXPLORE</button>
				<button className="naviBtn namesBtn" onClick={() => this.props.onClick('NAMES')}>NAMES</button>
	            <button className="naviBtn storiesBtn" onClick={() => this.props.onClick('STORIES')}>STORIES</button>
	          
				{home}
            </div>
            );
	}
}
 	//<!--
	           //	<button className="naviBtn namesBtn" onClick={() => this.props.onClick('NAMES')}>NAMES</button>
	           // <button className="naviBtn storiessBtn" onClick={() => this.props.onClick('STORIES')}>STORIES</button>
	           // -->
			   export default FooterBox;



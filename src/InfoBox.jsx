import React from 'react';
import InfoList from './InfoList.js';


class InfoBox extends React.Component{
	render() {
		var style = {
			display: "block",
    		width: "70%",
    		paddingLeft: "140px",
    		fontFamily: "gotham",

		};
	  return (
		<div style={style} >
			<h1>{this.props.title}</h1>
			<h2>{this.props.subtitle}</h2>
			<InfoList info={this.props.info}/>
		</div>
	  );
	}
}

export default  InfoBox;

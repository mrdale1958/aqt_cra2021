import React from 'react';
import Info from './Info.js';

class InfoList extends React.Component{
	
    render() {		var fauxkey = 0;
		var infoNodes = this.props.info.map(
			function (infoblob) {
				return (
				<Info key={fauxkey++} buttontext={infoblob.buttontext} mdtext={infoblob.text} >
				</Info>
				);
			}
		);
		return (
			<div className="infoList">
				{infoNodes}
			</div>
		);
	}
};

export default  InfoList;

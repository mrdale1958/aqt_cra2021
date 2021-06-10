import React from 'react';
import AboutList from './AboutList.js';

var about = [
					{ text: "UT Dallas"},
					{ text: "UIowa"},
					{ text: "NAMES"},
					{ text: "NEH"},
					
				];

var aboutStyle = {
    display: "none",
    paddingLeft: "140px",
    width: "70%"
};

var AboutBox = React.createClass({
	render: function() {
	  return (
		<div className="aboutBox" id="aboutbox" style={aboutStyle} >
			<h1>About the AIDS Quilt Touch Project</h1>
			<AboutList about={about}/>
		</div>
	  );
	}
  });
module.exports = AboutBox;


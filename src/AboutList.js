import React from 'react';
import About from './About.js';

var AboutList = React.createClass({
	render: function() {
		var aboutNodes = this.props.about.map(function (about) {
		return (
			<About key={about.text} >
				{about.text}
			</About>
		);
	});
	return (
			<div className="aboutList">
				{aboutNodes}
			</div>
		);
	}
});

module.exports = AboutList;

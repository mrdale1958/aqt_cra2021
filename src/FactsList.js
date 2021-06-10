import React from 'react';
import Fact from './Fact.js';

var FactsList = React.createClass({
	render: function() {
		var factNodes = this.props.facts.map(function (fact) {
		return (
			<Fact>
				{fact.text}
			</Fact>
		);
	});
	return (
			<div className="factsList">
				{factNodes}
			</div>
		);
	}
});

module.exorts = FactsList;

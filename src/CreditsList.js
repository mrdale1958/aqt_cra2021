import React from 'react';
import Credit from './Credits.js';

var CreditsList = React.createClass({
	render: function() {
		var creditNodes = this.props.credits.map(function (credit) {
		return (
			<Credit buttontext={credit.buttontext}>
				{credit.text}
			</Credit>
		);
	});
	return (
			<div className="creditsList">
				{creditNodes}
			</div>
		);
	}
});

module.exports = CreditsList;

var React = require('react');
var History = require('./History.js');

var HistoriesList = React.createClass({
	getDefaultProps: function () {
        return { histories: [
                    {buttontext: "foo"}
                    ] };
      },  
      render: function() {
		var historyNodes = this.props.histories.map(function (history) {
		return (
			<History key={history.buttontext} buttontext={history.buttontext}>
				{history.text}
			</History>
		);
	});
	return (
			<div className="historiesList">
				{historyNodes}
			</div>
		);
	}
});

module.exports = HistoriesList;

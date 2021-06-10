import React from 'react';
var marked = require('react-marked');

var History = React.createClass({
  render: function() {
	var rawHistoryMarkup = marked(this.props.children.toString(), {sanitize: true});
	return (
	  <div className="history">
		
		<span dangerouslySetInnerHTML={{__html: rawHistoryMarkup}} />
	  </div>
	);
  }
});

module.exports = History;

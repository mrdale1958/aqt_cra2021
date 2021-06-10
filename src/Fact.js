import React from 'react';

var marked = require('marked');

var Fact = React.createClass({
  render: function() {
	var rawFactMarkup = marked(this.props.children.toString(), {sanitize: true});
	return (
	  <div className="fact">
		
		<span dangerouslySetInnerHTML={{__html: rawFactMarkup}} />
	  </div>
	);
  }
});
module.exports = Fact;
				
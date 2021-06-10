import React from 'react';
var marked = require('react-marked');
var About = React.createClass({
  render: function() {
	var rawAboutMarkup;// = marked(this.props.children.toString(), {sanitize: true});
	return (
	  <div>
		<span dangerouslySetInnerHTML={{__html: rawAboutMarkup}} />
	  </div>
	);
  }
});

module.exports = About;

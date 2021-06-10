import React from 'react';
import BlockPresentation from './BlockPresentation.js';


var BlockView = React.createClass({
				  
	render: function() {
		console.log("BlockView rendering ", this.props);
					return (
					  <div className="blockBox" id="blockbox">
						  <BlockPresentation onClick={this.props.onClick} paneldata={this.props.paneldata} name={this.props.name}/>
					  </div>
					);
  	}
});

module.exports = BlockView;

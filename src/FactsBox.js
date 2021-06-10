import React from 'react';
import FactsList from './FactsList.js';

var facts = [
					{text: "91,000+ NAMES"},
					{text: "5865 BLOCKS  \nEach block measures approx 12 ft x 12 ft and typically includes 8 panels"},
					{text: "54 tons"},
					{text: "football fields"},
					{text: "John"},
					{text: "Paul"},
					{text: "George"},
					{text: "Ringo"}
					
				];

var FactsBox = React.createClass({
	render: function() {
	  return (
		<div className="factsBox" id="factsbox">
			<h1>About The AIDS Memorial Quilt</h1>
			<h2>as of Summer 2015</h2>
			<FactsList facts={facts}/>
		</div>
	  );
	}
  });
module.exports = FactsBox;

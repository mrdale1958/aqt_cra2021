import React from 'react';
import HistoriesList from './HistoriesList.js';

var HistoriesBox = React.createClass({
	render: function() {
	  return (
		<div className="historiesBox" id="historiesbox">
			<h1>History of the AIDS Memorial Quilt</h1>
			<HistoriesList histories={histories}/>
		</div>
	  );
	}
  });
module.exports = HistoriesBox;

import React from 'react';
//import NamedPresentation from './NamedPresentation.js';

/***********************************************************
 *
 *  Names Search Panel 
 *
 ***********************************************************/
var NamesGesturalSearchPanel = React.createClass({
	render: function() { //baz
		return(
			<div className="search_box">
				<div>
					<div id="search_input_box" className="left">
						<div className="embedded_instruction">TO SEARCH BY A COMBINATION OF LETTERS USE THE GESTURE PAD BELOW</div>
						<div className="gesture_box">
							<div className="gesture_field">
								MAKE GESTURES HERE
							</div>
							<div id="back_space">
								<span id="back_space_x">X</span>
								<svg id="bs_icon">
									<polygon points="32,66 64,34 114,34 114,98 64,98"/>
								</svg>
							</div>
							<div id="gesture_help">
								<span id="gesture_help_i">i</span>
					 
								<svg id="help_icon">
									<circle r="39" cx="74" cy="66"  />
								</svg>
							</div>
						</div>
					</div>
					<div id="search_results_box" className="namesBox right">name name name name
						<div id="StatsAndButtons">
							<div id="display">results go here at some point</div>
						</div>
						<div id="name_block_view">
						</div>
					</div>
				</div>
				<div id="browseReturnBtnHolder">
					<button className="innerNaviBtn browseReturn left" onClick={() => this.props.onClick('browse',{line:0})}>Return to Names Browsing</button>
					<button className="innerNaviBtn browseReturn right" onClick={() => this.props.onClick('browse',{line:0})}>Return to Names Browsing</button>
				</div>
			</div>
	
						);
						}
					});
module.exports = NamesGesturalSearchPanel;

/* bogus svg styles
 style="stroke-width: 3px;
fill-opacity: 0;
stroke: white;" 
style="stroke-width: 3px;
fill-opacity: 0;
stroke: white;"
*/

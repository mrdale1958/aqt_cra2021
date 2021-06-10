import React from 'react';
import SquareKeyboard from './SquareKeyboard';
import SearchTextInput from './SearchTextInput.js';
import SearchResults from './SearchResults.js';

/***********************************************************
 *
 *  Names Search Panel 
 *
 ***********************************************************/
 class NamesSearchPanel extends React.Component{
	

	handleClick(button) {

	}

	render() { //baz
		return(
			<div className="search_box">
				<div>
					<div id="search_input_box" className="left">
						<SearchTextInput data={this.state.searchTerms} />
						<button onClick={this.handleClick('doit')} />
						<SquareKeyboard onClick={this.handleClick}/>
					</div>
					<div id="search_results_box" className="namesBox right">
						<SearchResults onClick={this.handleClick}/>
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
};
export default  NamesSearchPanel;

/* bogus svg styles
 style="stroke-width: 3px;
fill-opacity: 0;
stroke: white;" 
style="stroke-width: 3px;
fill-opacity: 0;
stroke: white;"
*/

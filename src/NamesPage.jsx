import React from 'react';
import NamesBox from './NamesBox.js';
import axios from 'axios';
//import { Get } from 'react-axios';
import NamesSearchPanel from './NamesSearchPanel.js';
import NamedPanelView from './NamedPanelView.js';
//import PropTypes from 'prop-types';
//import NamedPresentation from './NamedPresentation.js';
//import InfiniteScroll from 'react-infinite-scroll-component';
//import { scrollToRow } from './NamesBox.jsx';



//var selectedName = null;
//var searching = false;
// var showNamedView = function() {
// 	selectedName = "hmm";
// }
NamesBox.propTypes = {
//dispatch: PropTypes.func.isRequired,
//scrollPos: PropTypes.number.isRequired

};


class NamesPage extends React.Component{

	constructor(props) {
    	super(props);
        this.state = {page: 'BROWSE', pageInitData: {line: 0}, topRow: 0};
    	this.handleClick = this.handleClick.bind(this);
        //this.scrollToRow = this.scrollToRow.bind(this);
	}
	loadNamesFromServer() {
		/*$.ajax({
		  type: "POST",
		  data:  { "action":"namelist", "maxnamescount":"10000"},
		  url: this.props.url,
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
			//for (datum in data) {
			//	console.log('name data: ' + data[datum].AlphaAnchor);
			//	}
			this.setState({records: data});
			//onNamesViewChange(data);

		  }.bind(this),
		  error: function(xhr, status, err) {
			console.error(this.state.url, status, err.toString()); //, xhr.responseText);
		  }.bind(this)
		});*/
		var th = this;
	    this.serverRequest = 
	      axios.get(this.state.url)
	        .then(function(data) {    
	          th.setState({
	            records: data
	          });
	        })
  }
  
  componentWillUnmount() {
    //this.serverRequest.abort();
  }

	componentDidMount() {
		//this.loadNamesFromServer();
		//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}
	getInitialState() {
		//console.log("NameApp init " + dummynames);
		return {records: [
					{"PanelFirst":"Ron","PanelLast":"Cornecale","PanelNumber":"05556-1to8","BlockNumber":"5556"},
					{"PanelFirst":"Dee Dee","PanelLast":"Fields","PanelNumber":"05615-3","BlockNumber":"5615"},
					{"PanelFirst":"Jaburn Ron","PanelLast":"Kelly","PanelNumber":"05682-7","BlockNumber":"5682"},
					{"PanelFirst":"Eric ","PanelLast":"S.","PanelNumber":"05722-8","BlockNumber":"5722"},
					{"PanelFirst":"","PanelLast":"Glenn","PanelNumber":"05800-2","BlockNumber":"5800"},
					{"PanelFirst":"","PanelLast":"Mark","PanelNumber":"00839-1","BlockNumber":"839"}
				], 
				searching: false, 
				clickSide: "", 
				url:"all.json" };
	}
   
	handleClick(newpage, data, rownum, domelement) {
		//debugger;
		
        this.setState({page:newpage, topRow:data, pageInitData: data, rownum: rownum});
        //this.state.topRow=data;
        //a=  NamesBox.getState();
        //NamesBox.state.topRow=rownum;
       // this.scrollToRow(this.state.topRow);
       // this.setState({ topRow: parseInt(rownum)});
       // NamesBox.setState({ topRow: parseInt(rownum)});
	}
    
   scrollToRow(rownum) {
        //console.log("scrolltorow", rownum, this.state.topRow, this.state.divs);
        this.setState({topRow:parseInt(rownum), divs: [], newTopRowP: true});
       
    }

	render() {
	//console.log("rendering names app");
		var namedview = null;

		var namesearchview = null;

		var namesview = null;

		//var selectedName = this.state ? this.state.selectedName : null;

		//var searchingP = this.state ? this.state.searching : false;
		if (this.state.page === 'NAMED') {
            //data= this.state.pageInitData;
			namedview = <NamedPanelView 
					//url="../QuiltService.php" 
					paneldata = {this.state.pageInitData}
					panelID="00001-1" 
					//recordID={recordID} 
					// name={name} ******second name is wrong what should it be?
                    rownumber={this.state.rownum}
					onClick={this.handleClick}/>
		}
		else if (this.state.page === 'SEARCH') { // might be interesting to remember the last search
			namesearchview = <NamesSearchPanel onClick={this.handleClick}/>
		} else {
            namesview = <NamesBox url="all.json" topRow={this.state.topRow} records={this.state.records} index={this.state.pageInitData} onClick={this.handleClick}/>
		}
		return(
			<div id="names" /*scrollPos={this.props.scrollPos} topRow={this.state.topRow} */>
				{namesview}
				{namesearchview}
				{namedview}
			</div>
               
		);
	}
}

/*	render() {
	  return (
	  	<NamesBox url={'http://localhost/AQTTable/db/QuiltService.php'}/>
	  	);
	}
}*/
export default NamesPage;

				



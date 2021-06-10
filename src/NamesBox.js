import React from 'react';
//import ReactDOM from 'react-dom';
//import NamesList from './NamesList.js';
import axios from 'axios';
//import Alphabet from './Alphabet.js';
import InfiniteScroll from 'react-infinite-scroll-component';

// const dummynames = [
// 					{"PanelFirst":"Ron","PanelLast":"Cornecale","PanelNumber":"05556-1to8","BlockNumber":"5556"},
// 					{"PanelFirst":"Dee Dee","PanelLast":"Fields","PanelNumber":"05615-3","BlockNumber":"5615"},
// 					{"PanelFirst":"Jaburn Ron","PanelLast":"Kelly","PanelNumber":"05682-7","BlockNumber":"5682"},
// 					{"PanelFirst":"Eric ","PanelLast":"S.","PanelNumber":"05722-8","BlockNumber":"5722"},
// 					{"PanelFirst":"","PanelLast":"Glenn","PanelNumber":"05800-2","BlockNumber":"5800"},
// 					{"PanelFirst":"","PanelLast":"Mark","PanelNumber":"00839-1","BlockNumber":"839"}
// 				];

const style = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 40
};

const divs = [
  <div key={1} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
  <div key={2} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
  <div key={3} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
  <div key={4} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
  <div key={5} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
  <div key={6} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
  <div key={7} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
  <div key={8} style={{height: 200, background: `rgb(209, 68, 20)`, ...style}}></div>,
];

export default class NamesBox extends React.Component {
  constructor () {
    super();
    this.state = {divs: divs};
    this.generateDivs = this.generateDivs.bind(this);
  }
   getDefaultState(props) {
        var recordHeight = 36;
        var recordsPerBody = Math.floor((props.height - 2) / recordHeight);
        console.log("NamesList getDefaultState",props);
        return {
            total: props.records.length,
            records: props.records,
            recordHeight: recordHeight,
            recordsPerBody: recordsPerBody,
            visibleStart: 0,
            visibleEnd: recordsPerBody,
            displayStart: 0,
            displayEnd: recordsPerBody * 2,
            lastNameRendered: 0,
            rows: [],
            
        };
    }
	// componentDidMount() {
	// 		React.initializeTouchEvents(true);
	// }
    // componentWillReceiveProps(nextProps) {
    //     this.setState(this.getDefaultState(nextProps));
    //     this.scrollState(this.state.scroll);
    //     if (nextProps.setnewrow.value) 
    //     {
    //     	this.scrollToRow(nextProps.newrow);
	// 	}
    // }
	componentDidUpdate(prevState, prevProps) {
		this.scrollState(this.state.scroll);
		if (this.props.setnewrow.value) 
		    {
		    	this.scrollToRow(this.props.newrow);
			}
	}
    getInitialState() {
        return this.getDefaultState(this.props);
		//return {names: dummynames}; ***** which is it????
    }

    formatNumber(number) {
        return (''+number).split('').reverse().join('').replace(/(...)/g, '$1,').split('').reverse().join('').replace(/^,/, '');
    }
   
	loadNamesFromServer() {
		console.log(this.props.url);
		/*$.ajax({
		  type: "POST",
		  data:  { "action":"namelist", "maxnamescount":"40000"},
		  url: this.props.url,
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
		    //console.log('ajax data: ' + data);
			this.setState({names: data});
		  }.bind(this),
		  error: function(xhr, status, err) {
			console.error(this.props.url, status, err.toString());
		  }.bind(this)
		});*/
		var th = this;
	    this.serverRequest = 
	      axios.get(this.props.url, {
			  params: {
			    action:"namelist", 
			    maxnamescount:"40000"
			  }
			})
	        .then(function(data) {    
	          th.setState({
	            names: data
	          });
	        })
	}

	generateDivs () {
	    let moreDivs = [];
	    let count = this.state.divs.length;
	    for (let i = 0; i < 30; i++) {
	      moreDivs.push(
	        <div key={'div' + count++} style={{height: 200, background: `colors[i % 4]`}}>
	          Div no {count}
	        </div>
	      );
	    }
	    setTimeout(() => {
	      this.setState({divs: this.state.divs.concat(moreDivs)});
	    }, 500);
	  }

	componentWillUnmount() {
    	//this.serverRequest.abort();
  	}

	// getInitialState() {
	// 	return {names: dummynames};
	// }

	//componentDidMount() {
		//this.loadCommentsFromServer();
	//setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	//}

	render() {
		//var clicker = this.props.masterclicker;
	  return (
		<div className="namesBox" id="namesbox">
			<h1>A very long list of names</h1>
			<div className="namesList"  >
				  <InfiniteScroll
			          next={this.generateDivs}
					  dataLength={4000}
			          hasMore={true}
			          height={300}
			          loader={<h4>Loading...</h4>}>
			          {this.state.divs}
			        </InfiniteScroll>

			        
			</div>
			<div id="searchbar">
			</div>
		</div>
	  );
	}
}
//module.exports = NamesBox;
			
/* 				<Alphabet  records={this.props.records} scroller={this.jumpScroll}/>
<NamesList
					  onTouchStart={this.touchhandler}
					  records={this.state.records}
					  total={this.state.total}
					  visibleStart={this.state.visibleStart}
					  visibleEnd={this.state.visibleEnd}
					  displayStart={this.state.displayStart}
					  displayEnd={this.state.displayEnd}
					  recordHeight={this.state.recordHeight}
					  masterclicker={clicker}
					  recordsPerBody={this.state.recordsPerBody}
					  scrollState={this.scrollState}
					  rows={this.state.rows}
					  backClick={this.props.backClick}
				  /> */
/* hope I don't need to deal with this  
	render: function() { //foo
		var clicker = this.props.masterclicker;
		if (this.props.listview)
		{
			console.log("NamesBody, I think ", this.getCount(), this.state.visibleStart, this.state.visibleEnd,  this.state.recordHeight);
			return(
			
			);
        }
        else if (this.props.nameview)
        {
			return(
        	<div className="nameView">
        			<NamedPanelView backClick={this.props.backClick}  paneldata={this.props.paneldata} name={this.props.fullname} />

        	</div>
			);
        }
        else if (this.props.searchview)
        {
			return(
        	<div className="nameSearchView">
        		<NamesSearchPanelView />
        	</div>
			);
        }
        
	}
} */

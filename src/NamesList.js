import { Get } from 'react-axios'
import React from 'react';
import Name from './Name.js';
import InfiniteScroll from 'react-infinite-scroll-component';
var marked = require('marked');

window.global_junk = { lastNameRendered:0, anchor_rows: {} };
var dummynames = [
{"AlphaAnchor":"true","FullName":"Ron Cornecale","PanelFirst":"Ron","PanelLast":"Cornecale","PanelNumber":"05556-1to8","BlockNumber":"5556","RecordNumber":"0"},
{"AlphaAnchor":"false","FullName":"Dee Dee Fields","PanelFirst":"Dee Dee","PanelLast":"Fields","PanelNumber":"05615-3","BlockNumber":"5615","RecordNumber":"1"},
{"AlphaAnchor":"false","FullName":"Jaburn Ron Kelly","PanelFirst":"Jaburn Ron","PanelLast":"Kelly","PanelNumber":"05682-7","BlockNumber":"5682","RecordNumber":"2"},
{"AlphaAnchor":"true","FullName":"Eric S.","PanelFirst":"Eric ","PanelLast":"S.","PanelNumber":"05722-8","BlockNumber":"5722","RecordNumber":"3"},
{"AlphaAnchor":"false","FullName":"Glenn","PanelFirst":"","PanelLast":"Glenn","PanelNumber":"05800-2","BlockNumber":"5800","RecordNumber":"4"},
{"AlphaAnchor":"true","FullName":"Mark","PanelFirst":"","PanelLast":"Mark","PanelNumber":"00839-1","BlockNumber":"839","RecordNumber":"5"}
];



var NamesList = React.createClass({
	getInitialState: function() {
		return {
			shouldUpdate: true,
			total: 0,
			displayStart: 0,
			displayEnd: 0,
			anchorRows: {}
		};
	},

	componentWillReceiveProps: function(nextProps) {
		var shouldUpdate = !(
			nextProps.visibleStart >= this.state.displayStart &&
			nextProps.visibleEnd <= this.state.displayEnd
			) || (nextProps.total !== this.state.total);

		if (shouldUpdate) {
			this.setState({
				shouldUpdate: shouldUpdate,
				total: nextProps.total,
				displayStart: nextProps.displayStart,
				displayEnd: nextProps.displayEnd
			});
		} else {
			this.setState({shouldUpdate: false});
		}
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		return this.state.shouldUpdate;
	},

	

	render: function() {
		var buildRows = function(data, displayStart, displayEnd, masterclicker) {
		var rows = [];
		//console.log("rendering data", data)
		rows['words314159'] = "hmmm";
		//this.props.records = data;
		//for (var i = displayStart; i < displayEnd; ++i) {
		for (var i = 0; i < 5; ++i) {
				var theRow = data[i];
            //console.log(theRow);
            if (theRow && theRow.length > 0) 
            {
            	//console.log("loading row", theRow, "from memory", theRow.length);
            	var theRowSorted = theRow.sort(function(a,b){
            		return a.xloc-b.xloc
            	});
            	var this_row = [];
            	for (var key in theRowSorted)
            	{
            		var record = theRowSorted[key].data;
            		var FullNameMarkup = marked(record.FullName.toString());
            		//console.log("FullNameMarkup marked", FullNameMarkup)
            		var clicker = masterclicker;
            		if (record.AlphaAnchor.toString() != "1")
            		{ 
            			this_row[key] = (
            				<div className="nameNode" key={key}>
            				<Name  record={record} masterclicker={clicker} records={data}></Name>
            				</div>
            				);
            		}
            		else
            		{
            			var firstLetterLabel = 'letterIndex_' + record.FullName.toString()[0];
            			global_junk.anchor_rows[firstLetterLabel] = i;
            			this_row[key] =  (
            				<div className="nameNode"  key={key}>
            				<a id={firstLetterLabel} className="letterAnchor"/>
            				<Name record={record} masterclicker={clicker}></Name>
            				</div>
            				);
            		}
            	}
            	rows['words' + i] = { id: 'words' + i, text: this_row};
            	console.log(rows['words' + i], 'words' + i);
            }
        }
        const renderedRows = rows.map((row) =>
        	{ console.log("rendering",row.id);
        	return (<div className="nameRow" key={row.id}>
            		{row.text}
            		</div>
            		);
        });
        return renderedRows;

		}
		console.log("NamesList rendering", this.props.displayStart, this.props.displayEnd, this.props.total); 
		//rows.top = (
		/*rows['top'] = (
			<div id="gridgridrectop" line="top" style={{height: this.props.displayStart * this.props.recordHeight}}>
			<div ></div>
			</div>
			);*/
			 var topHeight = this.props.displayStart * this.props.recordHeight;
        topHeight = topHeight ? topHeight : "0px";
        var bottomHeight = (this.props.total - this.props.displayEnd) * this.props.recordHeight;
        bottomHeight = bottomHeight ? bottomHeight : "1080px";
        //rows.bottom = (
        /*rows['bottom'] = (
        	<div id="gridgridrecbottom" line="bottom" style={{height: (this.props.total - this.props.displayEnd) * this.props.recordHeight}}>
        	<div ></div>
        	</div>
        	);*/

        	return (
        		<div>
        		<div id="namesList">
	        		<div id="gridgridrectop" data-line="top" style={{height: topHeight}}>
	        			<div ></div>
	        		</div>
					<div>
        			<Get url="all.json">
			        {(error, response, isLoading) => {
			          if(error) {
			            return (<div>Something bad happened: {error.message}</div>)
			          }
			          else if(isLoading) {
			            return (<div><div>some dummy data
			          		{buildRows(dummynames, 
			            	this.props.displayStart, 
			            	this.props.displayEnd, 
			            	this.props.masterclicker)}</div></div>)
			          }
			          else if(response !== null) {
			            return (<div>some data
			            	{buildRows(response.data, 
			            	this.props.displayStart, 
			            	this.props.displayEnd, 
			            	this.props.masterclicker)}</div>)
			          }
			          return (<div>some dummy data
			          		{buildRows(dummynames, 
			            	this.props.displayStart, 
			            	this.props.displayEnd, 
			            	this.props.masterclicker)}</div>)
			        }}
			      	</Get>
     				</div>
        			<div id="gridgridrecbottom" data-line="bottom" style={{height: bottomHeight}}>
	        			<div ></div>
	        		</div>
	        	</div>
	        	</div>
        		);
        }
    });
/* naive
					render: function() {
						var i = 0;
						var nameNodes = this.props.names.map(function (name) {
						return (
							<Name key={i++}>{name}</Name>
						);
					});
					return (
							<div className="namesList">
								{nameNodes}
							</div>
						);
					}
				});
				*/
				module.exports = NamesList;	


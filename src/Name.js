import React from 'react';
import marked from 'marked';

var Name = React.createClass({
    componentWillReceiveProps: function(nextProps) {
        //this.setState(this.getDefaultState(nextProps));
        //this.scrollState(this.state.scroll);
        //console.log("Name node got ", nextProps);
    },
    componentDidUpdate: function( prevProps, prevState ) 
    {
    },
    componentWillUnmount: function() 
    {
    	//this.props.record.row = -1;
    	//console.log("Name unmounted:", this.props.record.FullName);
    	
    },
	handleclicks: function(event) 
	{
		var blocknumber = React.findDOMNode(this.refs.blocknumber).value.trim();
		var panelnumber = React.findDOMNode(this.refs.panelnumber).value.trim();
		var recordnumber = React.findDOMNode(this.refs.recordnumber).value.trim();
		var fullname = React.findDOMNode(this.refs.fullnametag).value.trim();
		var displaynode = React.findDOMNode(this.refs.fullname);
		var curYPos = displaynode.offsetParent.scrollTop - displaynode.offsetTop;
		console.log("name click " + blocknumber + " " +  panelnumber + " " + recordnumber + " ypos:" + curYPos + "content" + displaynode.children); 
		this.props.masterclicker(fullname, panelnumber, recordnumber);
	},
  render: function() {
    /*if (this.props.children.PanelLast.toString() == '1') this.props.children.PanelLast = '';
	var FirstNameMarkup;// = marked(this.props.children.PanelFirst.toString() +' '+ this.props.children.PanelLast.toString(), {sanitize: true});
	return (
	  <div className="name" target={this.props.children.BlockNumber.toString()} href={this.props.children.PanelNumber.toString()} >
		<span dangerouslySetInnerHTML={{__html: FirstNameMarkup}} />
	  </div>
	); */
		var FullNameMarkup = marked(this.props.record.FullName.toString());
		//console.log("Name marked up", FullNameMarkup);
		return (
				<div  className="name" onClick={() => this.props.onClick('NAMED',this.props.record,this.props.row, this.refs.element)} ><span dangerouslySetInnerHTML={{__html: FullNameMarkup}} /></div>
				/*<input type="hidden" ref="fullnametag" value={this.props.record.FullName.toString()} />
				<input type="hidden" ref="blocknumber" value={this.props.record.BlockNumber.toString()} />
				<input type="hidden" ref="panelnumber" value={this.props.record.PanelNumber.toString()} />
				<input type="hidden" ref="recordnumber" value={this.props.record.RecordNumber.toString()} />							
*/
		);

  }
});

export default  Name;	


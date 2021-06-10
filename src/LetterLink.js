import React from 'react';
import $ from 'jquery';
//import NamedPresentation from './NamedPresentation.js';


class LetterLink extends React.Component{
	
	scrollToLink(event) {
		var letterindex = React.findDOMNode(this.refs.letterref).value.trim();
		console.log("need to scroll to ", letterindex);
		var linkid = "#letterIndex_"+letterindex;
		if ($(linkid).length>0)
		{
			var letteranchortop = $(linkid).position().top;
			var listtop = $(".namesList").scrollTop();
			$(".namesList").scrollTop(listtop + letteranchortop);
		}
		else
		{
			this.props.scroller(window.global_junk.anchor_rows[linkid]);
		}
		
	}
    onItemClick(event) {
                                   
            //event.currentTarget.style.backgroundColor = '#ccc';
			//var link = this.props.linkletter ? this.props.linkletter.toString() : "0";
			// line:link; *******what was this supposed to do???
                
                                   
    }
                                   
	render() {
		//var myLink = document.getElementById('namedBackTriangle');
           
	// console.log("LetterLink rendering", this.props);
		var link = this.props.linkletter ? this.props.linkletter.toString() : "0";
		var letter = this.props.children ? this.props.children.toString() : "FOO";
                   //link="1000";
                //letter="G";
		return(
               
        //myLink.onClick= function(){return(this.props.onClick('BROWSE', {line: "8000" /*link*/}) );}
        
		<div onClick={() => this.props.onClick('BROWSE', {line: Number(link)})} className="letter" >{letter}
			<input type="hidden" ref="letterref" value={letter} />
               </div>
               );
       
	}
};
export default  LetterLink;	

import React from 'react';
import LetterLink from './LetterLink.js';

export default class SquareKeyboard extends React.Component {

constructor(props) {
    	super(props);
    	this.state = {page: 'BROWSE', pageInitData: {line: 0}, };
    	this.handleClick = this.handleClick.bind(this);
	}
	render() {
		var alphabet = ["Top"];
		alphabet = alphabet.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
		alphabet.push("Bottom");
		var  records=this.props.records;
		var scroller=this.props.scroller;
		var _this = this;
		var letterlinks = alphabet.map( function(letter) {
			return (<LetterLink  onClick={_this.props.onClick} key={letter} records={records} scroller={scroller}>{letter}</LetterLink>);
			});
		return(
<div id="square_keyboard">
{letterlinks}
</div>
		);
	}
 }


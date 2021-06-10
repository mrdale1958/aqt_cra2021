import React from 'react';
import LetterLink from './LetterLink.js';
import SearchLink from './SearchLink.js';

var Alphabet = React.createClass(
{

	render: function() 
	{
	//console.log("Alphabet rendering", this.props);
		var alphabet = ["Top"];
		alphabet = alphabet.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
		alphabet.push("Bottom");
		var records=this.props.records;
		var alphalinks = {"Top":0,"Bottom":records.length - 13};
		var row0 = records[0];
		//console.log(row0);
		// var name0 = row0[0];
		//console.log(name0);
		//console.log(name0.xloc);
		for (var r in records) {
			let namerecords = records[r];
			for (var n in namerecords) {
				let namerecord = namerecords[n];
				//console.log(r, n, namerecord)
				if (namerecord.data.AlphaAnchor && namerecord.data.AlphaAnchor.toString() === "1")
				{			
					alphalinks[namerecord.data.FullName.toString()[0]] = Number(r);
				}
			}
			//console.log(r, record);
			
		}
		//debugger;
		//var scroller=this.props.scroller;
		var _this = this;
		var letterlinks = alphabet.map( function(letter) {
			//console.log("mapping LetterLink",letter,alphalinks[letter])
			return (<LetterLink  onClick={_this.props.onClick} key={letter} linkletter={alphalinks[letter]} >{letter}</LetterLink>);
			});
	//console.log("Alphabet rendering", alphalinks, letterlinks);

		return(
<div id="alphabet">
<SearchLink onClick={this.props.onClick} />
{letterlinks}
<SearchLink onClick={this.props.onClick} />
</div>
		);
	}
}
);

export default Alphabet;	

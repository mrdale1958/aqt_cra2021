import React from 'react';
import QuiltBlock from './QuiltBlock.js';


var BlockPresentation = React.createClass({
	render: function() {
		console.log("BlockPresentation   rendering ", this.props);
		var secondaryNodes;
		var theBlock = this.props.blockdata;
		var theSource = 'BROWSE';
		/*if (this.props.paneldata && this.props.paneldata.FullName !== this.props.name) 
		{
			debug;
		   secondaryNodes = this.props.paneldata.map(function (panel) {
			  if (panel.FullName === theName) 
			  {
			  	thePanel = panel;
			  	
			  }
			});
		}
		else
		{
			thePanel = this.props.paneldata;
		}*/
		//var imgsrc = 'http://atecquilt.utdallas.edu/quiltdata/quilt512/'+('00000'+thePanel.BlockNumber).substring(thePanel.BlockNumber.length)+'_512.jpg';
		var imgsrc = 'http://quilt.utdallas.edu/quiltdata/quilt512/'+('00000'+thePanel.BlockNumber).substring(thePanel.BlockNumber.length)+'_512.jpg';
		return (
		  <div id="BlockView">
			  <h1>{theBlock.number}</h1>
			  <div className="nameData">
			  	<div className="block_image">
			  		<img  src={imgsrc} width={512} height={512}  />
			  	</div>
			  	<QuiltBlock blockdata={theBlock} >  </QuiltBlock>
			  </div>
			  <div id="blockBack" onClick={() => this.props.onClick(theSource)}>
				<svg id="blockBackTriangle">
						<polygon points="28,48 71,22 71,74"  />
				</svg>
			   </div>
		  </div>
		  );
	  }
		  });

module.exports = BlockPresentation;

/*  <div id="namedBack" onClick={() => this.props.onClick(theSource)}>
				<svg id="namedBackTriangle">
						<polygon points="28,48 71,22 71,74"  />
				</svg>
			   </div>
			 */
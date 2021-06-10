import React from 'react';
import NamePanel from './NamePanel.js';

class NamedPresentation extends React.Component{

    
	render() {
		//console.log("NamedPresentation   rendering ", this.props);
		// var secondaryNodes;
		// var theName = this.props.name;
		var thePanel = this.props.paneldata;
        var theRow = this.props.rownumber;
       
                                        
                                          
        // var theSource = 'BROWSE';// ('BROWSE', {line: "1000"/*link*/});
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
		var imgsrc = 'http://quilt.utdallas.edu/quiltdata/quilt512/'+('00000'+thePanel.BlockNumber).substring(thePanel.BlockNumber.length)+'_512.jpg';
       // var link = LetterLink.props.linkletter ? LetterLink.props.linkletter.toString() : "0";
		return (
		  <div id="NamePanelView">
			  <h1>{thePanel.FullName}</h1>
			  <div className="nameData">
			  	<div className="block_image">
			  		<img  alt='' src={imgsrc} width={512} height={512}  />
			  	</div>
			  	<NamePanel paneldata={thePanel} >  </NamePanel>
			  </div>
                <div id="namedBack" onClick={() => this.props.onClick('BROWSE',{line: theRow},{theRow})}>
                <svg id="namedBackTriangle">
						<polygon points="28,48 71,22 71,74"  />
				</svg>
			   </div>
		  </div>
		  );
	  }
};

export default NamedPresentation;

/*  <div id="namedBack" onClick={() => this.props.onClick(theSource)}>
				<svg id="namedBackTriangle">
						<polygon points="28,48 71,22 71,74"  />
				</svg>
			   </div>
			 */

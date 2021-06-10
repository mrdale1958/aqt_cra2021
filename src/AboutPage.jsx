import React from 'react';
import InfoBox from './InfoBox.jsx';
//import axios from 'axios';

var credits = [
	{buttontext: "The Public Interactives Research Lab", text: "<b>School of Art, Technology, and Emerging Communication, The University of Texas at Dallas</b><br>Principal Investigators: Anne Balsamo and Dale MacDonald<br>Research Faculty: Angela Ferraiolo <i>Sarah Lawrence College</i><br>Research Assistants: David Wilson, Leticia Ferreira De Souza, Sean Landers"},
	{buttontext: "The Studio for Digital Humanities and Art", text: "<b>University of Iowa</b><br>Principal Investigator: Jon Winet<br>Research-Design Team: Mark NeuCollins, Heidi Wiren Bartlett"},
	//{buttontext: "MATRIX: Center for Digital Humanities and Social Sciences", text: "<b>Michigan State University</b><br>Director:  Dean Rehberger<br>Director, The Quilt Index:  Marsha McDowell"},
	{buttontext: "Generously supported by:", text: "The NAMES Project Foundation<br>National Endowment for the Humanities<br>School of Art, Technology, and Emerging Communication, The University of Texas at Dallas<br>The University of Iowa"}
	
];
var creditsTitle = "AIDS Quilt Touch Team";
var creditsSubTitle = "";

var histories = [
                { text: "The AIDS Memorial Quilt is a unique work of cultural heritage that reflects the worldwide scope and personal impact of the AIDS pandemic." },
					{ text: "The AIDS Quilt simultaneously functions as a living memorial, an intimate tribute to lives lost, and the largest collaborative artwork in the world. " },
					{ text: "The first panels of the Quilt were created in 1987 by activists in San Francisco to commemorate the friends—mostly young gay white men—who were dying from unknown illnesses. " },
					{ text: "The first 1,920 panels of the Quilt were laid out on the Mall of Washington as part of the National March on Washington for Lesbian and Gay Rights held in October 1987." },
					{ text: "As of 2017, the Quilt commemorates more than 100,000 names of people who have died of AIDS in the US and throughout the world." },
					{ text: "Encountering the Quilt is always a moving experience. The size of the Quilt is staggering.  Each panel of the Quilt measures 3 feet by 6 feet; every panel is stitched into a 12-foot by 12-foot block.  The Quilt now includes more than 49,000 panels stitched into 6000 blocks." },
					{ text: "The impact of the Quilt is immeasurable; it can be read in each individual panel, where the stories of tens of thousands of people—those who died and those who lovingly created the panels—are literally stitched into a vibrant and poignant cultural memorial. "},
                ];

var historiesTitle = "History of the AIDS Memorial Quilt";
var historiesSubTitle = "as of Spring 2017";

var facts = [
					{text: "The 1987 display of the Quilt included 1,920 panels."},
					{text: "The 1988 display of the Quilt included 8,288 panels. "},
					{text: "The Washington, D.C. displays of October 1987, 1988, 1989, 1992 and 1996 are the only ones to have featured the Quilt in its entirety."},
					{text: "By 1996 the Quilt grew in size to include 40,000 panels.  This represents an increase of more than 2000% in a mere 9 years."},
					{text: "Since its first display in 1987, the Quilt has been seen by more than 25,000,000 visitors."},
					{text: "As of 2017, the Quilt includes more than 49,000 panels and 6000 blocks.  It weighs 34 tons. "},
					{text: "As many as 3,000 blocks of the Quilt are displayed every year in locations across the US and throughout the world."},
					//{text: "The Quilt includes panels from every state in the US, and from 28 countries worldwide."},
					{text: "If the Quilt were laid out for display it would cover more than 1.3 million square feet. "},
					{text: "If a person spent only 1 minute visiting each panel, it would take 33 days to view the Quilt in its entirety."},
					
				];

var factsTitle = "About The AIDS Memorial Quilt";
var factsSubTitle = "as of Spring 2017";


class AboutPage extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {infoblock: 'FACTS'};
    	this.handleClick = this.handleClick.bind(this);
	}

	handleClick(newinfoblock)
	{
		this.setState({infoblock: newinfoblock});
	}
	componentWillMount() {
		//var _this = this;
		console.log("grabbing auth");
	    // this.serverRequest = 
	    //   axios
	    //   .get("http://quilt.utdallas.edu/collectiveaccess/providence/service.php/find/ca_objects?q=*&pretty=1",
	    //     //.get("http://atecsandbox.utdallas.edu/collectiveaccess/testbed/providence-1.7.3/service.php/auth/login", 
	    //     		{ 
	    //     			//headers: {'Authorization': btoa("mobile:mobile")},
		// 	        	"bundles" : {
		// 				"access" : { "convertCodesToDisplayText" : true },
		// 				"status" : { "convertCodesToDisplayText" : true },
		// 				"ca_entities.entity_id" : {"returnAsArray" : true }
		// 	}})
	    //     .then(function(result) {  
		// 		console.log("loaded all.json", result.data);

		//         _this.setState({
		//             divs: [],
		//             records: result.data
		//         });
		//         _this.generateDivs();
	    //     })
	}
	render() {
		var activeBox = <div></div>;
		var info, title, subtitle, video;
		if (this.state.infoblock === 'FACTS')  {
			info=facts;
			title = factsTitle;
			subtitle = factsSubTitle;
		}
		else if (this.state.infoblock === 'HISTORY')   {
			info=histories;
			title = historiesTitle;
			subtitle = historiesSubTitle;
		}
		else if (this.state.infoblock === 'CREDITS')   {
			info=credits;
			title = creditsTitle;
			subtitle = creditsSubTitle;
			video = '<iframe _ngcontent-c6="" allowfullscreen="" frameborder="0" height="360" src="https://www.youtube.com/embed/BSE7SaoR_mM?enablejsapi=1" width="640"></iframe>';
		}
		else {
			info=[{text: 'wtf'}];
			title = 'WTF';
			subtitle = 'sWTF';
		}
		activeBox = <InfoBox info={info} title={title} subtitle={subtitle} video={video}/>;

	  return (
	  	<div id="about">
	  		{activeBox}
			<div id="infobuttons">
				<button className="innerNaviBtn factsinner" onClick={() => this.handleClick('FACTS')}>FACTS</button>
				<button className="innerNaviBtn historyinner" onClick={() => this.handleClick('HISTORY')}>HISTORY</button>
				<button className="innerNaviBtn creditsinner" onClick={() => this.handleClick('CREDITS')}>CREDITS</button>
				
        	</div>
		</div>
	  	);
	}
}
export default AboutPage;
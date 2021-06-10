
import React from 'react';
//import ReactDOM from 'react-dom';
//import  InstructionsBox from './InstructionsBox.js';
//import  HistoriesBox from './HistoriesBox.js';
//import  AboutBox from './AboutBox.js';
//import  NamesBox from './NamesBox.js';
import  AboutPage from './AboutPage.jsx';
import  ExplorePage from './ExplorePage.jsx';
import  NamesPage from './NamesPage.jsx';
import  StoriesPage from './StoriesPage.jsx';
import FooterBox from './FooterBox.js';
import QuickFact from './QuickFact.js';



class AQTTable extends  React.Component{
	constructor(props) {
    	super(props);
    	this.state = {page: 'ABOUT:', showQFp: false};
    	this.handleClick = this.handleClick.bind(this);
		this.toggleQF = this.toggleQF.bind(this);
		
	}
	handleClick(newpage) {
  		this.setState({page:newpage});
	}
	toggleQF() {
		this.setState({showQFp:!this.state.showQFp});
		
	   }
	render() {
		var page;
		var showQF;
		if(this.state.showQFp)
		{
			showQF=<QuickFact />;
		}
		else 
		{
			showQF=<div></div>;
		}

		if (this.state.page === 'NAMES') page = <NamesPage /> ;
		else if (this.state.page === 'ABOUT') page = <AboutPage /> ;
		else if (this.state.page === 'EXPLORE') page = <ExplorePage 
			image={process.env.PUBLIC_URL + "pyramids/uber_quilt_100x65.dzi" }
		/>
									//image="http://atecquilt.utdallas.edu/quiltdata/deepzoom/master01.dzi" 

		else if (this.state.page === 'STORIES') page = <StoriesPage /> ;
		else {
			page = 	<div id="innerMain">
						<div id="main_title" className="home">
							<span className="thick_title">AIDS</span>
							<span className="thick_title">QUILT</span>
							<span className="thin_title">TOUCH</span>
							<span><img alt='' src="css/heididesigns/AQT_LA_TouchScreen_logo_v3-01.png" onClick = {this.toggleQF}/></span>
							{showQF}
						</div>
						
					</div>;

		}
	  return (
    <div id="main">
    	{page}
      	<FooterBox className='footer' page={this.state.page} onClick={this.handleClick}/>
    </div>
/*	
    	/* <InfoButtonsBox /> 
<div id="names">
		<div style="overflow:auto;">
			<div id="SearchForm">
				<form method="post" action="QuiltService.php">
				<input type="hidden" name="action" value="namesearch">
				Search : <input type="text" name="searchterm" id="searchterm" autocomplete="off"
				value="">
				<br/>Max number of names to list : <input type="text" name="maxnamescount" id="maxnamescount" autocomplete="off"
				value="20">
				</form>
			</div>
			<div id="names_holderAjax"></div>
			<NamesBox />
			<div id="StatsAndButtons">
				<div id="display">results go here at some point</div>
			</div>
		</div>
	</div>
    <div id="block_view"></div>
    <div id="tours"></div>
    <div id="deep_zoom"></div>
    <footer className="buttons_holder">
		<div className="button_holder">
           <button className="about">ABOUT</button>
        </div>
		<div className="button_holder">
           <button className="explore">EXPLORE</button>
        </div>
		<div className="button_holder">
           <button className="names">NAMES</button>
        </div>
		<div className="button_holder">
           <button className="tours">TOURS</button>
        </div>
		<div className="button_holder">
           <button className="threads">THREADS</button>
        </div>
		<span className="stretch"></span>
	</footer>	*/
	  );
	}
  }


export default AQTTable;


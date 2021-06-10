import React from 'react';
//import FactsList from './FactsList.js';
/*backgroundImage: "threads/assets/images/backgrounds/sewing_machines_bak_dark.jpg",
						audioFile: "assets/threads/aids-activism/audio/.mp3",
						videoFile: "https://player.vimeo.com/video/"
						titleText: "",
						subtitleText: "",
						headingText: "",
						textBlock: [],
						quotes: [
							{
							quoteText: [""],
							quoteByline: ""
							}
						],
						image: "threads/assets/aids-/images/.jpg"
						*/

class ThreadsBox extends React.Component{

	constructor(props) {
		super(props);
        this.state = {
        	slideCount: props.thread.length,
			currentSlide: 0,
			slides: props.thread,
			title: this.props.thread[0].titleText,
		};
    	this.handleClick = this.handleClick.bind(this);	 
    }
		

	handleClick(direction) {
		if (direction === 'NEXT') {
			this.setState({currentSlide: this.state.currentSlide+1});
		} else if (direction === 'BACK') {
			this.setState({currentSlide: this.state.currentSlide-1});
		} else debugger;
	}
	render() {
		var audioDiv, videoDiv, subtitleDiv, headingDiv,textDiv,quotesDiv,imageDiv;
		var backArrow = (<div id="threadBack" />);
		if (this.state.currentSlide > 0)
			backArrow = (<div id="threadBackArrow" onClick={() => this.handleClick('BACK')}>
			                <svg className="threadTrianglebg">
									<polygon points="25,48 74,18 74,78"  />
							</svg>
							<svg className="threadTriangle">
									<polygon points="28,48 71,22 71,74"  />
							</svg>
						   </div>);
		var nextArrow = (<div id="threadNext" />);
		if (this.state.currentSlide < (this.state.slideCount - 1))
			nextArrow = (<div id="threadNextArrow" onClick={() => this.handleClick('NEXT')}>
			                <svg className="threadTrianglebg">
									<polygon points="118,48 68,18 68,78"  />
							</svg>
							<svg className="threadTriangle">
									<polygon points="114,48 71,22 71,74"  />
							</svg>
						   </div>);
		var theSlide = this.state.slides[this.state.currentSlide];
		if (theSlide.audioFile) {
			audioDiv = (<div key={'audio' + this.state.currentSlide.toString()} className='threadAudio'>
							<audio  autoPlay="true">
								<source src={theSlide.audioFile}/>
							</audio>
						</div>);
		}
		if (theSlide.videoFile) {
			videoDiv = (<div key="video" className='threadVideo'><video width="1120px" height="630px" controls autoplay><source src={theSlide.videoFile}/></video></div>);
		}
		if (theSlide.subtitleText) {
			subtitleDiv = (<div key="subtitleText" className='threadSubtitle'>{theSlide.subtitleText}</div>);
		}
		if (theSlide.headingText) {
			headingDiv = (<div key="headingText" className='threadHeading'>{theSlide.headingText}</div>);
		}
		if (theSlide.textBlock) {
			var texts;
				texts = theSlide.textBlock.map(
				function (textblob, index) {
					return (<div key={"textBlock-" + index} className='threadText'>{textblob}</div>);
				}
			);
		}
		if (theSlide.orientation === "horizontal"){
			textDiv = (<div key="HorizontalTexts" className='threadHorizontalTexts'>{texts}</div>);
		} else {
			textDiv = (<div key="VerticalTexts" className='threadVerticalTexts'>{texts}</div>);
		}
		if (theSlide.quotes) {
			var startQuote;
			if (theSlide.quotes[0].quoteText.length === 1)
				startQuote = (<div key="startQuote" className='threadQuote' dangerouslySetInnerHTML={{__html: '&ldquo;' + theSlide.quotes[0].quoteText[0] + '&rdquo;'}}></div>
					);
			else
				startQuote = (<div key="startQuote" className='threadQuote' dangerouslySetInnerHTML={{__html: '&ldquo;' + theSlide.quotes[0].quoteText[0]}}></div>
					); 
			var endQuote;
			if (theSlide.quotes[0].quoteText.length === 2) {
				endQuote = (<div key="endQuote" className='threadQuote' dangerouslySetInnerHTML={{__html: theSlide.quotes[0].quoteText[1] + '&rdquo;'}}></div>
					);
			} else if (theSlide.quotes[0].quoteText.length === 3) {
				endQuote = (
					<div>
					<div key="endQuote1" className='threadQuote' dangerouslySetInnerHTML={{__html: theSlide.quotes[0].quoteText[1]}}></div>
					<div key="endQuote2" className='threadQuote' dangerouslySetInnerHTML={{__html: theSlide.quotes[0].quoteText[2] + '&rdquo;'}}></div>
					</div>
					);
			} 
			var byline;
			if (theSlide.quotes[0].quoteByline) {
				byline = (<div key="quoteByline" className='threadByline'>&mdash;{theSlide.quotes[0].quoteByline}</div>);
			}

			if (theSlide.orientation === 'horizontal'){
				quotesDiv = (<div key="HorizontalQuotes" className='threadHorizontalQuotes'>
					{startQuote}
					{endQuote}
					{byline}
					
						</div>);
			} else {
				quotesDiv = (<div key="VerticalQuotes" className='threadVerticalQuotes'>
					{startQuote}
					{endQuote}
					{byline}
					
				</div>);
			}
		}
		if (theSlide.image) {
			if (theSlide.orientation === 'horizontal') 
			{			
				imageDiv = (<div key="HorizontalImage" className='threadHorizontalImage'><img className='threadImg' height='530' alt='' src={theSlide.image } /></div>);
			} else {			
				imageDiv = (<div key="VerticalImage" className='threadVerticalImage'><img className='threadImg' height='750' alt='' src={theSlide.image} /></div>);
			} 
		}
		
	  return (
	  	<div>
		 	{backArrow}
			<div className="ThreadsBox" id="threadsbox" style = {{backgroundImage: 'url(' + this.props.thread[this.state.currentSlide].backgroundImage + ')'}}>
		 		<div className="threadTitle" dangerouslySetInnerHTML={{__html: this.state.title}}></div>
		 	</div>
		 	{audioDiv}
		 	{videoDiv}
			{subtitleDiv}
			{headingDiv}
			{textDiv}
			{quotesDiv}
			{imageDiv}
			{nextArrow}
			
		</div>
		 
	  );
	}
  }
export default ThreadsBox;

import React from 'react';
import Info from './Info.js';

class TOCBox extends React.Component{

	render() {
		var fauxkey = 0;
		var self = this;
		var thumbnailNodes;
		if  (this.props.storytype==='TOURS') {
			thumbnailNodes = this.props.info.tours.map(
				function (infoblob) {
					return (
						<div className='tourThumbnail' key={fauxkey++} >
							<Info mdtext={infoblob.title} buttontext="" >
							</Info>
							<div className='videoThumbnail' onClick={() => self.props.clickHandler('PLAYVIDEO',infoblob.url)}>
								<img alt='' src={infoblob.thumbnail} />
							</div>
						</div>
					);
				}
			);
		} else if (self.props.storytype==='THREADS') { 
			thumbnailNodes = this.props.info.threads.map(
				function (infoblob) {
					return (
						<div key={fauxkey++} className='threadTitle' onClick={() => self.props.clickHandler('PLAYTHREAD',infoblob.slides)}>
							<Info mdtext={infoblob.titleText} buttontext="" >
							</Info>
						</div>
					);
				}
			);	
		} else {
			thumbnailNodes = null;
		}
			
	  return (
		<div className="TOCBox" >
			<div id='TOCTitle'>{this.props.title}</div>
			<div id='threadsTOC'>
			<div className='threadsSubtitle'>{this.props.subtitle}</div>
			{thumbnailNodes}
			</div>
		</div>
	  );
	}
}
export default TOCBox;

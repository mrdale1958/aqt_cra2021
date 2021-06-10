import React from 'react';
//import FactsList from './FactsList.js';
import MovieView from './MovieView.js';



var StoriesBox = React.createClass({
	render: function() {
		if (this.state.page === 'PLAYING') {
			var movieview = <MovieView 
					movie={this.state.nowPlaying} 
					
					onClick={this.handleClick}/>
		}
		else {  /* 'INDEX' */
		  var indexview = <StoriesBox 
		  				//videos={videos} ******** were is videos defiine???? and where is it going???
		  				onClick={this.handleClick}/>
		}
		
		return(
			<div id="stories">
			<div id="stories_slug">
			<h1> are coming soon.</h1>
				
			</div>
				{indexview}
				{movieview}

			</div>
		);
// 	  return (
// 		<div className="StoriesBox" id="StoriesBox">
// 			<h1>{this.props.title}</h1>
// 			<h2>{this.props.subtitle}</h2>
// <iframe src="https://player.vimeo.com/video/217741918" width="100%" height="529" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
// 		<iframe src="https://player.vimeo.com/video/217741791
			

// 		</div>
// " width="100%" height="529" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
// 	  );
// 	}
   }
}
);
export default StoriesBox;

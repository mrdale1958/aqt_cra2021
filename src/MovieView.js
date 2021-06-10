import React from 'react';
//var Vimeo = require('react-vimeo');
// 					


export default class MovieView extends React.Component {

constructor(props) {
    	super(props);
  this.handleClick = this.handleClick.bind(this);

  }
  onError(err) {
    console.error(err);
  };
  	handleClick(newpage, data) {
  		this.setState({page:newpage, pageInitData: data});

	}
	render() {
		var videoDiv = (<video width="1120px" height="630px"  autoPlay="true"><source src={this.props.url}/></video>);
		return(
			<div className='vimeoPlayer'>
			{videoDiv}
			</div>);
		/*return(
			<div className="vimeoPlayer">

			<Vimeo onError={ this.onError } playerOptions={{width:1000, maxwidth:1000, height:760, loop: false}}
					videoId={ this.props.url } autoplay={true} />
			</div>
			);*/
	}
}

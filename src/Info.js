import React from 'react';
//import marked from 'react-marked';


class Info extends React.Component{
	
    render() {

	//const rawInfoMarkup = marked(this.props.mdtext, {renderer: new marked.Renderer(),sanitize: false});
	//console.log(rawInfoMarkup);
	var heading;
	if (this.props.buttontext !== '') heading = <h2>{this.props.buttontext}</h2>;
	return (
	  <div className="info">
		{heading}
		<div dangerouslySetInnerHTML={{__html: this.props.mdtext}} />
	  </div>
	);
  }
};
export default  Info;
				
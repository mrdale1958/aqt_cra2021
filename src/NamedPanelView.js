import React from 'react';
import NamedPresentation from './NamedPresentation.js';

class NamedPanelView extends React.Component{

				  
	render() {
		console.log("NamedPanelView rendering ", this.props);
		return (
			<div className="namedBox" id="namedbox">
				<NamedPresentation onClick={this.props.onClick} paneldata={this.props.paneldata} name={this.props.name} rownumber={this.props.rownumber} />
			</div>
		);
	}
};

export default  NamedPanelView;

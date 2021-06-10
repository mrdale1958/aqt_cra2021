import React from 'react';
import DataField from './DataField.js';


class NamePanel extends React.Component{
	render() {
		console.log("PrimaryNameView rendering ", this.props);
		//theName = this.props.paneldata.FullName;
		if (this.props.paneldata.DeathDate === '0000-00-00') this.props.paneldata.DeathDate = '';
		if (this.props.paneldata.BirthDate === '0000-00-00') this.props.paneldata.BirthDate = '';
		
		return (
		<div>
		<div className="NameMetaView">
			<DataField fieldname={'PanelFirst'} value={this.props.paneldata.PanelFirst} />
			<DataField fieldname={'PanelLast'} value={this.props.paneldata.PanelLast !== "1" ? this.props.paneldata.PanelLast : ""} />
			<DataField fieldname={'PanelListing'} value={this.props.paneldata.PanelListing} />
			<DataField fieldname={'BirthDate'} value={this.props.paneldata.BirthDate} />
			<DataField fieldname={'DeathDate'} value={this.props.paneldata.DeathDate} />
			<DataField fieldname={'MakerFirst'} value={this.props.paneldata.MakerFirst} />
			<DataField fieldname={'MakerLast'} value={this.props.paneldata.MakerLast} />
			<DataField fieldname={'DateRecieved'} value={this.props.paneldata.DateRecieved} />
			<DataField fieldname={'City'} value={this.props.paneldata.City} />
			<DataField fieldname={'OtherCities'} value={this.props.paneldata.OtherCities} />
		</div>
		</div>
		);
	}
};
/*	secondaryNodes = this.props.paneldata.map(function (panel) {
						  if (panel.FullName !== theName) 
						  {
					  		var rawSecondaryNameViewMarkup = marked(panel.FullName.toString(), {sanitize: true});
						  	thePanel = panel;
						  	return(
								<div className="SecondaryNameView" id={thePanel.recordid}>
								  <span dangerouslySetInnerHTML={{__html: rawSecondaryNameViewMarkup}} />
								</div>
						  	);
						  }
						  });
						  */	
						  export default  NamePanel;

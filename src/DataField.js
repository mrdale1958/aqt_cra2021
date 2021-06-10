import React from 'react';
import marked from 'marked';

class DataField extends React.Component{
	render() {
		console.log("DataField rendering ", this.props);
		// var DataViewKeyMarkup = marked(this.props.fieldname.toString(), {sanitize: true});
		if (this.props.value) 
		{
			var DataViewValueMarkup = marked(this.props.value.toString(), {sanitize: true});
			var keystring = this.props.fieldname.toString();
			return (
				<div className="dataView" id={keystring}>
				
					<span className="metavalue" dangerouslySetInnerHTML={{__html: DataViewValueMarkup}} />
				</div>
				);
			}
			else 
			{
			return (
				<div className="dataView" id={keystring}> </div>
			);
		}
	}
};

export default DataField;

//								  <span className="metakey" dangerouslySetInnerHTML={{__html: DataViewKeyMarkup}} />


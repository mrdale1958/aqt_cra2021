import React from 'react';
var marked = require('react-marked');
var Instruction = React.createClass({
    render: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return (
            <div className="instruction">
            <h2 className="instructionButton">
            {this.props.buttontext}
            </h2>
            <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
            </div>
            );
    }
});
module.exports = Instruction;

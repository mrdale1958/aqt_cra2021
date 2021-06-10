import React from 'react';
import InstructionsList from './InstructionsList.js';

var instructionsStyle = {
    "display": "none",
    "width": "50%",
    "marginLeft": "25%",
    "border": "1px",
    "height": "80%",
    "backgroundColor": "rgb(180,40,46)",
    "color": "rgb(255,255,255)",
};

var instructions = [
                {buttontext: "NAMES", text: "A list of names searchable by alphabet or browseable by touch"},
                {buttontext: "LAY OUT", text: "Pinch to zoom; swipe to explore; circle to see more information"},
                {buttontext: "MORE", text: "History, Credits, and Facts about the AIDS Memorial Quilt"},
                {buttontext: "CREDITS", text: ""}

                ];
var InstructionsBox = React.createClass({
    
    render: function() {
    return (
    <div className="instructionsBox" id="instructionsbox" style={instructionsStyle} >
        <h1>The AIDS Memorial Quilt Interactive Browser</h1>
        <InstructionsList instructions={instructions} />
    </div>
    );
    }
    });
module.exports = InstructionsBox;

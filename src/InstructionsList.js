import React from 'react';
import Instruction from './Instruction.js';


var InstructionsList = React.createClass({
    getDefaultProps: function () {
        return { instructions: [
                    {buttontext: "foo"}
                    ] };
      },    
      render: function() {
        var instructionNodes = this.props.instructions.map(function (instruction) {
            return (
                <Instruction key={instruction.buttontext} buttontext={instruction.buttontext}>
                {instruction.text}
                </Instruction>
                );
        });
        return (
            <div className="instructionsList">
            {instructionNodes}
            </div>
            );
    }
});
module.exports = InstructionsList;

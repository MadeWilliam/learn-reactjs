import React, { Component } from 'react';
import Box from '../box/Box';
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: [
            "purple",
            "magenta",
            "teal",
            "pink"
        ]

    }

    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() =>
            <Box colors={this.props.allColors} />
        )
        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        );
    }
}

export default BoxContainer;
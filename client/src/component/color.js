import React, { Component } from 'react';

class Color extends React.Component {
    render() {
        let style = {
            backgroundColor: this.props.hexCode,
            height: 300,
        }
        return (
            <div className="color" style={style}>
                <p className="color__code">{this.props.hexCode}</p>
            </div>
        );
    }
};

export default Color;
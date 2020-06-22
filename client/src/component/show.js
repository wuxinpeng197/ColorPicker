import React from 'react';

class Single extends React.Component {
    render() {
        let style = {
            backgroundColor: this.props.hexCode,
            width: 10,
            // display:inline-block;  
        }
        return (
                <p className="color__code" style={style}>{this.props.hexCode}</p>
        );
    }
};

export default Single;
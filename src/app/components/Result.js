import React from 'react';

const imgStyle = {
    width: '100%',
    height: 'auto'
};

const divStyle = {
    maxWidth: '100%'
};

const Result = React.createClass({
    render() {
        return (
            <div className="column column-33" style={divStyle}>
                <img src={this.props.url} style={imgStyle}/>
            </div>
        );
    }
});

export default Result;

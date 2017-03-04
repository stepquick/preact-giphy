import React from 'react';

const imgStyle = {
    width: '100%',
    height: 'auto'
};

const divStyle = {
    maxWidth: '100%'
};

const Result = (props) => {
    return (
        <div className="column column-33" style={divStyle}>
            <img src={props.url} style={imgStyle} alt=""/>
        </div>
    );
}

export default Result;

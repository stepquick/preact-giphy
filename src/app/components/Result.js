import React from 'react';

const Result = React.createClass({
    render() {
        return (
            <div className="column column-33">
                <img src={this.props.url}/>
            </div>
        );
    }
});

export default Result;

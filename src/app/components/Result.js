import React from 'react';

const Result = React.createClass({
    render() {
        const url = this.props.url;
        return (
            <div className="column column-33">
                <iframe src={url} height="200" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
            </div>
        );
    }
});

export default Result;

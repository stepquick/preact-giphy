import React from 'react';

const style = {
  width: '100%',
};

const Result = React.createClass({
    render() {
        return (
            <div className="column column-33">
                <img src={this.props.url} style={style}/>
            </div>
        );
    }
});

export default Result;

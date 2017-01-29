import React from 'react';
import Result from './Result';

const Results = React.createClass({
	render() {
		const resultNodes = this.props.data.map( (res) => {
			return ( <Result url = {res.embed_url} key = {res.id} />);
		});
		return (
            <div className="container">
    			<div className="row row-wrap">
                    {resultNodes}
                </div>
            </div>
		);
	}
});

export default Results;

import React from 'react';
import Result from './Result';

const Results = (props) => {
	const resultNodes = props.data.map( (response) => {
		return ( <Result url={response.images.fixed_height_downsampled.url} key={response.id} />);
	});
	return (
        <div className="container">
			<div className="row row-wrap">
                {resultNodes}
            </div>
        </div>
	);
}

export default Results;

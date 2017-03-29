import React from 'react';
import Result from './Result';

const Results = ({ data }) => {
	return (
        <div className="container">
			<div className="row row-wrap">
                {
				 	(
						data.map( (response, index) => {
							return (<Result url={response.images.fixed_height_downsampled.url} title={response.import_datetime} key={index}/> )
						})
					)
				}
            </div>
        </div>
	);
}

export default Results;

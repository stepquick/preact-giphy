import { h } from 'preact';
import Result from './Result'

export default ({data}) => {
	return (
		<div className="container">
			<div className="row row-wrap">
				{(data.map((response, index) => {
					return (<Result url={response.images.fixed_height_downsampled.url} title={response.import_datetime} key={index}/>)
				}))}
			</div>
		</div>
	)
}

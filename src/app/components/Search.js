import { h, Component } from 'preact'
import Results from './Results'
import axios from 'axios'

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			query: "",
			data: [],
			limit: 10,
			loading: false
		}
		this.handleQueryChange = this.handleQueryChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleQueryChange(e) {
		this.setState({query: e.target.value})
	}
	handleSubmit(e) {
		e.preventDefault()
		if (!this.state.query) {
			return
		}
		axios.request({
			url: `${this.props.url}`,
			params: {
				q: `${this.state.query}`,
				limit: `${this.state.limit}`,
				api_key: `${this.props.api}`
			},
			onDownloadProgress: () => {
				this.setState({loading: true});
			}
		}).then((response) => {
			this.setState({data: response.data.data})
			setTimeout(() => this.setState({loading: false}), 2000)
		}).catch(error => console.log(error))
	}
	render() {
		return (
			<div>
				<h1 className={this.state.loading
					? 'loading page-title'
					: 'page-title'}>Giphy Search</h1>
				<form className="searchBox" onSubmit={this.handleSubmit}>
					<input type="text" name="search" placeholder="Search" onChange={this.handleQueryChange}/>
				</form>
				<Results data={this.state.data}/>
			</div>
		)
	}
}

export default Search

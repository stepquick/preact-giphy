import React, {Component} from 'react';
import Results from './Results';
import axios from 'axios';

class Search extends Component {
	state = {
		query: "",
		data: [],
		limit: 10
	}
	handleLimitChange = (e) => {

	}
	handleQueryChange = (e) => {
		this.setState({
			query: e.target.value
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.query) {
			return;
		}
		axios.get(`${this.props.url}?q=${this.state.query}&limit=${this.state.limit}&api_key=${this.props.api}`)
			.then(response => this.setState({
				data: response.data.data
			}))
			.catch(error => console.log(error));
	}
	render = () => {
        return (
            <div>
                <form className="searchBox" onSubmit={this.handleSubmit}>
                    <input type="text" name="search"  placeholder="Search"  onChange={this.handleQueryChange}/>
                </form>
                <Results data={this.state.data} />
            </div>
        );
	}
}

export default Search;

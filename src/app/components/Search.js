import React from 'react';
import Results from './Results';

import 'whatwg-fetch';

const Search = React.createClass({
    getInitialState() {
       return {data: []};
    },
    handleQueryChange(e) {
        this.setState({query: e.target.value});
    },
    constructSearch() {
        return this.props.url + '?q=' + this.state.query + '&limit=10' + '&api_key=' + this.props.api;
    },
    updateSearchData() {
        var search = this.constructSearch();

        function checkStatus(response) {
          if (response.status >= 200 && response.status < 300) {
            return response
          } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
          }
        }

        function parseJSON(response) {
          return response.json()
        }

        fetch(search)
            .then(checkStatus)
            .then(parseJSON)
            .then(response => this.setState({data: response.data}) );
    },
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.query) {
            return;
        }
        this.updateSearchData();
    },
    render() {
        return (
            <div>
                <form className="searchBox" onSubmit={this.handleSubmit}>
                    <input type="text" name="search"  placeholder="Search"  onChange={this.handleQueryChange}/>
                    <input type="submit" value="Search"/>
                </form>
                <Results data={this.state.data} />
            </div>
        );
    },
});

export default Search;

import React from 'react';
import Search from './components/Search';

const App = () => {
    return (
        <div className="container">
            <h1 className="page-title">Giphy Search</h1>
            <Search url="https://api.giphy.com/v1/gifs/search" api="dc6zaTOxFJmzC" />
        </div>
    );
}

export default App;

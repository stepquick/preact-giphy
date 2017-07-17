import { h } from 'preact';
import Search from './components/Search';

const App = () => {
    return (
        <div className="container">
            <Search url="https://api.giphy.com/v1/gifs/search" api="dc6zaTOxFJmzC" />
        </div>
    );
}

export default App;

import ReactTestUtils from 'react-addons-test-utils'; // ES6
import App from './App.js';

const renderer = ReactTestUtils.createRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
    <h1 className="page-title">Giphy Search</h1>
    <Search url="https://api.giphy.com/v1/gifs/search" api="dc6zaTOxFJmzC" />
]);

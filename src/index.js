import { h, render } from 'preact';
import App from './app/App.js'

import './main.css'
import 'normalize.css/normalize.css'
import 'milligram/dist/milligram.min.css'

render(<App />, document.getElementById('root'))

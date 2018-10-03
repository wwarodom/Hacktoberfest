import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RamdamapComponent from './component/RamdaMapComponent'
configure({ adapter: new Adapter() });
const Bear = [
    { code: '242-101', subject: 'INTRO TO COMP PROGRAM' },
    { code: '242-360', subject: 'MODEL&ANALYSIS FOR NETWORK' },
    { code: '322-101', subject: 'BASIC MATHEMATICS I' },
    { code: '640-101', subject: 'HEALTHY BODY AND MIND' },
    { code: '999-101', subject: 'JAVASCRIPT FRAMEWORK' },
]
ReactDOM.render(<RamdamapComponent Bear={Bear} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

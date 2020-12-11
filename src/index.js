import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import reducer from './Store/reducer'

const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'));




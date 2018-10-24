import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
    reducer, 
    applyMiddleware(thunk)
);

class App extends Component {
    render() {
        return (
            <Counter />
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
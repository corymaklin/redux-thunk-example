import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync, quote } from './actionCreator';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.asyncInc = this.asyncInc.bind(this);
        this.handleAsync = this.handleAsync.bind(this);
    }

    asyncInc() {
        const { dispatch } = this.props;
        dispatch ( incrementAsync() );
    }

    handleClick(e) {
        const { dispatch } = this.props;

        if(e.target.id === 'INC') {
            dispatch( increment() );
        } else {
            dispatch( decrement() );
        }
    }

    handleAsync() {
        const { dispatch } = this.props;
        dispatch ( quote() );
    }

    render() {
        const { count, quote } = this.props;
        return (
            <div>
            <h1>{count}</h1>
            <h1>{quote}</h1>
            <button id='INC' onClick={this.handleClick}>INC</button>
            <button id='DEC' onClick={this.handleClick}>DEC</button>
            <button onClick={ this.asyncInc }>Click</button>
            <button onClick={ this.handleAsync }>Quote me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count:  state.count,
        quote:  state.quote
    };
}

export default connect(mapStateToProps)(Counter);
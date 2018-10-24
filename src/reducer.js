import { INC, DEC } from './actionCreator';

const initialState = {
    count: 0,
    quote: ''
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case INC:
            var newState = { ...state };
            newState.count++;
            return newState;
        case DEC:
            var newState = { ...state };
            newState.count--;
            return newState;
        case 'SET_QUOTE':
            return { ...state, quote: action.payload };
        default:
            return state;
    }
}
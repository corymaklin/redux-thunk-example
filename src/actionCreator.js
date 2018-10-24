export const DEC = 'DEC';
export const INC = 'INC';

export function decrement() {
    return {
        type: DEC
    };
}

export function increment() {
    return {
        type: INC
    };
}

export function incrementAsync() {
    return dispatch => {
      setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        dispatch(increment());
      }, 1000);
    };
}

export function quote() {
    return dispatch => {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then( response => response.json())
        .then( quote => {
            dispatch({
                type: 'SET_QUOTE',
                payload: quote
            });
        })
    }
}
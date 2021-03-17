const redux = require('redux');
const reduxlogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const logger = reduxlogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake() {
    return ({
        type: BUY_CAKE,
        info: 'Buy cake action'
    })
}

function buyIceCream() {
    return ({
        type: BUY_ICECREAM,
        info: 'Buy ice cream action'
    })
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20,
// };

const initialCakeState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCream: 20
};

// const reducer = (state=initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1,
//             };
//         case BUY_ICECREAM:
//             return {
//                 ...state,
//                 numOfIceCream: state.numOfIceCream - 1,
//             };
//         default:
//             return state;
//     }
// }

const cakeReducer = (state=initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            };
        default:
            return state;
    }
}

const iceCreamReducer = (state=initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})
const store = createStore(rootReducer, applyMiddleWare(logger));
console.log('initial state =====> ',store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
unsubscribe();
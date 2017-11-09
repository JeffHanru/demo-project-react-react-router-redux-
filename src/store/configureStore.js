import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import IdeasReducer from '../reducers/Ideas';
import filtersReducer from '../reducers/filters';
import requestReducer from '../reducers/request';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export default () => {
    const middleware = applyMiddleware(promise(),thunk);
    const store = createStore(
        combineReducers({
            ideas: IdeasReducer,
            filters: filtersReducer,
            request: requestReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        middleware
    );

    return store;
};

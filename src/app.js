import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/IdeasAction';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/IdeasSelector';
import axios from 'axios';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { fetchUsers } from "./actions/request"


const store = configureStore();

// store.dispatch((dispatch)=>{
//     dispatch({type:'FETCH_USERS_START'});
//     axios.get("http://rest.learncode.academy/api/wstern/users")
//         .then((response)=>{
//             dispatch({type:'RECEIVE_USERS',payload:response.data})
//         })
//         .catch((error)=>{
//             dispatch({type:'FETCH_USERS_ERROR', payload:error})
//         })
// })


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

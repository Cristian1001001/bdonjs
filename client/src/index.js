// import React from 'react';
// import {render} from 'react-dom';
// // import {compose, createStore, applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
// // import thunk from 'redux-thunk'
// // import createSagaMiddleware from 'redux-saga'
// import App from './App';
// // import * as serviceWorker from './serviceWorker';
// // import {rootReducer} from './redux/reducers/rootReducer'
// // import {forbiddenWordsMiddleware} from './redux/middleware'
// // import {sagaWatcher} from './redux/sagas'
// import store from "./redux/store";
//
// // const saga = createSagaMiddleware()
//
// const app = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )
//
// render(app, document.getElementById('root'));
//
// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // // serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

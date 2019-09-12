import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducer/reducers'

import './index.css';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/Reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
registerServiceWorker();

import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'
import { AppContainer } from 'react-hot-loader';
import './app.global.css'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <AppContainer>
  <Provider store={store}>
    <App />
  </Provider>
  </AppContainer>,
  document.getElementById('root')
)
// import React from 'react';
// import { render } from 'react-dom';
// import { hashHistory } from 'react-router';
// import { AppContainer } from 'react-hot-loader';
// import { syncHistoryWithStore } from 'react-router-redux';
// import Root from './containers/Root';
// import configureStore from './store/configureStore';
// import './app.global.css';
//
// const store = configureStore();
// const history = syncHistoryWithStore(hashHistory, store);
//
// render(
//   <AppContainer>
//     <p>yes</p>
//   </AppContainer>,
//   document.getElementById('root')
// );
//
// if (module.hot) {
//   module.hot.accept('./containers/Root', () => {
//     const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
//     render(
//       <AppContainer>
//         <NextRoot store={store} history={history} />
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }

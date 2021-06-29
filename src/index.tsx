import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DeviceDimensionsProvider } from 'src/contexts'

ReactDOM.render(
  <React.StrictMode>
    <DeviceDimensionsProvider>
      <App />
    </DeviceDimensionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

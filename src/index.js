import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    {/* strict mode: Là công cụ thông báo các vấn đề tiềm ẩn trong ứng dụng. */}
    <Provider store={store}>
      {/* Provider dùng để kết nối tất cả các component với store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
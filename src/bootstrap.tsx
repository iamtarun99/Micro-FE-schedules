import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('schedules') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
    <App />,
    document.getElementById('schedules')
)


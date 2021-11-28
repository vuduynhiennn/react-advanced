import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';

ReactDOM.render(
  <React.StrictMode>
    <Paragraph />
    <Heading />
  </React.StrictMode>,
  document.getElementById('root')
);


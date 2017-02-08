import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import Login from './components/Login'

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Login} />
        <Match exactly pattern="/library" component={App}/>
        <Miss component={Login}/>
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#root'));
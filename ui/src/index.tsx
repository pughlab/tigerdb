import * as React from 'react';
// import { render } from 'react-dom';
import App from './App';

import './index.css'
import 'semantic-ui-css/semantic.min.css'

// render(<App />, document.getElementById('app'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

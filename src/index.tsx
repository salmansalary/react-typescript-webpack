import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './languages/i18n';
import './favicon.ico';
import './styles/main.scss';

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app') as HTMLElement
);

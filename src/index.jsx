import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route,Routes, BrowserRouter} from 'react-router-dom';
import { App } from './App';
import { Router, Error } from '../src/pages/Error';
import { AxiosErrorHandleProvider } from '../src/exception/AxiosErrorHandleProvider'
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AxiosErrorHandleProvider>
            <App/>
        </AxiosErrorHandleProvider>
    </BrowserRouter>
    );


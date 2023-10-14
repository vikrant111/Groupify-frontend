import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import App from './App';
import { HTML_WRAPPER } from '../htmlWrapper';

function handleRenderDesktop(request: Request, response: Response, manifestJSON: any){
    const JSX = <App />;
    const html = renderToString(JSX);
    response.setHeader('Content-type', 'text/html');
    response.status(200).send(HTML_WRAPPER(html, manifestJSON));
};

module.exports = handleRenderDesktop;
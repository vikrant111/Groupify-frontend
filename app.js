const express = require('express');
const path = require('path');

const handleRenderDesktop = require('./server/build/server.js');
const handleRenderMobile = require('./server/build-mob/server.js');

const mainfestJSONDesktop = require('./public/build/manifest.json');
const mainfestJSONMobile = require('./public/build-mob/manifest.json');


const app = express();
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '28d' }));
app.use((request, response) => {
    const ua = request.header('user-agent');
    if (/mobile/i.test(ua) && !(/iPad/i.test(ua))) {
        handleRenderMobile(request, response, mainfestJSONMobile);
    } else {
        handleRenderDesktop(request, response, mainfestJSONDesktop);
    }
});

module.exports = app;
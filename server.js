const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const lazy = process.argv.reverse()[0] === '--lazy';
const app = express();

app.use(WebpackDevMiddleware(webpack(webpackConfig), { lazy }));
app.use(express.static('./src'));

app.listen(3000, () => console.log('app started'));

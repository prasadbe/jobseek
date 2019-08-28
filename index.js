require('dotenv').config({
    path: process.env.DOTENV || '.env'
});
var express = require('express');
var app = express();
var fs = require('fs');
app.use(function(req, res, next) {
    fs.readFile(__dirname + '/build/webpack-manifest.json', 'UTF-8', function(err, result) {
        if (err) {
            console.log(err)
        } else {
            console.log(result);
            global.manifest = JSON.parse(result);
        }
        next();
    });
});
app.use(express.static('build'))
app.use('/', (req, res) => {
    var manifest = global.manifest;
    const ogUrl = process.env.APP_URL || 'http://localhost:8000'

    var html = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta property="og:url" content="${ogUrl}" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JobStreet Products" />
        <meta property="og:description" content="Purchase the products & get Offers." />
        <meta property="og:image" content="${ogUrl}/js-og-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#053a76">
        <title>JobStreet Products</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      </head>
    <body>
        <div class="mainContainer" id="root"></div>
        <script src="${ogUrl}${manifest['vendor.js']}"></script>
        <script src="${ogUrl}${manifest['fo.js']}"></script>
    </body>
    </html>`;


    res.send(html);
    res.end();
});
app.listen(3000);
// Required
const config = [
  use_express = true, // This is custom for my VPS, which we host around 20 websites on. If you are using it on a VPS or machine made just for this, set to true. If you are using a vhost configuration and want to export your app, set to false.
  load_name = "weather-main",
  load_msg = "online"
]
const express = require('express')
const app = express()
const path = require('path')

// Pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/home.html'));
  });
app.get('/weekly', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/weekly.html'));
  });
app.get('/hourly', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/hourly.html'));
  });
app.get('/forecast', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/forecast.html'));
  });
app.get('/manual', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/manual/home.html'));
  });
app.get('/alerts', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/alerts.html'));
  });
app.get('/manual/alerts', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/manual/alerts.html'));
  });
app.get('/manual/weekly', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/manual/weekly.html'));
  });
app.get('/manual/hourly', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/manual/hourly.html'));
  });
app.get('/manual/forecast', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/manual/forecast.html'));
  });
app.get('/radar', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/radar.html'));
  });
app.get('/advanced/radar', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/advanced/radar.html'));
  });
app.get('/advanced/radar/tornado', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/advanced/tornadoRadar.html'));
  });
app.get('/advanced', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/advanced/home.html'));
  });
// Custom Content
app.get('/cdn/font', (req, res) => {
    res.sendFile(path.join(__dirname, 'content/font.ttf'));
  });
app.get('/cdn/favicon', (req, res) => {
    res.sendFile(path.join(__dirname, 'content/favicon.png'));
  });
app.get('/cdn/bg/1', (req, res) => {
    res.sendFile(path.join(__dirname, 'content/bg1.webp'));
  });
app.get('/cdn/bg/2', (req, res) => {
    res.sendFile(path.join(__dirname, 'content/bg2.jpeg'));
  });

// Custom API
app.get('/api/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'api/home.html'));
  });
app.get('/api/database/tornado/read', (req, res) => {
    res.sendFile(path.join(__dirname, 'api/database/tornado/read.html'));
  });
app.get('/api/database/tornado', (req, res) => {
    res.sendFile(path.join(__dirname, 'api/tornado-db.json'));
  });
//  /*
app.get('/email/admin', (req, res) => {
    res.redirect('mailto:admin@the-weather.xyz'); // Replace with your email if you are hosting it on your domain, or just turn the block into a comment
  });
//  */

// Load
if(config[0] === true) {
  app.listen(process.env.PORT || 3000, () => console.log((`[${config[1]}] ${config[2]}`)))
} else if (config[0] === false) {
  module.exports = { app }
}
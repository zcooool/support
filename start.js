var express = require('express');
var app = express();


console.log(__dirname)
app.use(express.static('app'));

var server = app.listen(3000, function () {
    console.log('开启调试模式....')
});
var express = require('express');
var app     = express();
var http    = require( 'http' );
var path    = require( 'path' );
var server  = http.Server( app );

app.set( 'port', process.env.PORT || 3006 ); 
app.set( 'views', __dirname + '/views' );    //视图文件
app.set( 'view engine', 'ejs' );             //页面引擎
app.use( express.static( path.join( __dirname, 'public' ))); //静态文件路径

app.get('/', function(req,res){
    res.render('index');
});


server.listen( app.get( 'port' ), function(){                //监听服务端口
    console.log( 'root server listening on port ' + app.get( 'port' ),app.settings.env);
});

module.exports = app;

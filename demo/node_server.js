var pug=require("pug");
var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    //1.pug.compile
    //var fn=pug.compile("div #{course}",{})
    //var html=fn({course:"pug"})

    //2.pug.render
    //var html=pug.render("div #{course}",{course:"pug study"})

    //3.pug.renderFile
    var html=pug.renderFile("index.html",{course:"pug study renderFile",pretty:true})
    res.end(html)
}).listen('1337','127.0.0.1')

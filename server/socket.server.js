module.exports = function(http) {

    var server = require('http').createServer();
    var io = require('socket.io')(server);

    var module = {};
    
    io.on('connection', function(socket) {

        console.log("connection");
        
        setInterval(function name() {
            createEvent('event');
        }, 5000);  
        
        setInterval(function name() {
            createEvent('event2');
        }, 7000); 
        
        setInterval(function name() {
            createEvent('event3');
        }, 4000);    

        socket.on('disconnect', function() {
            console.log("disconnect");
        });
    });

    function createEvent(name) {

        console.log("createEvent: " + name);
        
        io.emit(name,
            {
                id: '#' + Math.random().toString(16).substring(2, 8)
            });
    }

    server.listen(3001);
        
    return module;
};
module.exports = function(http) {

    var server = require('http').createServer();
    var io = require('socket.io')(server);

    var module = {};

    io.on('connection', function(socket) {

        console.log("connection");

        socket.on('note-click', function(data) {

            console.log("note-click");

            var randomColor = '#' + Math.random().toString(16).substring(2, 8);

            io.emit(data.soundUri,
                {
                    color: randomColor,
                    soundUri: data.soundUri
                });
        });

        socket.on('disconnect', function() {
            console.log("disconnect");
        });
    });

    setInterval(function name() {
        createEvent('drum');
    }, 1000);

    setTimeout(function() {
        setInterval(function name() {
            createEvent('hihat');
        }, 1000);
    }, 500);

    function createEvent(name) {

        var randomColor = '#' + Math.random().toString(16).substring(2, 8);

        console.log("createEvent: " + randomColor);

        io.emit(name,
            {
                color: randomColor
            });
    }

    server.listen(3001);

    return module;
};
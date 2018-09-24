var socket = io();
socket.on('connect', function () {
    console.log("Connect to Server");
});
socket.on('disconnect', function () {
    console.log("Unable to connect");
});
socket.on('newMessage', function (message) {
    console.log("newMessage", message);
})
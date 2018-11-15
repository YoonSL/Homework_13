module.exports = function(io){
    io.on('connection',function(socket){
        socket.on('new-todo', function(data){
            console.log(data);
            io.emit('emit-todo',data);
        })
        console.log('connected');
    })
}
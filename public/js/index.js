console.log("Server On (Now)");

let socket = io("http://localhost:8888");


let username = prompt("Introduce your name:");

$('.chatForm').on('submit', function(event){
    event.preventDefault();
    let message = $('#message').val();
    let room1 = $('#room1').val();
    let room2 = $('#room2').val();
    let room3 = $('#room3').val();
    
    console.log(room1);
    console.log(room2);
    console.log(room3);

    let info={
        name: username,
        message: message,
    };

    socket.emit('information', info);
});


socket.on('msj', function(info){
    let message = `<p>${info.name} :  ${info.message}</p>`;
    $('.messages' ).append(message);
});

socket.on('display', function(info){
    for(let i = 0; i<info.length;i++){
        let message = `<p>${info[i].name} :  ${info[i].message}</p>`;
        $('.messages' ).append(message);
    }
});
const socket = io('/');
const getElementId = (id) => document.getElementById(id);

const helloStrangerElement = getElementId('hello_stranger');
const chattingBoxElement = getElementId('chatting_box');
const formElement = getElementId('chat_form');

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username);
  socket.on('hello_user', (data) => {
    console.log(data);
  });
}

function init() {
  helloUser();
}

init();

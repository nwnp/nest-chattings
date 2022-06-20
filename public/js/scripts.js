const socket = io('/chattings');
const getElementId = (id) => document.getElementById(id);

const helloStrangerElement = getElementId('hello_stranger');
const chattingBoxElement = getElementId('chatting_box');
const formElement = getElementId('chat_form');

socket.on('user_connected', (username) => {
  console.log(`${username} connected`);
});

const drawHelloStranger = (username) =>
  (helloStrangerElement.innerText = `Hello ${username} stranger :) `);

function helloUser() {
  const username = prompt('What is your name?');
  socket.emit('new_user', username, (data) => {
    drawHelloStranger(data);
  });
  socket.on('hello_user');
}

function init() {
  helloUser();
}

init();

const socket = io('/');
const getElementId = (id) => document.getElementById(id);

const helloStrangerElement = getElementId('hello_stranger');
const chattingBoxElement = getElementId('chatting_box');
const formElement = getElementId('chat_form');

function helloUser() {
  alert('What is your name?');
}

function init() {
  helloUser();
}

init();

let fullName = document.querySelector('#full-name');
let email = document.querySelector('#email');
let phoneNumber = document.querySelector('#phone-number');
let message = document.getElementById('message-text');
const sendButton = document.getElementById('send-btn')

console.log(fullName, email, phoneNumber, message,sendButton);
sendButton.addEventListener('click', validateInfo);


var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;


function validateInfo(e) {
    e.preventDefault();
    
    console.log('haha');
}



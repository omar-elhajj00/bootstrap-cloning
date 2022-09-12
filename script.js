//define the input by their ids
let fullName = document.querySelector('#full-name');
let email = document.querySelector('#email');
let phoneNumber = document.querySelector('#phone-number');
let message = document.getElementById('message-text');
let sendForm = document.getElementById('send-form');
const sendButton = document.getElementById('send-btn')

console.log(fullName, email, phoneNumber, message, sendButton, sendForm);

sendForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
  // do you ajax submission here
    console.log('submitted')
})

// when click on send button
sendButton.addEventListener('click', validateInfo);

var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;


function validateInfo(e) {
    

}



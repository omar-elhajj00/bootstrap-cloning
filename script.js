//define the input by their ids
let fullName = document.querySelector('#full-name');
let email = document.querySelector('#email');
let phoneNumber = document.querySelector('#phone-number');
let message = document.getElementById('message-text');
let sendForm = document.getElementById('send-form');

// define the warnings 
let fullNAmeWarning = document.getElementById('fname-warning');
let emailWarning = document.getElementById('email-warning');
let phoneNumberWarning = document.getElementById('phone-num-warning');
let messageWarning = document.getElementById('message-warning');
let successMessage = document.getElementById('success-msg');


const sendButton = document.getElementById('send-btn')

console.log(fullName, email, phoneNumber, message, sendButton, sendForm ,fullNAmeWarning,emailWarning,phoneNumberWarning,messageWarning);

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


function validateInfo() {

    if (fullName.value.length < 5) {
        fullNAmeWarning.innerHTML = 'the name must be more than 5 characters';
    }
    // check if the phone number start with +961
    else if (phoneNumber.value.substring(0,4) != "+961") {
        phoneNumberWarning.innerHTML = 'the phone number should start with +961';
    }
    // check if there are 8 digits after +961 in phone number input
    else if (phoneNumber.value.substring(4,phoneNumber.value.length).length != 8) {
        phoneNumberWarning.innerHTML = 'the phone number should have 8 digits after +961';
    }
    // check if the message have less than 100 characters
    else if (message.value.length<100) {
        messageWarning.innerHTML = 'message should have in minimum 100 characters';
    }
    else {
        successMessage.innerHTML = 'All is good , thank you'; 
        messageWarning.innerHTML = "";
        phoneNumberWarning.innerHTML = "";
        fullNAmeWarning.innerHTMl = "";
        
    }
    // else if (pw.value.length > 8) {
    //     alert('Max of 8');

    // }else if(!pw.value.match(numbers)){
    //     alert('please add 1 number');

    // }else if(!pw.value.match(upperCaseLetters)){
    //     alert('please add 1 uppercase letter');

    // }else if(!pw.value.match(lowerCaseLetters)){
    //     alert('please add 1 lovercase letter');

    // }else{
    //     localStorage.setItem('name', name.value);
    //     localStorage.setItem('pw', pw.value);
    //     alert('Your account has been created');
    // }


}



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
    // else if (pw.value.length == 0) {
        
    //     alert('Please fill in password');

    // }
    else if (phoneNumber.value.substring(0,3) != "+961") {
        phoneNumberWarning.innerHTML = 'the phone number should start with +961';
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



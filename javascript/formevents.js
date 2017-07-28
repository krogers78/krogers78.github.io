// Declare function using event object
function minChars(event) {
  var target = event.target;
  var parent = target.parentElement;
  var error = '<label for="' + target.id + '" class="error">Entry can\'t be left blank.</label>';

  if (target.value.length <= 0) {
    if (!parent.querySelector('.error')) {
           parent.insertAdjacentHTML('beforeEnd', error);
        }
  } else {
    parent.removeChild(parent.querySelector('.error'));
  }
}

// Search DOM for element(s)
var message = document.querySelector('#message');
// var email = document.querySelector('#email');

// Call function when element(s) trigger an event
message.addEventListener('blur', minChars, false);

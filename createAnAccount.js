var button = document.querySelector('.createAccountButton');

var left = Math.floor((screen.width - 600) / 2);
var top = Math.floor((screen.height - 400) / 2);

button.addEventListener('click', function() {
    // Open the /createaccount route in a new window
    var popupWindow = window.open('/createaccount', 'createAccountForm', 'width=600,height=400,left=' + left + ',top=' + top);
});


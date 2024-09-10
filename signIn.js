var button = document.querySelector('.signInButton');

var left = Math.floor((screen.width - 600) / 2);
var top = Math.floor((screen.height - 400) / 2);

button.addEventListener('click', function() {
    var popupWindow = window.open('', 'signInForm', 'width=600,height=400,left=' + left + ',top=' + top);

    var formHtml = `
        <!DOCTYPE html>
        <html lang="en-US">
        <head>
            <meta charset="UTF-8">
            <title>Sign In</title>
            <link rel="stylesheet" href="../Static/homePage.css">
            <link rel="stylesheet" href="../Static/CreateAnAccount.css">
            <script>
                function validateForm() {
                    // Retrieve the values of the username and password fields
                    var username = document.getElementById("username").value;
                    var password = document.getElementById("password").value;
                    
                    // Get the error message element
                    var errorMessage = document.getElementById("error-message");
                
                    // Check if either the username or password is empty
                    if (username.trim() === "" || password.trim() === "") {
                        // Display the error message and return false to prevent form submission
                        errorMessage.style.display = "block";
                        return false;
                    } else {
                        // Hide the error message and return true to allow form submission
                        errorMessage.style.display = "none";
                        return true;
                    }
                }
            </script>
        </head>
        <body>
            <div class="accountForm">
                <form class="signInForm" method="POST" action="C:\\Users\\19739\\Desktop\\Vs Code Projects\\.vscode\\Red Rat Archives\\Templates\\NeilFunGames.html" onsubmit="return validateForm()">
                    <div class="inputContainer usernameContainer">
                        <div class="usernameInputLabel">
                            <label for="username" class="usernameLabel">Username:</label> <br><br>
                        </div>
                        <div class="usernameInputBar">
                            <input type="text" class="usernameBar" name="username" id="username"><br><br>
                        </div>
                    </div>
                    <div class="inputContainer passwordContainer">
                        <div class="passwordInputLabel">
                            <label for="password">Password:</label><br>
                        </div>
                        <div class="passwordInputBar">
                            <input type="password" class="passwordBar" name="password" id="password"><br><br>
                        </div>
                    </div>
                    <div class="message">
                        <div class="error" id="error-message" style="display:none;">Username and password cannot be empty.</div>
                    </div>
                    <div class="submitButton">
                        <button type="submit" class="submit">Submit</button>
                    </div>
                </form>
            </div>
        </body>
        </html>
    `;

    popupWindow.document.write(formHtml);
    popupWindow.document.close();
});
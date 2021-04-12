// Collaborated with Liz
// This function uses the POST method to send data to the server.
function loginUser(eventDetails) {
    axios.request({
        method: "POST",
        url: "https://reqres.in/api/login",
        headers: {
        "Content-Type": "application/json"
        },
        // Email and password information is inputted by the user and sent to the server.
        data:{
            email: document.getElementById("usernameInput").value,
            password: document.getElementById("passwordInput").value,
        }
    }).then(userLoginSuccess).catch(userLoginFailure);
}

// This function is called upon when the request is successful.
function userLoginSuccess(res) {
    console.log(res);
    // The cookie is created and a token is stored inside of it.
    Cookies.set("token", res.data.token);
    document.body.innerHTML += "Success";
    // The user is sent to the second page that opens up in a new window.
    window.location.href = "secondPage.html";
}

// This function is called upon when the user encounters an error.
// A message will be displayed to notify the user of the error.
function userLoginFailure(err) {
    console.log(err);
    let textContainer = document.getElementById("textContainer");
    let errorMessage = document.createElement('p');
    errorMessage.innerHTML = "Username or password is invalid";
    textContainer.appendChild(errorMessage);
}

// The addEventLister takes in a click event.
// The loginUser function is triggered when the user clicks on the Login button to submit their email and password.
let loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", loginUser);

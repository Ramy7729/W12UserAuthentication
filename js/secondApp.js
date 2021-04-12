// Collaborated with Liz
// This function uses the GET method to retrieve data from the server.
function loadColors() {
    axios.request({
        method: "GET",
        url: "https://reqres.in/api/unknown",
    }).then(colorSuccess).catch(colorFailure);
}

// This function is called upon when the request is successful.
function colorSuccess(res) {
    console.log(res);
    
    let logoutButton = document.getElementById("logoutButton");
    logoutButton.innerHTML += `<a href="index.html"><button>Logout</button></a>`;
    // A for loop is used to access and retrieve specified data.
    let colorContainer = document.getElementById("colorContainer");
    for (let i=0; i < res.data.data.length; i++) {
        let color = res.data.data[i];
        // Specified data gets displayed on the screen.
        colorContainer.innerHTML += `<div class="colorElement"> 
            <p>${color.name}</p>
            <p>${color.year}</p>
            <div class="colorBlock" id="color${color.id}"></div>
        </div>`;
        document.getElementById(`color${color.id}`).style.backgroundColor = color.color;
    }
}

// This function is called upon to delete the user's session token cookie.
function removeCookies() {
    Cookies.remove("token");
}
// Triggers the removeCookies function when the logout button is clicked.
logoutButton.addEventListener("click", removeCookies);

// This function is called upon when the user encounters an error.
function colorFailure(err) {
    document.getElementById("colorContainer").innerHTML = "<p>Sorry something went wrong</p>";
}

let token = Cookies.get("token");
// The if statement is met when the user isn't logged in and there is no cookie present.
// The user will be presented with a login button that brings them to the login page (index.html).
if (token === undefined) {
    document.body.innerHTML += 'Please login <a href="index.html"><button>Login</button></a>';
   
} else {
    document.getElementById("welcomeMessage").innerHTML = "Welcome";
    loadColors();
}




    

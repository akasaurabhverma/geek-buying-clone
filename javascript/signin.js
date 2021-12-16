const form = document.getElementById("form")

form.addEventListener("submit", signIn);

function signIn(e) {
    e.preventDefault();
    const userCredentials = new CreateCredentials(form.password.value, form.username.value);

    // console.log(JSON.stringify(userCredentials));
    logInHeroku(userCredentials);
}


//constructor function to create credentials
function CreateCredentials(password, username) {
    this.password = password;
    this.username = username;
}


//function to call authentication api for login
async function logInHeroku(credentials) {
    try {
        const URL = "https://masai-api-mocker.herokuapp.com/auth/login";

        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "content-type": "application/json",
            }
        });

        const res = await response.json();

        if (res.error) {
            window.alert(res.message);
        }
        else {
            getUserProfile(res.token, credentials.username);
            console.log(res.token, credentials.username);
        }
    }
    catch (err) {
        window.alert("Invalid Credentials")
    }
}


//function to get user profile details from masai-server
async function getUserProfile(token, username) {
    try {
        const URL = `https://masai-api-mocker.herokuapp.com/user/${username}`;

        const response = await fetch(URL, {
            method: "GET",

            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const res = await response.json();

        localStorage.setItem("person", JSON.stringify(res));

        localStorage.setItem("isLoggedIn", JSON.stringify(true));

        window.location.href = "../index.html";
    }
    catch (err) {
        console.log(err)
    }
}
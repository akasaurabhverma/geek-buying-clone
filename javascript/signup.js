const form = document.getElementById("form")

form.addEventListener("submit", signUp);

function signUp(e) {
    e.preventDefault();
    const userDetails = new UserDetails(form.name.value, form.email.value, form.password.value, form.username.value, form.mobile.value, form.description.value);

    // console.log(JSON.stringify(userDetails));
    signUpHeroku(JSON.stringify(userDetails));
}


//constructor function to create user details body
function UserDetails(name, email, password, username, mobile, description) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.username = username;
    this.mobile = mobile;
    this.description = description;
}


//function to call authentication api for signup
async function signUpHeroku(user) {
    try {
        const URL = "https://masai-api-mocker.herokuapp.com/auth/register";

        const response = await fetch(URL, {
            method: "POST",
            body: user,
            headers: {
                "content-type": "application/json"
            }
        });

        const res = await response.json();

        window.alert(res.message);
    }
    catch (err) {
        console.log(err);
    }
}
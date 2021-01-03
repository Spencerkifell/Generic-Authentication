var login = document.getElementById("loginForm");
var currentUser = document.getElementById("currentUser");
var logInButton = document.getElementById("buttonLogin");
var logOutButton = document.getElementById("buttonLogout");
var userInfoButton = document.getElementById("userInfo");

var isUserLoggedIn = false;

var accountFound = 0;
var userName = "User Not Logged In";

var email = "";
var password = "";
var id = "";

logInButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch('login.php', {
        method: 'POST',
        body: new FormData(login)
    });

    var data = await response.json();

    accountFound = data[0].returnValue;
    userName = data[0].userName; //Set it early so it can be alerted to the user.
    
    if(AccountFound(accountFound)){
        isUserLoggedIn = true;
        buttonFunctionality(true, false, false);
        email = data[0].userEmail;
        password = data[0].userPassword;
        id = data[0].userId;
    }
});

logOutButton.addEventListener("click", async (e) => {
    clearUser();
    login.reset();
});

userInfoButton.addEventListener("click", async (e) => {
    e.preventDefault();
    alert(`User Information\n\nUser Identification: ${id}\nUser Name: ${userName}\nEmail: ${email}\nPassword: ${password}`);
})

function AccountFound(result){
    if(result == 1){
        alert(`Welcome ${userName}`);
        currentUser.innerHTML = `Current User: ${userName}`;
        login.reset();
        return true;
    }

    else {
        alert("Account Does Not Exist...");
        location.reload();
        return false;
    }
}

function buttonFunctionality(logInStatus, logOutStatus){
    logInButton.disabled = logInStatus;
    logOutButton.disabled = logOutStatus;
    userInfoButton.disabled = logOutStatus;
}

function clearUser(){
    isUserLoggedIn = false;
    accountFound = 0;
    userName = "User Not Logged In";
    email = "";
    password = "";
    id = "";
    currentUser.innerHTML = `Current User: ${userName}`;
    buttonFunctionality(false, true, true);
}
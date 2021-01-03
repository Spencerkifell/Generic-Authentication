var login = document.getElementById("loginForm");
var accountFound = 0;

login.addEventListener("submit", async (e) => {
    e.preventDefault();
    const response = await fetch('login.php', {
        method: 'POST',
        body: new FormData(login)
    });

    var data = await response.json();
    accountFound = data[0].returnValue;
    AccountFound(accountFound);
})

function AccountFound(result){
    if(result == 1){
        alert("Account Found...");
        return true;
    }
    else{
        alert("Account Does Not Exist...");
        location.reload();
        return false;
    }
}
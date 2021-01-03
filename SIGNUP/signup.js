var form = document.getElementById("testForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const response = await fetch('signup.php', {
        method: 'POST',
        body: new FormData(form)
    });
    alert("User Created Successfully");
    form.reset();
})
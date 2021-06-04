const getData = () => {
    //console.log(document.getElementById('signin'));
    if (document.getElementById('signin').value === "Sign in") {
        console.log('hola');
        window.location.href = 'signin.html';
        const check = /([A-Za-z0-9]+)([!@#$%&*()]+)/;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if(password.match(check))
        {   
            localStorage.setItem("username", username);
            window.location.href = `index.html`;
            document.getElementById("username").value = localStorage.getItem("username");
        }
        else{
            console.log('False')
        }
        //console.log(document.getElementById('signin'));    
    }
    
    if (document.getElementById('signin').value === "Sign out") {
        localStorage.removeItem("user");
        document.getElementById('username').innerHTML = '';
        document.getElementById('signin').value = "Sign in";
    }
}

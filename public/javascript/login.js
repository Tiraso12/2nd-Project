async function signupFormHandler(event) {
    event.preventDefault();
console.log('WORKING!');
    const username = document.querySelector('#sign-username').value.trim();
    const email = document.querySelector('#sign-email').value.trim();
    const password = document.querySelector('#sign-password').value.trim();

    if(username && email && password){
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type':'application/json'}
        })
        console.log(response);
        if (response.ok) {
            console.log('sucess'); 
        }else {
            alert(response.statusText);
        }
    }
};


async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#log-username').value.trim();
    const password = document.querySelector('log-password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup').addEventListener('submit',signupFormHandler);
document.querySelector('#login').addEventListener('submit',loginFormHandler);
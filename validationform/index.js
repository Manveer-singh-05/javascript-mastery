
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes('@')) {
        alert('Kindly enter a correct email');
        return;
    }

    if (password.length < 8) {
        alert('Password must contain at least 8 characters');
        return;
    }

    const result = document.getElementById('result');

    result.innerHTML = `
        <h2>Form Submitted Successfully!</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `;

    form.reset();
});

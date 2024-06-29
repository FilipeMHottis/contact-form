const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const selectQtype = document.querySelector('select');
const message = document.getElementById('message');

// Check if all fields are filled
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
})

// Validate form
const validateForm = () => {
    if (fname.value === '' || lname.value === '' || email.value === '' || message.value === '' || selectQtype.value === '') {
        alert('Please fill all fields');
        return false;
    }
    return true;
}

// Submit form
const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();

    if (validateForm()) {
        alert("Message Sent! \nThanks for completing the form. We'll be in touch soon!");
    }
})

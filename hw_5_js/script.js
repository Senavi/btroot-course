const userForm = document.forms['user'];

userForm.onsubmit = function(event) {
    const username = userForm['username'].value.trim();
    const age = userForm['age'].value.trim();

    // Check if either field is empty
    if (username === '' || age === '') {
        alert('Please fill out all the fields.');
        event.preventDefault();
    }
};

// Select the input elements and the span for full name display
const txtFirstName = document.querySelector('#txt-first-name');
const txtLastName = document.querySelector('#txt-last-name');
const spanFullName = document.querySelector('#span-full-name');

// Function to update the full name display
function updateFullName() {
    const firstName = txtFirstName.value;
    const lastName = txtLastName.value;
    spanFullName.innerHTML = `${firstName} ${lastName}`.trim();
}

// Add event listeners for keyup event on both input fields
txtFirstName.addEventListener('keyup', updateFullName);
txtLastName.addEventListener('keyup', updateFullName);

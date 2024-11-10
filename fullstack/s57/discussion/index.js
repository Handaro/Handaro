// we created a variable called "txtFirstName" to store the element we want to manipulate
// document object refers to the whole webpage. It points to the html file connected to your js file
// querySelector() method is used to select a specific object(HTML element) from the document(HTML webpage)
// # is used to identify that the value will be from an id
/*
	document.getElementById('txt-first-name');
	document.getElementByClassName('txt-first-name');
	document.getElementByTagName('input')
*/
const txtFirstName = document.querySelector('#txt-first-name');
const spanFullName = document.querySelector('#span-full-name');

console.log(txtFirstName);

// Whenever a user interacts with a webpage, the action is considered as an event
// addEventListener() method that listens/checks for the specific event/interaction between the user and the specified object
// In the first argument, the specific event to listen to is added.
// keyup is the trigger for the event
// the event parameter contains the information on the triggered event
txtFirstName.addEventListener('keyup', (event) => {

	// event.target containe the element where the event was triggered
	console.log(event.target);
	// event.target.value contains the value of the event target
	console.log(event.target.value);

	// the innerHTML of the specified object will strore the value of txtFirstName
	// spanFullName.innerHTML = event.target.value
	spanFullName.innerHTML = txtFirstName.value;
})  
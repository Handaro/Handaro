// Fetch all posts from the API when the page loads
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Show posts on the page
        showPosts(data);
    });

// Function to display posts on the page
const showPosts = function(posts) {
    let postEntries = ''; // Empty variable to store HTML for posts

    posts.forEach(function(post) {
        postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="editPost('${post.id}')">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
    });

    document.querySelector("#div-post-entries").innerHTML = postEntries;
}

// Event listener for form submission to add a post
document.querySelector('#form-add-post').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from auto-submitting and refreshing the page

    let titleInput = document.querySelector('#txt-title');
    let bodyInput = document.querySelector('#txt-body');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        alert('Successfully added');
        titleInput.value = null;
        bodyInput.value = null;
    });
});

// Function to populate the Edit Post form with the post title and body
const editPost = function(id) {
    let title = document.querySelector(`#post-title-${id}`).innerHTML;
    let body = document.querySelector(`#post-body-${id}`).innerHTML;

    document.querySelector('#txt-edit-id').value = id;
    document.querySelector('#txt-edit-title').value = title;
    document.querySelector('#txt-edit-body').value = body;
    document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

// Event listener for form submission to update a post (PUT request)
document.querySelector('#form-edit-post').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from auto-submitting

    // Get the values from the form inputs
    let id = document.querySelector('#txt-edit-id').value;
    let title = document.querySelector('#txt-edit-title').value;
    let body = document.querySelector('#txt-edit-body').value;

    // Send the PUT request to update the post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title,
            body: body,
            userId: 1 // Assuming the userId remains 1 for all posts
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log('Successfully updated:', data);
        alert('Successfully updated.');

        // Clear input fields after successful update
        document.querySelector('#txt-edit-title').value = '';
        document.querySelector('#txt-edit-body').value = '';
        document.querySelector('#txt-edit-id').value = '';

        // Disable the submit button
        document.querySelector('#btn-submit-update').setAttribute('disabled', 'true');

        // Update the DOM with the new post data
        document.querySelector(`#post-title-${id}`).innerHTML = title;
        document.querySelector(`#post-body-${id}`).innerHTML = body;
    })
    .catch(function(error) {
        console.error('Error updating post:', error);
    });
});

// Function to delete a post
const deletePost = function(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
    .then(function(response) {
        console.log('Deleted:', response);
        alert('Successfully deleted.');
        document.querySelector(`#post-${id}`).remove();
    });
}

// Add event listener for deleting all posts
document.querySelector('#delete-all').addEventListener('click', function() {
    alert('All Posts Deleted.');
    document.querySelector('#div-post-entries').innerHTML = '';
});

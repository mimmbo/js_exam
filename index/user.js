const userDetailsContainer = document.getElementById('Details');
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('userId');
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        userDetailsContainer.innerHTML = `
                <h2>User Details</h2>
                <p><b>Name:</b> ${user.name}</p>
                <p><b>Email:</b> ${user.email}</p>
                <p><b>Website:</b> ${user.website}</p>
                <p><b>Phone:</b> ${user.phone}</p>
                <p><b>Company:</b> ${user.company.name}</p>
                <p><b>Address:</b> ${user.address.street}, ${user.address.city}</p> 
                <button id="Button">Post of current user</button>
            `;
        document.getElementById('Button').addEventListener('click', function () {
            ShowUserPosts(userId);
        });
    })
let postsVisible = false;
function ShowUserPosts(userId) {
    const postsContainer = document.getElementById('postsContainer');
    if (postsVisible) {
        postsContainer.innerHTML = '';
        postsVisible = false;
    } else {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                posts.forEach(post => {
                    const postBlock = document.createElement('div');
                    postBlock.classList.add('post-block');
                    postBlock.innerHTML = `
                        <h4>${post.title}</h4>
                        <button onclick="viewPostDetails(${post.id})">View Post Details</button>
                    `;
                    postsContainer.appendChild(postBlock);
                });
                postsVisible = true;
            });
    }
}
function viewPostDetails(postId) {
    window.location.href = `post-details.html?postId=${postId}`;
}
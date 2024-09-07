const postDetailsContainer = document.getElementById('Details');
const commentsContainer = document.getElementById('Container');
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        postDetailsContainer.innerHTML = `
                    <h2>Post Details</h2>
                    <p><b>Title:</b> ${post.title}</p>
                    <p><b>Body:</b> ${post.body}</p>
                `;
    });
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        commentsContainer.innerHTML = '';
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentBlock.className = 'block';
            commentBlock.innerHTML = `
                        <p><b>Name:</b> ${comment.name}</p>
                        <p><b>Email:</b> ${comment.email}</p>
                        <p><b>Comment:</b> ${comment.body}</p>
                    `;
            commentsContainer.appendChild(commentBlock);
        });
    });
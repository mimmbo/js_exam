// Отримання елементів сторінки
const userListContainer = document.getElementById('users');

// Функція для отримання користувачів
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const userBlock = document.createElement('div');
            userBlock.classList.add('users');
            userBlock.innerHTML = `
                <h3>${user.name}</h3>
                <p>ID: ${user.id}</p>
                <button onclick="viewUserDetails(${user.id})">View Details</button>
            `;
            userListContainer.appendChild(userBlock);
        });
    })
    .catch(error => {
        console.error('Error fetching users:', error);
        userListContainer.innerHTML = `<p>Error fetching users. Please try again later.</p>`;
    });
function viewUserDetails(userId) {
    window.location.href = `user_details.html?userId=${userId}`;
}

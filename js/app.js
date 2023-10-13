const key = 'https://jsonplaceholder.typicode.com/users';
let tableContents = document.querySelector('#table-contents');


const renderUserData = (users) => {
    users.forEach((user) => {
        tableContents.innerHTML += `
        <tr key=${user.id}>

        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        <td>${user.address.city}</td>
        <td>${user.website}</td>

        </tr>
        `;
    });
};



const getUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        console.log('Hello world');
        renderUserData(data);
      }
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
};
  

document.addEventListener("DOMContentLoaded", () => {
    getUsers(key);
  });
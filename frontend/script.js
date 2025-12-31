const API_URL = "http://localhost:5000/api/users";

const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

// Fetch users
async function fetchUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();

  userList.innerHTML = "";
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
}

// Add user
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  form.reset();
  fetchUsers();
});

// Load users on page load
fetchUsers();

const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json(); 
        return users; 
    } catch (error) {
        console.log(error);
        return []; 
    }
};

const createTable = (users) => {
    const tableContainer = document.getElementById("table-container");
    const table = document.createElement("table");
    const headers = ["ID", "Name", "Username", "Email", "Phone"]; 
    const headerRow = table.insertRow();
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    users.forEach(item => {
        const row = table.insertRow();
        row.insertCell().textContent = item.id;
        row.insertCell().textContent = item.name;
        row.insertCell().textContent = item.username;
        row.insertCell().textContent = item.email;
        row.insertCell().textContent = item.phone;
    });
    tableContainer.appendChild(table);
    table.classList.add("table");
};

const finish = async () => {
    const users = await fetchUsers();
    if (users.length > 0) {
        createTable(users);
    } else {
        console.log("No users fetched.");
    }
};
finish();

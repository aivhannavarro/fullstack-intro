const button = document.getElementById("fetchBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {

    output.innerHTML = "<p>Loading...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            output.innerHTML = "";

            data.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user");

                div.innerHTML = `
                    <strong>${user.name}</strong><br>
                    ${user.email}
                `;

                output.appendChild(div);
            });
        })
        .catch(error => {
            output.innerHTML = "<p>Error fetching data</p>";
            console.error(error);
        });
});
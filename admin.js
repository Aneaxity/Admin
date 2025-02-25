function generateCode() {
    let code = Math.random().toString(36).substring(2, 10).toUpperCase();
    let codeList = document.getElementById("codeList");
    let listItem = document.createElement("li");
    listItem.innerText = code;
    codeList.appendChild(listItem);
}

function logout() {
    localStorage.removeItem("role");
    window.location.href = "login.html";
}

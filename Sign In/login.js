let login = document.getElementById("login");
login.addEventListener("submit", (e) => {
  e.preventDefault();

  let users = JSON.parse(localStorage.users);

  let email = document.getElementById("email");
  let pw = document.getElementById("password");

  let check = false;
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === email.value.trim() &&
      users[i].pw === pw.value.trim()
    ) {
      check = true;
      break; //kiểm rồi nên không kiểm nữa//;
    }
  }
  if (check === true) {
    window.location.href = "file:///G:/MindX/JSA04/EXAM/index.html"; //quay lại được trang trước//;
  } else {
    alert("Please input again");
  }
});

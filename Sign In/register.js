let register = document.querySelector("#register");
register.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let pw = document.getElementById("password");
  let cpw = document.getElementById("conpassword");

  let lowerCaseLetter = /[a-z]/g;
  let upperCaseLetter = /[A-Z]/g;
  let numbers = /[0-9]/g;

  // trim() cắt khoảng trống 2 bên
  // ! phủ định vế
  if (
    email.value.trim().length == 0 &&
    pw.value.trim().length == 0 &&
    cpw.value.trim().length == 0
  ) {
    alert("Please enter your email & password");
  } else if (email.value.trim().length == 0) {
    alert("Please enter your email");
  } else if (pw.value.trim().length == 0) {
    alert("Please enter your password");
  } else if (cpw.value.trim().length == 0) {
    alert("Please connfirm your password");
  } else if (pw.value.trim().length < 8) {
    alert("Your password must be at least 8 characters");
  } else if (!pw.value.trim().match(lowerCaseLetter)) {
    alert("Your password must contain a lowercase letter");
  } else if (!pw.value.trim().match(upperCaseLetter)) {
    alert("Your password must contain a uppercase letter");
  } else if (!pw.value.trim().match(numbers)) {
    alert("Your password must contain numbers or special characters");
  } else if (pw.value.trim() !== cpw.value.trim()) {
    alert("Your password does not match");
  } else {
    if (localStorage.users) {
      let users = JSON.parse(localStorage.users);
      let userExist = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email.value) {
          userExist = true;
          break;
        }
      }
      if (userExist === true) {
        alert("User existed");
      } else {
        users.push({
          email: email.value.trim(),
          pw: pw.value.trim(),
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Your registration is successful");
        location.replace("login.html"); //không quay lại được trang trước//;
      }
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([{ email: email.value.trim(), pw: pw.value.trim() }])
      );
      alert("Your registration is successful");
      location.replace("login.html"); //không quay lại được trang trước//;
    }
  }
});

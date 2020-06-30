$(document).ready(function() {
  $(".message a").click(function() {
    $("form").animate(
      {
        height: "toggle",
        opacity: "toggle"
      },
      "slow"
    );
  });

  $(".loginbtn").click(function() {
    $.ajax({
      url: "http://localhost:3000/assets/user",
      type: "GET",
      error: (jqXHR, textStatus, error) =>
        console.log(`${textStatus} -> ${error}`),
      success: function(data) {
        let users = data;
        console.log(users);
        let found = false;
        let username = document.getElementById("usernamelogin").value;
        let password = document.getElementById("passwordlogin").value;
        for (let user of users) {
          if (user.username === username && user.password === password) {
            document.cookie = "login = true";
            document.cookie = "user =" + username;

            found = true;
            if (user.admin) {
              document.cookie = "admin = true";
            } else {
              document.cookie = "admin = false";
            }
            window.location.href = "http://localhost:3000/home.html";
            break;
          }
        }
        if (found === false) {
          alert("Login Failed!");
        }
      }
    });
  });
});

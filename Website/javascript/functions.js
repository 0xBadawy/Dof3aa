var signout = document.getElementById("sign-out-nav");

signout.onclick = function () {
    localStorage.removeItem("token");
    window.location.href = "login.html";
    
}


FeatchData();



var domain = "https://localhost:44303/";
function FeatchData() {
  var formData = new FormData();

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://localhost:44303/api/User/GetUserInfo");
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Course created successfully");
      } else {
        console.log("Error creati ng course");
      }
    }
  };

  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
    // xhr.responseText to object
    var obj = JSON.parse(xhr.responseText);
    console.log(obj);
    console.log(obj.groups);
    LoadProfileData(obj);
  };
}

function LoadProfileData(obj) {
  document.getElementById("ProfilePicNavBar").src = domain + obj.imageUrl;
  console.log(domain + obj.imageUrl);
}


// alert("hello");
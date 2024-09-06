// const subjects = require('./datatest.js');

// if not logged in, redirect to login page

function submitForm() {
  var xhr = new XMLHttpRequest();

  // Set up the request
  xhr.open("GET", "http://dof3aa.runasp.net/api/User/GetUserInfo", true);

  // Check for errors and handle response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        handleSuccess(xhr.responseText);
      } else {
        handleFailure(xhr.status);
      }
    }
  };

  // Set authorization header with a valid ASCII token
  var token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6Ik1haG1vdWQiLCJleHAiOjE3MTU3OTI4NTEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzAzLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQyMDAvIn0.XGJHBqZIe9zj2iFAkiI3N33_TGfWG5LXdVefs9e6PSg";
  xhr.setRequestHeader("Authorization", token);

  // Send the request
  xhr.send();
}

// Function to handle successful response
function handleSuccess(response) {
  localStorage.setItem("token", response);
  //window.location.href = "./courses.html";
  console.log(JSON.parse(response));
}

// Function to handle request failure
function handleFailure(status) {
  console.error("Request failed:", status);
}

submitForm();

var colors = ["#D2EFFB", "#D2EFFB", "#E2F4DC", "#D2EFFB", "#EFEBF9", "#E2F4DC"];

function createCardLecture(
  courseId,
  imgSrc,
  subjectCode,
  subjectName,
  moreInfo,
  username,
  lastUpdated,
  parant
) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card", "h-100");

  card.addEventListener("click", () => {
    window.location.href = `weeks.html?id=${courseId}`;
  });
  const img = document.createElement("img");
  img.src = imgSrc;
  img.classList.add("card-img-top");
  img.alt = imgSrc;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const courseCode = document.createElement("h3");
  courseCode.classList.add("card-title", "CourseCode");
  courseCode.textContent = subjectCode;

  const title = document.createElement("h5");
  title.classList.add("card-title", "subjectName");
  title.textContent = subjectName;

  const info = document.createElement("p");
  info.classList.add("card-text");
  info.textContent = moreInfo;

  const usernameElement = document.createElement("h6");
  usernameElement.classList.add("card-title", "DoctorName");
  usernameElement.textContent = username;

  const icon = document.createElement("i");
  // <i class="fa-solid fa-ellipsis-vertical"></i>
  icon.classList.add("fa-solid", "fa-ellipsis-vertical");

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  const lastUpdatedElement = document.createElement("small");
  lastUpdatedElement.classList.add("text-body-secondary");
  lastUpdatedElement.textContent = lastUpdated;

  cardBody.appendChild(courseCode);
  cardBody.appendChild(title);
  cardBody.appendChild(info);
  cardBody.appendChild(usernameElement);

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  cardDiv.appendChild(card);

  const mainCoursesDiv = document.getElementById(parant);
  mainCoursesDiv.appendChild(cardDiv);

  cardFooter.appendChild(lastUpdatedElement);

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  card.style.backgroundColor = randomColor;
}

// ------------------------------ load courses data ------------------------------

var domain = "http://dof3aa.runasp.net/";
function FeatchData() {
  var formData = new FormData();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://dof3aa.runasp.net/api/User/GetUserInfo");
  var token = "Bearer " + localStorage.getItem("token");
  xhr.setRequestHeader("Authorization", token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log("Course created successfully");
      } else {
        alconsole.log("Error creating course");
      }
    }
  };

  xhr.send(formData);
  xhr.onload = function () {
    console.log(xhr.responseText);
    // xhr.responseText to object
    var obj = JSON.parse(xhr.responseText);
    // console.log(obj);
    LoadNavBarData(obj);

    LoadCoursesData(obj.groups);
  };
}
FeatchData();

function LoadNavBarData(obj) {}

function LoadCoursesData(obj) {
  var countOfCourses = 0,
    countOfSections = 0,
    countOfGeneral = 0;
  // console.log(obj);
  //  console.log(obj.cource);
  obj.forEach((element) => {
    const course = element.cource;
    if (course.type == 1) {
      countOfCourses++;
      createCardLecture(
        course.id,
        domain + course.image,
        course.title,
        course.subTitle,
        course.description,
        "",
        "Last updated 3 mins ago",
        "main-course-div"
      );
    } else if (course.type == 2) {
      countOfSections++;
      createCardLecture(
        course.id,
        domain + course.image,
        course.title,
        course.subTitle,
        course.description,
        "",
        "Last updated 3 mins ago",
        "main-section-div"
      );
    } else {
      countOfGeneral++;
      createCardLecture(
        course.id,
        domain + course.image,
        course.title,
        course.subTitle,
        course.description,
        "",
        "Last updated 3 mins ago",
        "main-general-div"
      );
    }
  });
  displayCoursesDiv(countOfCourses, countOfSections, countOfGeneral);
}

function displayCoursesDiv(countOfCourses, countOfSections, countOfGeneral) {
  if (countOfCourses == 0)
    document.getElementById("main-course-div-parant").style.display = "none";

  if (countOfSections == 0)
    document.getElementById("main-section-div-parant").style.display = "none";

  if (countOfGeneral == 0)
    document.getElementById("main-general-div-parant").style.display = "none";
}

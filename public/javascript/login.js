const studentLoginButton = document.getElementById("student-login-button");
const teacherLoginButton = document.getElementById("teacher-login-button");
var showStudentLogin = document.getElementById("show-student-login");
var showTeacherLogin = document.getElementById("show-teacher-login");



showTeacherLogin.style.display = "none";
showStudentLogin.style.display = "none";

studentLoginButton.addEventListener("click", studentLoginClick);
function studentLoginClick() {
  console.log("i clicked something");
  showStudentLogin.style.display = "block";
  studentLoginButton.style.display = "none";
  teacherLoginButton.style.display = "none";
//   if (showStudentLogin.style.display === "none") {
//     showStudentLogin.style.display = "block";
//   } else {
//     showStudentLogin.style.display = "none";
//   }
}
teacherLoginButton.addEventListener("click", teacherLoginClick);
function teacherLoginClick() {
  console.log("i clicked something");
  showTeacherLogin.style.display = "block";
  teacherLoginButton.style.display = "none";
  studentLoginButton.style.display = "none";
//   if (showTeacherLogin.style.display === "none") {
//     showTeacherLogin.style.display = "block";
//   } else {
//     showTeacherLogin.style.display = "none";
//   }
}

//Student Login Start
async function loginStudentHandler(event) {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname-login').value.trim();
    const lastname = document.querySelector('#lastname-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (firstname && lastname && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          firstname,
          lastname,
          role:"student",
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log("you are now logged in");
        //We need to have this go to the start quiz.ejs file
        document.location.replace('/startquiz/')
      } else {
        alert(response.statusText);
      }
    }
  }
  document.querySelector('.student-form').addEventListener('submit', loginStudentHandler);
//Student Login End

  //Teacher Login Start
  async function loginTeacherHandler(event) {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname-login-teacher').value.trim();
    const lastname = document.querySelector('#lastname-login-teacher').value.trim();
    const password = document.querySelector('#password-login-teacher').value.trim();
  
    if (firstname && lastname && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          firstname,
          lastname,
          role:"teacher",
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log("you are now logged in");
        window.alert("The teacher is now logged in please route to dashboard via render on the server.js file see start quiz for example")
        //render teacher dashboard html
      } else {
        alert(response.statusText);
      }
    }
  }
  document.querySelector('.teacher-form').addEventListener('submit', loginTeacherHandler);
//Teacher Login end

//Signup Start
async function signupFormHandler(event) {
    event.preventDefault();
  
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const role = document.querySelectorAll('input[name="radio"]');
    let selectedRole;
    Array.prototype.forEach.call(roleButtons, function(btn) {
        btn.addEventListener('change', function(){
            selectedRole = this.value;
            console.log(role);
  });
});
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          firstname,
          lastname,
          role, //this needs to be controlled by radio buttons unless a form is easier.
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
//Signup End



function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form-message");

  messageElement.textContent = message;
  messageElement.classList.remove("form-message-success", "form-message-error");
  messageElement.classList.add(`form-message-${type}`);
}
/*
function setInputError(inputElement, message) {
    inputElement.classList.add('form-input-error');
    inputElement.parentElement.querySelector('.form-input-error-message').textContent = message;
}

setFormMessage(loginForm, 'success', 'You are logged in:)');
*/
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#create-account");

  document
    .querySelector("#link-create-account")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form-hidden");
      createAccountForm.classList.remove("form-hidden");
    });

  document.querySelector("#link-login").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    createAccountForm.classList.add("form-hidden");
  });

  /* loginForm.addEventListener('submit', e => {
        e.preventDefault();

        //perform your login

        setFormMessage(loginForm, 'error', 'invalid username/password');
    });

    //MUST DECIDE ON SOME SORT OF VALIDATION FOR USERNAME AND PASSWORD
    //document.querySelectorAll('.form-input').forEach(inputElement => {
      //  inputElement.addEventListener('blur', e => {
            
        //})
    //})
    */
});

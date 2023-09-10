import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const auth = getAuth();
const signIn = () =>{
    const username=document.getElementById("username");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then((resolve)=>{
        alert("signIn successfull")
        // window.location="https://www.google.com.pk/"
    })
    .catch((reject)=>{
    alert("signIn failed")})
}
let signup = document.getElementById("btn_signIn");
signup.addEventListener("click",signIn)
const login = () =>{

    const email=document.getElementById("login-email");
    const password=document.getElementById("login-password");
    signInWithEmailAndPassword(auth,login-email.value,login-password.value)
    .then((resolve)=>{
        alert("login successfull")
    })
    .catch((reject)=>{
    alert("login failed")})
}
let btn_login=document.getElementsById("btn_login");
btn_login.addEventListner("click",login)
document.addEventListener('DOMContentLoaded', function () {
    const signinForm = document.getElementById('signin-form');
    const classForm = document.getElementById('class-form');

    signinForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Add your admin sign-in logic here
    });

    classForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const classTimings = document.getElementById('class-timings').value;
        const schedule = document.getElementById('schedule').value;
        const teacherName = document.getElementById('teacher-name').value;
        const sectionName = document.getElementById('section-name').value;
        const courseName = document.getElementById('course-name').value;
        const batchNumber = document.getElementById('batch-number').value;

        // You would typically send this data to the server for CRUD operations
        // Example: Send a POST request to a server endpoint to add class details
        // You can use fetch() or an AJAX library for this purpose
    });
});
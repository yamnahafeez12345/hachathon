import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
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
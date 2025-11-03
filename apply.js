document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const experience = document.getElementById("experience").value.trim();

    if (!name || name.length < 3) {
      alert("Please enter a valid name.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!course) {
      alert("Please select a course.");
      return;
    }

    alert("Thank you for using the website! A message will be sent to you shortly regarding your course.");
    form.reset();
  });
});

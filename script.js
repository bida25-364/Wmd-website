document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("Thank you for your feedback!");
      form.reset();
    });
  }

});
console.log("JavaScript is working!");

alert("Welcome to Urban Eats!");

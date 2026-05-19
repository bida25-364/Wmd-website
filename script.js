// Feedback form submission
document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.querySelector("form");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for your feedback! We appreciate your support and look forward to serving you again at Urban Eats.");

            feedbackForm.reset();
        });
    }
});

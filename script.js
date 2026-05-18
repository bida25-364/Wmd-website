console.log("JavaScript is working!");
alert("Welcome to Urban Eats!");

function filterMenu(category) {
  const items = document.querySelectorAll(".card");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else if (item.innerText.toLowerCase().includes(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
function filterMenu(category) {
  const items = document.querySelectorAll(".card");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else if (item.innerText.toLowerCase().includes(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

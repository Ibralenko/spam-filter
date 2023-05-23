const userName = document.forms.form.username.value;
let rightName = userName.trim();
let rigtUserName = rightName[0].toUpperCase() + rightName.toLowerCase();

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const userName = document.forms.form.username.value;
const LinkInput = document.forms.form.link.value;
const TextInput = document.forms.form.comment.value;
const button = document.querySelector(".container__btn");

let getName = () => {
  let rightName = userName.trim();
  let rigtUserName = rightName[0].toUpperCase() + rightName.toLowerCase();
};
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

// const text = document.forms.form.comment.value;
// function checkSpam(str) {
//   if (text.toLowerCase() === "viagra".toLowerCase())
//     return (text.textContent = "***");
//   else if (text.toLowerCase() === "xxx".toLowerCase())
//     return (text.textContent = "***");
//   else return text;
// }

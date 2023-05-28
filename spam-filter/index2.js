const nameInput = document.querySelector("#username");
const linkInput = document.querySelector("#link");
const commentInput = document.querySelector("#comment");
const button = document.querySelector(".container__btn");

const userName = nameInput.value;
const userLink = linkInput.value;
const userComment = commentInput.value;

function getRightName(name) {
  let chekedName = name.trim();
  result = chekedName[0].toUpperCase() + chekedName.slice(1).toLowerCase();
  return result;
}
let rightUserName = getRightName(userName);

function showImage(src) {
  let image = document.createElement("img");
  image.src = src;
}
let avatar = showImage(userLink);

function checkSpam() {
  let rightComment = userComment.trim();
  rightComment = /(viagra|xxx)/gi;
  return userComment.replace(rightComment, "***");
}
let checkedComment = checkSpam();

button.addEventListener("click", sendComment);

function sendComment() {
  const resName = document.querySelector(".user__name");
  resName.textContent = rightUserName;
  const resChat = document.querySelector(".chat__txt");
  resChat.textContent = checkedComment;
  input.value = null;
}

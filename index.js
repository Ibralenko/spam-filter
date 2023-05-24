const nameInput = document.querySelector("#username");
const linkInput = document.querySelector("#link");
const commentInput = document.querySelector("#comment");
const button = document.querySelector(".container__btn");

const userName = nameInput.value.trim();
const userLink = linkInput.value;
const userComment = commentInput.value;

let rightUserName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

function checkSpam(str) {}

button.addEventListener("click", sendComment);

function sendComment() {
  const resName = document.querySelector(".user__name");
  resName.textContent = rightUserName;
  const res = document.querySelector(".user__name");
  resName.textContent = rightUserName;
  const resChat = document.querySelector(".chat__txt");
  resChat.textContent = userComment;
}

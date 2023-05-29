// - Поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее.
// Например, было введено пользователем : `иВаН` .
// Стало: `Иван` .
// - поле для ввода ссылки на аватар;
// - поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию `checkSpam(str)`, заменяющую `'viagra'` или `'XXX'` на `***` ;
// - функция должна быть нечувствительна к регистру:const nameInput = document.querySelector("#username");

const nameInput = document.querySelector("#username");
const linkInput = document.querySelector("#link");
const commentInput = document.querySelector("#comment");
const button = document.querySelector(".container__btn");

const userName = nameInput.value;
const userAvatar = linkInput.value;
const userComment = commentInput.value;

function getRightName(name) {
  let chekedName = name.trim();
  result = chekedName[0].toUpperCase() + chekedName.slice(1).toLowerCase();
  return result;
}
let checkedName = getRightName(userName);

function showImage(src) {
  let img = document.createElement("img");
  img.src = userAvatar.value;
  img.alt = "Аватарка пользователя";
  let div = document.createElement("div");
  div.append(img);
  document.body.append(div);
}
let avatar = showImage(userAvatar);

function checkSpam() {
  let rightComment = userComment.trim();
  rightComment = /(viagra|xxx)/gi;
  return userComment.replace(rightComment, "***");
}
let checkedComment = checkSpam();

button.addEventListener("click", sendComment);

function sendComment() {
  const resName = document.querySelector(".user__name");
  resName.textContent = checkedName;
  const resChat = document.querySelector(".chat__txt");
  resChat.textContent = checkedComment;
  showImage(userAvatar);
}

// const userName = document.querySelector("#username").value;
// const userLink = document.querySelector("#link").value;
// const userComment = document.querySelector("#comment").value;
// const button = document.querySelector(".container__btn");

// function sendComment(event) {
//   function getRightName(name) {
//     let chekedName = name.trim();
//     result = chekedName[0].toUpperCase() + chekedName.slice(1).toLowerCase();
//     return result;
//   }
//   let nickname = getRightName(userName);

//   function showImage(src) {
//     let image = document.createElement("img");
//     image.src = src;
//     commentAvatar.append(img);
//   }

//   function checkSpam() {
//     let rightComment = userComment.trim();
//     rightComment = /(viagra||xxx)/gi;
//     return userComment.replace(rightComment, "***");
//   }

//   const container = document.querySelector("container__chat");

//   let userNameCont = document.createElement("p");
//   nickname.textContent = getRightName;
//   nickname.className = "user__name";
//   container.appendChild(nickname);

//   const avatar = new Image();
//   avatar.src = img;
//   avatar.className = "image__size";
//   container.appendChild(avatar);

//   let comment = document.createElement("p");
//   comment.textContent = checkedComment;
//   comment.className = "use__comment";
//   parent.appendChild(comment);
// }
// button.addEventListener("click", sendComment);

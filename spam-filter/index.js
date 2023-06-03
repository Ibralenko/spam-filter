const button = document.querySelector(".container__btn");
const checkboxAnonim = document.querySelector("#checkbox-anonim");
const form = document.querySelector(".form");

function getRightName(name) {
  if (checkboxAnonim.checked === true || name === "") {
    return "anonim";
  } else {
    let rightName = name.trim();
    rightName = rightName[0].toUpperCase() + rightName.slice(1).toLowerCase();
    return rightName;
  }
}

function showAvatar(link) {
  const arrayAvatars = [
    "./assets/img/avatar1.jpg",
    "./assets/img/avatar2.jpg",
    "./assets/img/avatar3.jpg",
    "./assets/img/avatar4.jpg",
    "./assets/img/avatar5.jpg",
    "./assets/img/avatar6.jpg",
  ];

  if (link === "" || link === " ") {
    const randomAvatar =
      arrayAvatars[Math.floor(Math.random() * arrayAvatars.length)];
    return randomAvatar;
  } else {
    return link;
  }
}

function checkSpam(comment) {
  let rightComment = comment.trim();
  rightComment = /(viagra|xxx)/gi;
  return comment.replace(rightComment, "***");
}

function getTime(time) {
  let date = new Date().toLocaleString("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return date;
}

function sendComment(name, imageSrc, date, text) {
  const nametext = document.createElement("p");
  nametext.textContent = name;
  nametext.classList.add("user-name");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.classList.add("user-avatar");

  const commentDate = document.createElement("p");
  commentDate.textContent = date;
  commentDate.classList.add("time-comment");

  const comment = document.createElement("p");
  comment.textContent = text;
  comment.classList.add("user-comment");

  const container = document.querySelector(".container__chat");
  container.append(nametext);
  container.append(image);
  container.append(date);
  container.append(comment);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const untestedName = document.querySelector("#username").value;
  const userLink = document.querySelector("#link").value;
  const untestedComment = document.querySelector("#comment").value;

  const editedName = getRightName(untestedName);
  const image = showAvatar(userLink);
  const editedComment = checkSpam(untestedComment);
  const userDate = getTime();

  sendComment(editedName, image, editedComment, userDate);

  form.reset();
});

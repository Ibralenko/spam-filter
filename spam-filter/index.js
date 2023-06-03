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

  if (link === "") {
    const randomAvatar =
      arrayAvatars[Math.floor(Math.random() * arrayAvatars.length - 1)];
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

function sendComment(name, imageSrc, text) {
  const nametext = document.createElement("p");
  nametext.textContent = name;
  nametext.classList.add("user-name");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.classList.add("user-avatar");

  const comment = document.createElement("p");
  comment.textContent = text;
  comment.classList.add("comment__text");

  const container = document.querySelector(".container__chat");
  container.append(nametext);
  container.append(image);
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

  sendComment(editedName, image, editedComment);

  form.reset();
});

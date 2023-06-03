// // const nameInput = document.querySelector("#username");
const linkInput = document.querySelector("#link");
const commentInput = document.querySelector("#comment");
const button = document.querySelector(".container__btn");
const checkboxAnonim = document.querySelector("#checkbox-anonim");
const form = document.querySelector(".form");

function getRightName(name) {
  if (checkboxAnonim.checked) {
    return "anonim";
  } else {
    let rightName = name.trim();
    rightName = rightName[0].toUpperCase() + rightName.slice(1).toLowerCase();
    return rightName;
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
  image.classList.add("user-avatar");
  image.src = showAvatar(imageSrc);

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

  const editedName = getRightName(document.querySelector("#username").value);
  const image = showAvatar(linkInput.value);
  const editedComment = checkSpam(commentInput.value);

  sendComment(editedName, image, editedComment);

  form.reset();
});

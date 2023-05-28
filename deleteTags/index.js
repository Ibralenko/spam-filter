let text =
  "<br> нужно<a> срочно</a> придумать <img> и <br>оочистить <p> этот </p> текст от <img /> лишних тегов";

function deleteTags(str) {
  let res = str;
  res = res.replace(/<(.|\n)*?>/g, "");

  return res;
}

console.log(deleteTags(text));

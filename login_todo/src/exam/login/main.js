// 코드 구현

function show_warning() {
  const class_login = document.getElementById("log_btn");
  const element = document.getElementById("input__pw").value;
  if (element.length > 20 || element.length < 8) {
    class_login.style.backgroundColor = "gray";
  } else {
    class_login.style.color = "black";
    class_login.style.backgroundColor = "greenyellow";
  }
}

function open_popup() {
  const element_id = document.getElementById("input__id").value;
  const element_pw = document.getElementById("input__pw").value;
  console.log(element_id.length, element_pw.length);
  if (
    element_id.length > 1 &&
    element_pw.length > 7 &&
    element_pw.length < 21
  ) {
    msg = element_id + "님 어서오세요";
    alert(msg);
  }
}

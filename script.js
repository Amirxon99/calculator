const display = document.getElementById("display");
display.style = "text-align:right";

function hisoblash() {
  if (display.value == "") {
    display.value = "";
  } else {
    display.value = eval(display.value);
  }
}

function deleteValue() {
  display.value = display.value.slice(0, -1);
}

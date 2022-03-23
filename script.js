let outputScreen = document.getElementById("output-screen");

function insert(num) {
  outputScreen.value += num;
}

function equal() {
  let x = outputScreen.value;
  if (x) {
    outputScreen.value = eval(outputScreen.value);
  }
  if (x == "") {
    alert("Invalid " + "\n" + "Masukan angka terlebih dahulu !");
  }
}

function c() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

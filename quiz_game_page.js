function send() {
  n1 = document.getElementById("number1").value;
  n2 = document.getElementById("number2").value;
  answer = parseInt(n1) * parseInt(n2);
  Qn = "<h4>" + n1 + " X " + n2 + "</h4>";
  IB = "<br> Answer : <input type='text' id='input_check_box'>";
  Cb =
    "<br> <br> <button class='btn btn-success' onclick='check()'>Check</button>";
  row = Qn + IB + Cb;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

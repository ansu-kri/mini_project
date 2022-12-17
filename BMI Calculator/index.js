let btn = document.querySelector("button").addEventListener("click", myBMI);

function myBMI(event) {
  let BMI = document.querySelectorAll("input");
  let x = (BMI[0].value);
  let y = (BMI[1].value);
  let index = (x / ((y * y) / 10000)).toFixed(2);
  if (x == "" || y == "") {
    document.querySelector("#output").innerText = "Please Provide Proper Height and Weight"
  }
  else if (index <= 18.4) {
    document.querySelector("#output").innerText = "Your BMI is" + " " + index + " " + "which means you are UnderWeight"
  }
  else if (index >= 18.5 && index <= 24.9) {
    document.querySelector("#output").innerText = "Your BMI is" + " " + index + " " + "which means you are NormalWeight"
  }
  else if (index >= 25 && index <= 29.9) {
    document.querySelector("#output").innerText = "Your BMI is" + " " + index + " " + "which means you are OverWeight"
  }
  else if (index >= 30) {
    document.querySelector("#output").innerText = "Your BMI is" + " " + index + " " + "which means you are Obses"
  }
}
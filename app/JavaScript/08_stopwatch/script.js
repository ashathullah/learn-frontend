var onoff = document.getElementById("IObtn");
var state = true;
var number = document.getElementById("counts");
var seconds = 0;
var reset = document.getElementById("resetBTN");

onoff.addEventListener("click", Start);
reset.addEventListener("click", Eraseit)
function Start() {
  if (state === true) {
    onoff.innerHTML = "stop";
    const startcounting = function () {
        var id = setTimeout(function () {
            if (state === false) {
                seconds++;
                number.innerHTML = seconds;
                startcounting();
            } else {
                clearTimeout(id);
            }
        }, 1000);
    };
    state = false;
    startcounting();
  } else {
    onoff.innerHTML = "start";
    state = true;
  }
}

function Eraseit() {
    seconds = 0;
    number.innerHTML = seconds;
}
// function createblocks() {
// var dices = document.getElementById('gameBox');
// for(var i = 0; i < 4; i++) {
//     var cell = document.createElement('div');
//     cell.className = 'dices';
//     cell.innerHTML = i;
//     dices.appendChild(cell);
// }
// document.getElementById('gameBox').innerHTML = dices.innerHTML;
// }

(function () {
  document.getElementById("startButton").addEventListener("click", action);

  var dices = document.getElementsByClassName("dices");
  var element = document.getElementsByClassName("element");

  var noOfElem = 0;
  var arg = [];
  var result = true;
  var choiceIndex = [];
  var trueValues = [];
  let markElements = [];
  let ramdomNumbers = [];

  function action() {
    assignNumbers(element);
  }
  //generate random numbers 
  (function generateRandomNumbers() {
      let numbers = [];
      for(let i = 1; i <= 8; i++) {
          for(let j = 0; j < 2;j++) {
              numbers.push(i);
          }
      }
      function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
      ramdomNumbers = shuffle(numbers);
  })();
  //main function
  function assignNumbers(target) {
    for (; noOfElem < 16; noOfElem++) {
      (function (index) {
        target[index].innerHTML = ramdomNumbers[index];
         // closure
        markElements[index] = function() {
          var choice = 0;
          choice = element[index].innerHTML;
          choiceIndex.push(index);
          arg.push(choice);
          element[index].classList.add("show");
          if(element[index].classList.contains("show")) {
            dices[index].removeEventListener("click", markElements[index]);      
          }
          if(arg.length === 2) {
            setTimeout(perform, 200);
          }
        }
        dices[index].addEventListener("click", markElements[index]);
      })(noOfElem);
    }
  }


  function perform() {
    if (arg[0] === arg[1]) {
      arg.push(result);
      trueValues.push(choiceIndex[0], choiceIndex[1]);
    } else {
      result = false;
      arg.push(result);
    }
    show();
  }

  function show() {
    if (result === false) {
      for (var i = 0; i < choiceIndex.length; i++) {
        element[choiceIndex[i]].classList.remove("show");
      }
    }
    if (arg.length === 3) {
        arg = [];
        choiceIndex = [];
    }
    result = true;
    for(let noOfDices = 0; noOfDices < 16; noOfDices++) {
        if(trueValues[noOfDices] !== noOfDices) {
            dices[noOfDices].addEventListener("click", markElements[noOfDices]);
        }
    }
    for (var n = 0; n < trueValues.length; n++) {
        element[trueValues[n]].classList.add("show");
        dices[trueValues[n]].removeEventListener("click", markElements[trueValues[n]]);
    }
  }
})();
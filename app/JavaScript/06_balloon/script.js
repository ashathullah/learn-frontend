document.getElementById('BTN').addEventListener("click", fly);

var nameOfBalloons = ["bal1", "bal2", "bal3", "bal4", "bal5"];
var speedOfBalloons = [20, 10, 15, 25, 5];

function fly() {    
    var name = 0;
    var speed = 0;
    for(var unit = 0; unit < 5; unit++) {
        name = nameOfBalloons[unit];
        speed = speedOfBalloons[unit];
        var balloons = document.getElementById(name);
        var position = 0;
        var ID = setInterval(action, speed);
        function action() {
            if(position === 80)
            {
                clearInterval(ID);
            }
            else 
            {
                balloons.style.bottom = position + '%';
                position++;
            }
        }
    }
}
function balloon() {
    // Actions
    let stopped = false;
    nodeToBeCloned = document.querySelector('#originalBaloon');
    balloonsElem = document.querySelector('#balloons');
    
    const start = function() {
        stopped = false;
        const balloon = createBalloon();
    }
    
    const stop = function() {
        stopped = true;
    }

    
    // Balloon 
    const balloons = [];
    let position = 0;

    const createBalloon = function() {
        const balloonNode = nodeToBeCloned.cloneNode(true);
        balloonNode.setAttribute('id', '');
        balloonsElem.appendChild(balloonNode);
        balloons.push(balloonNode)
        return balloonNode;
    }

    const moveBalloon = function(balloon) {
        console.log(balloon)
        setTimeout(function() {
            if(!stopped && position < 250) {
                position++;
                balloon.style.bottom = position + 'px';
                moveBalloon();
            }
        }, 20);
    }
    
    // Exposing external
    return {
        start: start,
        stop: stop
    }
}

const app = balloon();
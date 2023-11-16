import moveBar from './moveBar.js'

const game = function () {
  let time = 100;
  let movement = 20;
  let movementBar = 10;
  let width = document.documentElement.clientWidth;
  let height = document.documentElement.clientHeight;
  let controlGame;
  let player1;
  let player2;
  const KEYA = 'KeyA';
  const KEYQ = 'KeyQ';
  const KEYO = 'KeyO';
  const KEYL = 'KeyL';

  function start() {
    init()
    controlGame = setInterval(play, time)

  }

  function init() { //posicion inicial del juego
    ball.style.left = 35 + 'px'
    ball.state = 1;
    ball.direction = 1; //derecha---para saber si le toca al player uno o al dos
    player1 = new Object(); //necesito que sea un objeto para darle atributos de keypress y keycode
    player2 = new Object();
    player1.keyPress = false;
    player2.keyPress = false;
    player1.keyCode = null;
    player2.keyCode = null;
  }

  function play() {
    moveBar()
    moveBall()
    checkIfLost()
  }
  function checkIfLost() {
    if (ball.offsetLeft <= 0) {
      stop()
      console.log('punto para el jugador 2');
    } else {
      if (ball.offsetLeft >= width) {
        stop()
        console.log('punto para el jugador 1');
      }

    }
  }
  function moveBall() {
    ballState()
    switch (ball.state) {
      case 1: //derecha abajo
        ball.style.left = (ball.offsetLeft + movement) + 'px'
        ball.style.top = (ball.offsetTop + movement) + 'px'
        break;
      case 2: //derecha arriba
        ball.style.left = (ball.offsetLeft + movement) + 'px'
        ball.style.top = (ball.offsetTop - movement) + 'px'
        break;
      case 3: //izquierda abajo
        ball.style.left = (ball.offsetLeft - movement) + 'px'
        ball.style.top = (ball.offsetTop + movement) + 'px'
        break;
      case 4: //izquierda arriba
        ball.style.left = (ball.offsetLeft - movement) + 'px'
        ball.style.top = (ball.offsetTop - movement) + 'px'
        break;
    }
  }

  function ballState() {

    if (collidePlayer1()) {
      ball.direction = 1
      if (ball.state === 3) {
        ball.state = 1
      }
      if (ball.state === 4) {
        ball.state = 2
      }
    }
    else if (collidePlayer2()) {
      ball.direction = 2
      if (ball.state === 2) {
        ball.state = 4
      }
      if (ball.state === 1) {
        ball.state = 3
      }
    }

    if (ball.direction === 1) {

      if (ball.offsetTop >= height - 20) {
        ball.state = 2
      } else if (ball.offsetTop <= 20) {
        ball.state = 1
      }
    } else {
      if (ball.direction === 2) {
        if (ball.offsetTop >= height - 20) {
          ball.state = 4
        } else if (ball.offsetTop <= 20) {
          ball.state = 3
        }
      }
    }



  }

  function collidePlayer1() {
    if (ball.offsetLeft <= (barra1.clientWidth) && ball.offsetTop >= barra1.offsetTop && ball.offsetTop <= barra1.offsetTop + barra1.clientHeight) {
      return true
    }
    return false
  }
  function collidePlayer2() {
    if (ball.offsetLeft >= (width - barra2.clientWidth) && ball.offsetTop >= barra2.offsetTop && ball.offsetTop <= barra2.offsetTop + barra2.clientHeight) {
      return true
    }
    return false
  }

  function stop() {
    clearInterval(controlGame)
    document.body.style.backgroundColor = 'red'
  }







































  start()
}()
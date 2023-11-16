const game = function () {
  let time = 30;
  let movement = 20;
  let movementBar = 20;
  let width = document.documentElement.clientWidth - movement;
  let height = document.documentElement.clientHeight - movement;
  let controlGame;
  let player1;
  let player2;

  function start() {
    init()
    controlGame = setInterval(play, time)

  }

  function init() { //posicion inicial del juego
    ball.style.left = 35 + 'px'
    ball.state = 1;
    ball.direction = 1; //derecha---para saber si le toca al player uno o al dos
    player1 = new Object();
    player2 = new Object();
    player1.keyPress = false;
    player2.keyPress = false;
    player1.keyCode = null;
    player2.keyCode = null;
  }

  function play() {
    moveBar()
  }
  function moveBar() {
    if (player1.keyPress) {
      if (player1.keyCode == 'KeyA') {
        console.log(player1.keyCode);
        barra1.style.top = (barra1.offsetTop + movementBar) + 'px';

      }
      if (player1.keyCode === 'KeyQ') {
        player1.posY += movementBar;
      }
    }

  }

  document.onkeydown = function (e) {
    console.log(e);
    switch (e.code) {
      case 'KeyA':
      case 'KeyQ':
        player1.keyPress = true;
        player1.keyCode = e.code;
      case 'keyO':
      case 'keyL':
        player2.keyPress = true;
        player2.keyCode = e.code;
        break;
    }
    document.onkeyup = function (e) {
      if (e.code === 'KeyA' || e.code === 'KeyQ') {
        player1.keyPress = false;
      }
      if (e.code === 'keyO' || e.code === 'keyL') {
        player2.keyPress = false;
      }
    }
    function stop() {
      clearInterval(controlGame)
      document.body.style.backgroundColor = 'red'
    }
  }






































  start()
}()
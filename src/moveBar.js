let movementBar = 10;
let height = document.documentElement.clientHeight;
let player1 = new Object();
let player2 = new Object();
const KEYA = 'KeyA';
const KEYQ = 'KeyQ';
const KEYO = 'KeyO';
const KEYL = 'KeyL';

export default function moveBar() {
  if (player1.keyPress) {
    if (player1.keyCode === KEYA && barra1.offsetTop <= height - 120) {
      barra1.style.top = (barra1.offsetTop + movementBar) + 'px';
    }
    if (player1.keyCode === KEYQ && barra1.offsetTop >= 10) {
      barra1.style.top = (barra1.offsetTop - movementBar) + 'px';
    }
  }
  if (player2.keyPress) {
    if (player2.keyCode === KEYO && barra2.offsetTop >= 10) {
      barra2.style.top = (barra2.offsetTop - movementBar) + 'px';
    }
    if (player2.keyCode === KEYL && barra2.offsetTop <= height - 120) {
      barra2.style.top = (barra2.offsetTop + movementBar) + 'px';
    }
  }

}
document.onkeydown = function (e) {
  console.log(e);
  switch (e.code) {
    case KEYA:
    case KEYQ:
      player1.keyPress = true;
      player1.keyCode = e.code;
    case KEYO:
    case KEYL:
      player2.keyPress = true;
      player2.keyCode = e.code;
      break;
  }
}

document.onkeyup = function (e) {
  if (e.code === KEYA || e.code === KEYQ) {
    player1.keyPress = false;
  }
  if (e.code === KEYO || e.code === KEYL) {
    player2.keyPress = false;
  }
}
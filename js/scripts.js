let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

let player1 = 0;
let player2 = 0;

let blocks = [];

// adicionando o evento de click aos boxes
for (let w = 0; w < boxes.length; w++) {
  boxes[w].addEventListener('click', function () {

    let elemento = checkElemento(player1, player2);


    // verificando se já existe X ou O
    if (this.childNodes.length == 0) {
      let cloneElemento = elemento.cloneNode(true);

      this.appendChild(cloneElemento);

      // computando a jogada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }

      checarCondicaoVitoria();
    }

  });
}


function checkElemento(player1, player2) {

  if (player1 == player2) {
    //x
    elemento = x;
  } else {
    // 0
    elemento = o;
  }

  return elemento;
}


function checarCondicaoVitoria() {
  for (let w = 1; w <= 9; w++) {
    blocks[w] = document.getElementById(`block-${w}`);
  }

  if (blocks[1].childNodes.length > 0 && blocks[2].childNodes.length && blocks[3].childNodes.length > 0) {

    let b1Child = blocks[1].childNodes[0].className;
    let b2Child = blocks[2].childNodes[0].className;
    let b3Child = blocks[3].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }

  if (blocks[4].childNodes.length > 0 && blocks[5].childNodes.length && blocks[6].childNodes.length > 0) {

    let b1Child = blocks[4].childNodes[0].className;
    let b2Child = blocks[5].childNodes[0].className;
    let b3Child = blocks[6].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }

  if (blocks[7].childNodes.length > 0 && blocks[8].childNodes.length && blocks[9].childNodes.length > 0) {

    let b1Child = blocks[7].childNodes[0].className;
    let b2Child = blocks[8].childNodes[0].className;
    let b3Child = blocks[9].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }

  if (blocks[1].childNodes.length > 0 && blocks[4].childNodes.length && blocks[7].childNodes.length > 0) {

    let b1Child = blocks[1].childNodes[0].className;
    let b2Child = blocks[4].childNodes[0].className;
    let b3Child = blocks[7].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }

  if (blocks[2].childNodes.length > 0 && blocks[5].childNodes.length && blocks[8].childNodes.length > 0) {

    let b1Child = blocks[2].childNodes[0].className;
    let b2Child = blocks[5].childNodes[0].className;
    let b3Child = blocks[8].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }
  if (blocks[3].childNodes.length > 0 && blocks[6].childNodes.length && blocks[9].childNodes.length > 0) {

    let b1Child = blocks[3].childNodes[0].className;
    let b2Child = blocks[6].childNodes[0].className;
    let b3Child = blocks[9].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }
  if (blocks[1].childNodes.length > 0 && blocks[5].childNodes.length && blocks[9].childNodes.length > 0) {

    let b1Child = blocks[1].childNodes[0].className;
    let b2Child = blocks[5].childNodes[0].className;
    let b3Child = blocks[9].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }

  if (blocks[3].childNodes.length > 0 && blocks[5].childNodes.length && blocks[7].childNodes.length > 0) {

    let b1Child = blocks[3].childNodes[0].className;
    let b2Child = blocks[5].childNodes[0].className;
    let b3Child = blocks[7].childNodes[0].className;

    if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      declararVencedor('x');
    } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      declararVencedor('o');
    }
  }

  let contador = 0;

  for(let a = 0; a < boxes.length; a++){
    if (boxes[a].childNodes[0] != undefined) {
      contador++;
    }
  }

  if (contador == 9){
    declararVencedor();
  }
}

function declararVencedor(vencedor) {
  let scoreboardX = document.querySelector('#scoreboard-1');
  let scoreboardO = document.querySelector('#scoreboard-2');

  if (vencedor == 'x'){
     scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
     msg = "O Jogador 1 venceu!";
  } else if (vencedor == 'o') { 
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "O Jogador 2 venceu!"
  } else {
    msg = "Deu Velha!";
  }

  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  setTimeout(function(){
    messageContainer.classList.add("hide");

    player1 = 0;
    player2 = 0;
    
    let boxesToRemove = document.querySelectorAll('.box div');

    for (let w = 0; w < boxesToRemove.length; w++){
      boxesToRemove[w].parentNode.removeChild(boxesToRemove[w]);
    }

  }, 3000);

}




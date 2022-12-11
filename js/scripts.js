let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for(let w = 0; w < boxes.length; w++){
  boxes[w].addEventListener('click', function(){

    let elemento = checkElemento(player1, player2);


    // verificando se já existe X ou O
    if (this.childNodes.length == 0){
      let cloneElemento = elemento.cloneNode(true);

      this.appendChild(cloneElemento);

      // computando a jogada
      if (player1 == player2){
        player1++;
      } else {
        player2++;
      }

    }

  });
}


function checkElemento(player1, player2){

    if (player1 == player2){
      //x
      elemento = x;
    } else {
      // 0
      elemento = o;
    }

  return elemento;
}

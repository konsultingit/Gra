//pisalem kod w angielskim jezyku
'use strict';

var packArray;
var choose;
var par;
var cardCount;
var packCount;

var currentCard = 0;

initGame();
startNewGame();

function onPlayerChoose(choose) {
  //Process choose
  switch(choose) {
    case 0:
      packArray[1].card[currentCard].caseNo();
      break;
    case 1:
      packArray[1].card[currentCard].caseYes();
      break;
  }

  //Show new Card
  showCard(currentCard);

  currentCard = currentCard + 1;
  if(currentCard == cardCount) resetPack();
}

function showCard(id) {
  //insert SQL here
  document.getElementById("gameBlock").innerHTML = "<p>" + packArray[1].card[id].description + "</p>";
}


function resetPack() {
  currentCard = 0;
  random();
}

function startNewGame() {
  random();
  showCard(0);
  currentCard = currentCard + 1;
}












function initGame() {
  //tworzenie struktury dannych
  ////////////////////////////////////////////////////////////

  //tablica parametrow
  var parNumber = 4; //par - parametr
  par = [parNumber];

  for (var i = 0; i < parNumber; i++) {
    par[i] = 3;
  }

  //stworzylem tablice talij
  //na ten przypadek
  //jezeli zachcemy stworzyc je kilka 
  //////////////////////////////

  packCount = +prompt("ilosc talii", 1); //pack - talia 
  packArray = [packCount];

  for (var i = 0; i < packCount + 1; i++) {
    packArray[i] = {};
  }

  cardCount = prompt("ilosc kart", 1); //liczba kart w talii
  packArray[0].card = [cardCount];

  for (var i = 0; i < cardCount; i++) {

    packArray[0].card[i] = {};
    //tworzenie tresci karty: opis, metody zmieniajace parametry i td.
    packArray[0].card[i].description = "opis karty numer " + (i + 1);

    //metody zwracaja undefined, poniewaz w js nie ma funkcji void
    packArray[0].card[i].caseYes = function() {
      for (var i = 0; i < parNumber; i++) {
        par[i] = par[i] + 1;
      }
      return true;
    };

    packArray[0].card[i].caseNo = function() {
      for (var i = 0; i < parNumber; i++) {
        par[i] = par[i] - 1;
      }
      return false;
    };
  }
}
//////////////////////////////////////////////////////////// 
/*function main() {
       
  while (true) {
    random();
    for (var i = 0; i < cardCount; i++) {
      if (!(par[0] !== 0 && par[0] !== 100 && par[1] !== 0 && par[1] !== 100 && par[2] !== 0 && par[2] !== 100 && par[3] !== 0 && par[3] !== 100)) {
        break;
      }
      var choose = undefined;
      while (choose !== 0 && choose !== 1) {
        choose = +prompt(packArray[1].card[i].description, "wybierz Tak - 1, czy Nie - 0");
        
        if (choose === 1) {
          packArray[1].card[i].caseYes();
        } else if (choose === 0) {
          packArray[1].card[i].caseNo();
        }
      }
    }
    if (!(par[0] !== 0 && par[0] !== 100 && par[1] !== 0 && par[1] !== 100 && par[2] !== 0 && par[2] !== 100 && par[3] !== 0 && par[3] !== 100)) {
      break;
    }
  }
}*/
////////////////////////////////////////////////////////////
function random() {
  packArray[1].card = [cardCount];
  var order = [cardCount]; //tablica "rand[]" umozliwia zapisanie numerow kart,
  var isOkay = true; //ktore juz byly wylosowane

  for (var i = 0; i < cardCount; i++) {
    packArray[1].card[i] = {};
    while (isOkay) {
      order[i] = Math.floor(Math.random() * cardCount);
      isOkay = false;

      for (var k = 0; k < cardCount; k++) { //sprawdza, czy nie zostal juz wylosowany
        if (k === i) continue;
        if (order[i] === order[k]) { //taki samy numer karty jak wczesniej
          isOkay = true;
          break;
        }
      }
    }
    isOkay = true;
    
    packArray[1].card[i].description = packArray[0].card[order[i]].description;
    packArray[1].card[i].caseYes = packArray[0].card[order[i]].caseYes;
    packArray[1].card[i].caseNo = packArray[0].card[order[i]].caseNo;
  }
} //wywolywana w ciele main()
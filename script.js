//pisalem kod w angielskim jezyku
'use strict';
var packArray;
var cardCount;
var packCount;
var currentCard = 0;

initGame();
startNewGame();

function onPlayerChoose(choose) {
  company.budget += choose.budget;
  company.users +=  choose.users;
  company.shares += choose.shares;
  company.workers += choose.workers;
  company.recognition += choose.recognition;
  company.quality += choose.quality;
  company.price += choose.price;
  company.salaries += choose.salaries;
  //Show new Card
  showCard(currentCard);

  currentCard = currentCard + 1;
  if (currentCard == cardCount) resetPack();
}

function showCard(id) {
  //insert SQL here
  document.getElementById("gameBlock").innerHTML = "<p>" + packArray[1].card[id].description + "</p>";
  document.getElementById("stats").innerHTML = "<p>"+ "Budget: " + company.budget + "</p>" +  "<p>"+ "Users: " + company.users + "</p>" + "<p>"+ "Workers: " + company.workers + "</p>";
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

  //stworzylem tablice talij
  //na ten przypadek
  //jezeli zachcemy stworzyc je kilka
  //////////////////////////////
  packCount = +prompt("ilosc talii", '1'); //pack - talia
  packArray = [packCount];

  for (var i = 0; i < packCount + 1; i++) {
    packArray[i] = {};
  }

  cardCount = prompt("ilosc kart", '1'); //liczba kart w talii
  packArray[0].card = [cardCount];

  for (i = 0; i < cardCount; i++) {

    packArray[0].card[i] = {};
    //tworzenie tresci karty: opis, metody zmieniajace parametry i td.
    packArray[0].card[i].description = table[i % cardCount].text; // przyporzodkowuje opis kartom

    packArray[0].card[i].caseYes = table[i % cardCount].caseYes; //  o ile sięzmienią parametry przy caseYes

    packArray[0].card[i].caseNo = table[i % cardCount].caseNo; // to samo tylko dla caseNo

  }
}

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

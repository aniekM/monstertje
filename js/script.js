console.log ('hallo ik ben er')

// variables die door de hele code voor komen //

var monster = document.querySelector ('#monster');

var healthbar = document.querySelector ('#healthbar');
var width = 100

var moneybar = document.querySelector ('#moneybar');
var mbWidth = 100

var tired = document.querySelector ('#tired');

var city = document.querySelector ('#city');
var room = document.querySelector ('#room');

city.hidden = true;

if (width >= 100) {
    tired.hidden = true;
    }

// buttons //

var goCityButton = document.querySelector ('#gocity'); //button in home//
var goHomeButton = document.querySelector ('#gohome'); //button in city//

function goCity() {
    city.hidden = false;
    room.hidden = true;

    
}

function goHome() {
    city.hidden = true;
    room.hidden = false;
}

goCityButton.addEventListener ('click', goCity);
goHomeButton.addEventListener ('click', goHome);

// HEALTH AND MONEY BAR //
// more hp //

function moreHP() {


    width = width+10

    if(width >100) {
        width=100;
    }
    healthbar.style.width = width + '%'; 
    
    healthbar.textContent = width + 'hp';

    if(width<40) {
        healthbar.classList.add ('bad');
    } else {
       healthbar.classList.remove ('bad');
    }

    if(width <= 10) {
        tired.hidden = false;
    } else {
        tired.hidden = true;
    }
}

function bitMoreHP() {
    width = width+5
    healthbar.style.width = width + '%'; 
    
    healthbar.textContent = width + 'hp';

    if(width<40) {
        healthbar.classList.add ('bad');
    } else {
       healthbar.classList.remove ('bad');
    }

    if(width >=100) {
        width=95;
    }

    if(width <= 10) {
        tired.hidden = false;
    } else {
        tired.hidden = true;
    }
}

// less hp //

function lessHP() {
    width = width-5
    healthbar.style.width = width + '%'; 
    
    healthbar.textContent = width + 'hp';

    if(width<40) {
        healthbar.classList.add ('bad');
    } else {
       healthbar.classList.remove ('bad');
    }

    if(width >100) {
        width=100;
    }

    if(width <= 10) {
        tired.hidden = false;
    } else {
        tired.hidden = true;
    }
}

function lotLessHP() {
    width = width-10
    healthbar.style.width = width + '%'; 
    
    healthbar.textContent = width + 'hp';

    if(width<40) {
        healthbar.classList.add ('bad');
    } else {
       healthbar.classList.remove ('bad');
    }

    if(width >100) {
        width=100;
    }

    if(width <= 10) {
        tired.hidden = false;
    } else {
        tired.hidden = true;
    }
}

// more money //

function moreMoney() {
    mbWidth = mbWidth+10;
    moneybar.style.width = mbWidth + '%';
    moneybar.textContent = '€' + mbWidth ;

    if(mbWidth >= 450) {
        mbWidth = 440;
    }

    if(mbWidth <= 40) {
        moneybar.classList.add ('mbbad');
    } else {
        moneybar.classList.remove ('mbbad');
    }
}

// less money //

function lessMoney() {
    mbWidth = mbWidth-10;
    moneybar.style.width = mbWidth + '%';
    moneybar.textContent = '€' + mbWidth ;

    if(mbWidth >= 450) {
        mbWidth = 440;
    }

    if(mbWidth <= 40) {
        moneybar.classList.add ('mbbad');
    } else {
        moneybar.classList.remove ('mbbad');
    }
}

// in and out bed //

var monsterLay = document.querySelector ('#monsterLay');
var bed = document.querySelector ('#bed');
var floor = document.querySelector ('#floor');

function getIn() {
    moreHP();
    monsterLay.style.opacity = "1";
    monster.style.opacity = "0";
    back.style.opacity = "0";
    dressOn.style.opacity = "0";
    shirtOn.style.opacity = "0"
}
function out() {
    monster.style.opacity = "1";
   monsterLay.style.opacity = "0";
}

bed.addEventListener ('click', getIn);
floor.addEventListener ('click', out);

// getting dressed //

var dress = document.querySelector ('#dress'); // jurk op hanger
var shirt = document.querySelector ('#shirt'); // shirt op hanger

var dressOn = document.querySelector ('#dresson'); // jurk aan
var shirtOn = document.querySelector ('#shirton'); // shirt aan

var outfit = '';

dressOn.hidden = true;
shirtOn.hidden = true;

function wearDress() {

    lessHP();

    outfit = 'Dress';

    dressOn.hidden = false;
    shirtOn.hidden = true;

    dress.style.opacity = "0";
    console.log ('dress on');
}

function wearShirt() {

    lessHP();

    outfit = 'Shirt';

    dressOn.hidden = true;
    shirtOn.hidden = false;

    shirt.style.opacity = "0";
    console.log ('shirto on');
}

function noDress() {

    lessHP();

    outfit = '';
    dressOn.hidden = true;

    dress.style.opacity = "1";
}

function noShirt() {
    
    lessHP();

    outfit = '';
    shirtOn.hidden = true;

    shirt.style.opacity = "1";
}

dress.addEventListener ('dragend', wearDress);
shirt.addEventListener ('dragend', wearShirt);

dress.addEventListener ('click', noDress);
shirt.addEventListener ('click', noShirt);

// getting to work //

var computer = document.querySelector ('#computer');
var back = document.querySelector ('#back');
var books = document.querySelector ('#books');

var computers = ['comp1.png', 'comp2.png', 'comp3.png', 'comp4.png', 'comp5.png', 'comp6.png', 'comp7.png'];

var nmbr = 0;
var comp = computers[nmbr];

function onComputer() {
    
    lotLessHP();
    moreMoney();

    nmbr = nmbr+1;
    computer.src = './img/' +computers[nmbr];

    if ( nmbr > 5 ) {
		nmbr = 0 ;
	}

    back.style.opacity = "1";

    monster.classList.add ('computer');
    dressOn.classList.add ('computer');
    shirtOn.classList.add ('computer');
}

function offComputer() {
    computer.src = 'img/computer.png';
    back.style.opacity = "0";
}

function read() {
    
    lotLessHP();
    moreMoney();

    monster.src = 'img/reading.png';
}
function stopRead() {
    monster.src = 'img/monster.png';
}

computer.addEventListener ('click', onComputer);
computer.addEventListener ('dblclick', offComputer);
books.addEventListener ('click', read);
books.addEventListener ('dblclick', stopRead);

// moving //

var mat = document.querySelector ('#mat');
var desk = document.querySelector ('#desk');

function moveBack() {
    back.style.opacity = "0";

    monster.classList.remove ('computer');
    dressOn.classList.remove ('computer');
    shirtOn.classList.remove ('computer');
}

function moveForth() {
    back.style.opacity = "0";

    monster.classList.add ('computer');
    dressOn.classList.add ('computer');
    shirtOn.classList.add ('computer');
}

mat.addEventListener ('click', moveBack);
desk.addEventListener ('click', moveForth);

// city //

var restaurant = document.querySelector ('#restaurant');
var shop = document.querySelector ('#shop');
var sidewalk = document.querySelector ('#sidewalk');

var restaurantDoor = document.querySelector ('#rDoor');
var shopDoor = document.querySelector ('#sDoor');

var infoShop = document.querySelector ('#shopinfo');
var infoRes = document.querySelector ('#restaurantinfo');
infoShop.hidden = true;
infoRes.hidden = true;

function shopInfo() {
    infoShop.hidden = false;
}

function resInfo() {
    infoRes.hidden = false;
}

function hide() {
    infoShop.hidden = true;
    infoRes.hidden = true;
}

function toRestaurant() {
    monster.classList.add ('restaurant');
    dressOn.classList.add ('restaurant');
    shirtOn.classList.add ('restaurant');
}

function toShop() {
    monster.classList.add ('shop');
    dressOn.classList.add ('shop');
    shirtOn.classList.add ('shop');
}

function goEat() {

    bitMoreHP();
    lessMoney();

    monster.style.opacity = "0";
    dressOn.hidden = true;
    shirtOn.hidden = true;
}

function goShop() {

    lessMoney();

    monster.style.opacity = "0";
    dressOn.hidden = true;
    shirtOn.hidden = true;
}

function goOutside() {
    monster.style.opacity = "1";

    if(outfit == 'Dress') {
        outfit = 'Dress';
    } else {
        outfit = 'Shirt';
    }

    if(outfit == 'Dress'){
        dressOn.hidden = false;
    } else {
        shirtOn.hidden = false;
    }
}

restaurantDoor.addEventListener ('click', toRestaurant);
shopDoor.addEventListener ('click', toShop);

restaurant.addEventListener ('click', goEat);
shop.addEventListener ('click', goShop);
sidewalk.addEventListener ('click', goOutside);

sidewalk.addEventListener ('mouseover', hide);
shop.addEventListener ('mouseover', shopInfo);
shopDoor.addEventListener ('mouseover', shopInfo);
restaurant.addEventListener ('mouseover', resInfo);
restaurantDoor.addEventListener ('mouseover', resInfo);
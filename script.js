
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const nextButton = document.querySelector('#volgende')
const terugButton = document.getElementById('terug');
const knoppenContainer = document.querySelector('.knoppen-container');
const feedButton = document.getElementById('feed');
const eetGeluid = document.getElementById('eetsound');
const achtergrondMuziek = document.getElementById('bgmusic');
const geelKnop = document.getElementById('geleknop');
const rozeKnop = document.getElementById('rozeknop');
const groeneKnop = document.getElementById('groeneknop');
const sillyLabubu = document.querySelector['#sillygeel', '#sillyroze', '#sillygroen'];
const basisLabubu = document.querySelector['#wit','#geel', '#roze', '#groen'];

let gekozenAfbeelding = 'null';

// deze functie zorgt ervoor dat de knop start werkt en dat de juiste dingen op beeld komen.
function start() {
  h1.textContent = 'Choose your color!';
  wit.style.display = 'block';
  knoppenContainer.style.display = 'flex';
  button.style.display = 'none';
  achtergrondMuziek.volume = 0.2; 
  achtergrondMuziek.play();
}

// deze functie zorgt ervoor dat als je op de gele knop klikt de gele labubu op beeld komt
function geleKlik () {
  geel.style.display = 'block';
  roze.style.display = 'none';
  wit.style.display = 'none';
  groen.style.display = 'none';
  nextButton.style.display = 'block';
  gekozenAfbeelding = 'geel';
}

// deze functie zorgt ervoor dat als je op de roze knop klikt de roze labubu op beeld komt
function rozeKlik() {
  roze.style.display = 'block';
  wit.style.display = 'none';
  geel.style.display = 'none';
  groen.style.display = 'none';
  nextButton.style.display = 'block';
  gekozenAfbeelding ='roze';
}

// deze functie zorgt ervoor dat als je op de groene knop klikt de groene labubu op beeld komt
function groeneKlik() {
  groen.style.display = 'block';
  wit.style.display = 'none';
  geel.style.display = 'none';
  roze.style.display = 'none';
  nextButton.style.display = 'block';
  gekozenAfbeelding = 'groen';
}

// deze functie zorgt ervoor dat als je op volgende klikt je naar de volgende stap gaat
function volgendeKlik() {
  h1.textContent = 'Give your Labubu a snack!';
  geel.style.display = 'none';
  roze.style.display = 'none';
  groen.style.display = 'none';
  nextButton.style.display = 'none';
  knoppenContainer.style.display = 'none';
  terugButton.style.display = 'block';
  feedButton.style.display = 'block';

  if (gekozenAfbeelding == 'geel') {
    geel.style.display = 'block';
  } else if (gekozenAfbeelding == 'roze') {
    roze.style.display = 'block';
  } else if (gekozenAfbeelding == 'groen') {
    groen.style.display = 'block';
  }
}

// deze functie zorgt ervoor dat als je op terug klikt je naar de eerste stap gaat
function terugKlik () {
  h1.textContent = 'Choose your color!';
  wit.style.display = 'block';
  geel.style.display = 'none';
  roze.style.display = 'none';
  groen.style.display = 'none';
  nextButton.style.display = 'none';
  knoppenContainer.style.display = 'flex';
  terugButton.style.display = 'none';
  feedButton.style.display = 'none';
}

// deze functie zorgt ervoor dat als je op feed klikt de silly labubu op beeld komt
function feedKlik () {
  h1.textContent = 'Yum! Labubu loved the snack!🤤';
  if (gekozenAfbeelding == 'geel') {
    geel.style.display = 'none';
    sillygeel.style.display = 'block';
  } else if (gekozenAfbeelding == 'roze') {
    roze.style.display = 'none';
    sillyroze.style.display = 'block';
  } else if (gekozenAfbeelding == 'groen') {
    groen.style.display = 'none';
    sillygroen.style.display = 'block';
  }

  setTimeout(function() {
    sillygeel.style.display = 'none';
    sillyroze.style.display = 'none';
    sillygroen.style.display = 'none';
  }, 1000);

  setTimeout(function() {
    if (gekozenAfbeelding == 'geel') {
      geel.style.display = 'block';
    } else if (gekozenAfbeelding == 'roze') {
      roze.style.display = 'block';
    } else if (gekozenAfbeelding == 'groen') {
      groen.style.display = 'block';
    }
  }, 1000);
  eetGeluid.play();
}

button.addEventListener('click', start);
geelKnop.addEventListener ('click', geleKlik);
rozeKnop.addEventListener ('click', rozeKlik);
groeneKnop.addEventListener ('click', groeneKlik);
nextButton.addEventListener ('click', volgendeKlik);
terugButton.addEventListener ('click', terugKlik)
feedButton.addEventListener ('click', feedKlik);

console.log("Hello world");

let gekozenafbeelding = null;

const button = document.querySelector('button');
const nextButton =document.querySelector('#volgende')
const h1 = document.querySelector('h1');
const wit = document.querySelector('#wit');
const knoppenContainer = document.querySelector('.knoppen-container');
const feedButton = document.getElementById('feed');
const petButton = document.getElementById('pet');
const eetGeluid = document.getElementById('eetsound');
const petGeluid = document.getElementById('petsound');
const achtergrondMuziek = document.getElementById('bgmusic');
const terugButton = document.getElementById('terug');

// Alle afbeeldingen in een lijst
const afbeeldingen = {
  geleknop: 'geel',
  rozeknop: 'roze',
  groeneknop: 'groen',
  blauweknop: 'blauw',
  bruineknop: 'bruin',
  grijzeknop: 'grijs'
};

const sillyAfbeeldingen = {
  // key : value
  geel: 'sillygeel',
  roze: 'sillyroze',
  groen: 'sillygroen',
  blauw: 'sillyblauw',
  bruin: 'sillybruin',
  grijs: 'sillygrijs'
};

// Definieer een functie die wordt uitgevoerd wanneer de button wordt geklikt
function onClick() {
  h1.textContent = 'Choose your color!';
  wit.style.display = 'block';
  knoppenContainer.style.display = 'flex';

  // Verwijder de button
  button.style.display = 'none';

  achtergrondMuziek.volume = 0.2; // Zet het volume wat lager
  achtergrondMuziek.play();
}

// Voeg eventlisteners toe aan elke kleurknop
Object.keys(afbeeldingen).forEach(knopId => {
  const knop = document.getElementById(knopId);
  const afbeeldingId = afbeeldingen[knopId];

  knop.addEventListener('click', () => {
    // Verberg eerst alle afbeeldingen
    Object.values(afbeeldingen).forEach(id => {
      document.getElementById(id).style.display = 'none';
    });
    wit.style.display = 'none';
    // Toon de gekozen afbeelding
    document.getElementById(afbeeldingId).style.display = 'block';
    nextButton.style.display = 'block';
    gekozenAfbeelding = afbeeldingId;
  });
});

// Voeg een event listener toe aan de button
button.addEventListener('click', onClick);

nextButton.addEventListener('click', () => {
  h1.textContent = "Feed and pet your Labubu!"
  knoppenContainer.style.display = 'none';
  nextButton.style.display = 'none';
  feedButton.style.display = 'block';
  petButton.style.display = 'block';
  terugButton.style.display = 'block';

  // Verberg alle andere afbeeldingen behalve de gekozen
  Object.values(afbeeldingen).forEach(id => {
    if (id !== gekozenAfbeelding) {
      document.getElementById(id).style.display = 'none';
    }
  });
});

terugButton.addEventListener('click', () => {
  h1.textContent = "Choose your color!";
  knoppenContainer.style.display = 'flex';
  terugButton.style.display = 'none';
  feedButton.style.display = 'none';
  petButton.style.display = 'none';

  // Verberg alle afbeeldingen, ook silly's
  Object.values(afbeeldingen).forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  
  Object.values(sillyAfbeeldingen).forEach(sillyId => {
    const silly = document.getElementById(sillyId);
    if (silly) silly.style.display = 'none';
  });

  wit.style.display = 'block';
  gekozenAfbeelding = null;
  nextButton.style.display = 'none';
});

feedButton.addEventListener('click', () => {
  toonSillyAfbeelding();
  h1.textContent = "Yum! Labubu loved the snack!";
  eetGeluid.currentTime = 0; // Terug naar begin als je snel meerdere keren klikt
  eetGeluid.play();
});

// Pet knop: laat ook silly versie zien
petButton.addEventListener('click', () => {
  toonSillyAfbeelding();
  h1.textContent = "Aww! Labubu feels loved 💕";
  petGeluid.currentTime = 0; // Terug naar begin als je snel meerdere keren klikt
  petGeluid.play();
});

function toonSillyAfbeelding() {
  const originele = document.getElementById(gekozenAfbeelding);
  const silly = document.getElementById('silly' + gekozenAfbeelding);

  if (!silly) return; // Veiligheidscheck: als er geen silly versie is, stop

  // Verberg origineel, toon silly
  originele.style.display = 'none';
  silly.style.display = 'block';

  // Na 1.5 seconde terug naar origineel
  setTimeout(() => {
    silly.style.display = 'none';
    originele.style.display = 'block';
  }, 1000); 
}







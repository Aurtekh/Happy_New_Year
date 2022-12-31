const generatePhrase = document.querySelector('.generatephase');
const genetateTextCopy = document.querySelector('.genetateTextCopy');
var copy = '';

async function genetateText() {
  const phrases = 'phrasesData.json';
  const res = await fetch(phrases);
  const data = await res.json();
  generatePhrase.innerHTML = `С новым годом, ${
    data.happyNewYear[getRandomInt(data.happyNewYear.length)]
  } Я желаю ${data.iWish[getRandomInt(data.iWish.length)]} И пусть ${
    data.andLet[getRandomInt(data.andLet.length)]
  }`;
  copy = generatePhrase.innerHTML;
  genetateTextCopy.style.display = 'block';
  generatePhrase.style.display = 'block';
}

function copyText() {
  window.navigator.clipboard.writeText(copy);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

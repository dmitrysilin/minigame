const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');

function getRandomPosition() {
  const maxWidth = window.innerWidth - 200;
  const maxHeight = window.innerHeight - 200;
  const randomX = Math.floor(Math.random() * maxWidth);
  const randomY = Math.floor(Math.random() * maxHeight);
  return { x: randomX, y: randomY };
}


function updateBlocks() {
  const position1 = getRandomPosition();
  const position2 = getRandomPosition();

  block1.style.left = position1.x + 'px';
  block1.style.top = position1.y + 'px';

  block2.style.left = position2.x + 'px';
  block2.style.top = position2.y + 'px';
}


function handleClick(event) {
  event.target.style.backgroundColor = 'blue';
}


block1.addEventListener('click', handleClick);
block2.addEventListener('click', handleClick);


window.addEventListener('load', updateBlocks);
setInterval(updateBlocks, 500);

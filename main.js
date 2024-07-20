function generateSolidity() {
  const randomNumber = Math.random() * 100; // Генерируем число от 0 до 100
  let result;

  if (randomNumber < 1) {
      result = 'Ультра солидный';
  } else if (randomNumber < 10) {
      result = 'Мега солидный';
  } else if (randomNumber < 30) {
      result = 'Солидный';
  } else if (randomNumber < 60) {
      result = 'Серьезный человек';
  } else {
      result = 'Не серьезный';
  }

  document.getElementById('result').innerText = `Ваш уровень солидности: ${result}`;
}
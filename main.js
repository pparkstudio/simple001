const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');

generateBtn.addEventListener('click', () => {
  const lottoNumbers = generateLottoNumbers();
  displayNumbers(lottoNumbers);
});

function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.sort((a, b) => a - b);
}

function displayNumber(number, element) {
    element.textContent = number;
    const color = getNumberColor(number);
    element.style.backgroundColor = color;
}

function displayNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        displayNumber(numbers[i], numberElements[i]);
    }
}

function getNumberColor(number) {
  if (number <= 10) {
    return '#f2b705'; // 노란색
  } else if (number <= 20) {
    return '#d94e4e'; // 빨간색
  } else if (number <= 30) {
    return '#3b79d9'; // 파란색
  } else if (number <= 40) {
    return '#59b359'; // 초록색
  } else {
    return '#808080'; // 회색
  }
}
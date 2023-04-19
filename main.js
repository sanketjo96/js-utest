function calculate(event) {
  const inputValue = event.target.value;
  const expression = /\+|\*|\-|\//;

  const numbers = inputValue.split(expression);
  const numberA = +numbers[0];
  const numberB = +numbers[1];

  const operation = inputValue.match(expression);
  if (isNaN(numberA) || isNaN(numberB) || operation === null) {
    updateResult('Expression not recognized');
    return;
  }

  const operator = operation[0];

  const calculator = new Calculator();
  calculator.add(numberA);

  let result;
  switch (operator) {
    case '+':
      result = calculator.add(numberB);
      break;
    case '-':
      result = calculator.subtract(numberB);
      break;
    case '*':
      result = calculator.multiply(numberB);
      break;
    case '/':
      result = calculator.divide(numberB);
      break;
  }
  updateResult(result);
}

function updateResult(result) {
  let element = document.getElementById('result');
  if (element) {
    element.innerText = result;
  }
}

function AddEvent(ele, method) {
  if (ele) {
    ele.addEventListener('change', method);
  }
}

function GetVersion() {
  return fetch(
    'https://gist.githubusercontent.com/leelanarasimha/4b3dde448c828ec54f29fcc727c680df/raw/096bb0f055877c5f8e7243518be7be03772d2c4a/version.json'
  ).then(function (result) {
    return result.json();
  })
  .then(function (jsonData) {
    return jsonData.version;
  });
}

// Start execution
GetVersion().then((version) => {
  let versionElement = document.getElementById('version');
  if (versionElement) {
    versionElement.innerText = version;
  }
})

const element = document.getElementById('inputValue')
AddEvent(element, calculate)



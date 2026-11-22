function sumEvenNumbers(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i * 2;
  }
  return sum;
}

function showResult() {
  let n = parseInt(document.getElementById("nInput").value) || 0;
  let terms = [];

  for (let i = 0; i < n; i++) {
    terms.push(i * 2);
  }

  let total = sumEvenNumbers(n);
  document.getElementById("output").textContent =
    n > 0 ? `${terms.join("+")} = ${total}` : "0 = 0";
}
// โมดูลย่อยคำนวณส่วนลด รับ parameter 2 ตัว: จำนวนหนังสือ และ ราคารวม
function calculateDiscount(quantity, totalAmount) {
  if (quantity > 2 && totalAmount > 500) {
    return totalAmount * 0.10;
  }
  return 0;
}

// สร้างช่องกรอกชื่อและราคาหนังสือตามจำนวน
function createInputs() {
  const count = parseInt(document.getElementById("bookCount").value, 10);
  const inputsDiv = document.getElementById("inputs");
  inputsDiv.innerHTML = "";

  for (let i = 1; i <= count; i++) {
    inputsDiv.innerHTML += `
      <p>
        เล่มที่ ${i}:
        <input type="text" class="title" placeholder="ชื่อหนังสือ" />
        <input type="number" class="price" placeholder="ราคา (บาท)" min="0" />
      </p>
    `;
  }
}

// คำนวณราคารวม ส่วนลด และยอดที่ต้องจ่าย
function calculateTotal() {
  const titles = document.querySelectorAll(".title");
  const prices = document.querySelectorAll(".price");

  const quantity = prices.length;
  let totalAmount = 0;
  let listText = "";

  for (let i = 0; i < quantity; i++) {
    const name = titles[i].value || `เล่มที่ ${i + 1}`;
    const price = parseFloat(prices[i].value) || 0;
    totalAmount += price;
    listText += `<li>${name} - ${price.toFixed(2)} บาท</li>`;
  }

  const discount = calculateDiscount(quantity, totalAmount);
  const netTotal = totalAmount - discount;

  document.getElementById("result").innerHTML = `
    <hr />
    <h3>สรุปผล</h3>
    <ul>${listText}</ul>
    <p>จำนวนหนังสือ: ${quantity} เล่ม</p>
    <p>ราคารวม: ${totalAmount.toFixed(2)} บาท</p>
    <p>ส่วนลด: ${discount.toFixed(2)} บาท</p>
    <p><strong>ราคาที่ต้องจ่าย: ${netTotal.toFixed(2)} บาท</strong></p>
  `;
}

createInputs();
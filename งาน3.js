const w = document.getElementById("weight")
const h = document.getElementById("height")
const r = document.getElementById("result")

function BMI(){
    let weight = parseFloat(w.value)
    let height = parseFloat(h.value)/100
    let result = weight / (height * height)
    r.innerHTML = "BMI = "+result.toFixed(2)
}
function clearData1(){
    w.value = ""
    h.value = ""
    r.innerHTML = ""
} 

const wa = document.getElementById("WaterUnit")
const e = document.getElementById("ElectUnit")
const m = document.getElementById("Minute")
const ex = document.getElementById("Expense")

function WEM(){
    let WaterUnit = Number(wa.value)
    let ElectUnit = Number(e.value)
    let Minute = Number(m.value)
    let WaterExpense = WaterUnit * 10
    let ElectExpense = ElectUnit * 25
    let MinuteExpense = Minute * 5
    let Expense = WaterExpense + ElectExpense + MinuteExpense
    ex.innerHTML = "ค่าใช้จ่ายรวม = "+Expense.toFixed(2)+ " บาท"
}
function clearData2(){
    wa.value = ""
    e.value = ""
    m.value = ""
    ex.innerHTML = ""
}

const b = document.getElementById("bottle")
const p = document.getElementById("price")
const t = document.getElementById("total")

function BC(){
    let bottle = Number(b.value)
    let dozen = Math.floor(bottle / 12)
    let remain = bottle % 12
    let price = (dozen * 100) + (remain * 10)
    let tax = price * 7 / 100
    let total = price + tax
    p.innerHTML = "ราคาน้ำแร่ = "+price.toFixed(2)+" บาท"
    t.innerHTML = "จำนวนเงินที่ต้องจ่าย = "+total.toFixed(2)+" บาท"
}
function clearData3(){
    b.value = ""
    p.innerHTML = ""
    t.innerHTML = ""
}
const h = document.getElementById("height")
const p = document.getElementById("price")

function Main(){
    let height = parseFloat(h.value)
    if(height <= 130){
        p.innerHTML = " ค่าบัตรผ่านประตู = 50 บาท"
    }
    else{
        p.innerHTML = " ค่าบัตรผ่านประตู = 100 บาท"
    }
}
function ClearData(){
    h.value = ""
    p.innerHTML = ""
}

const s = document.getElementById("salary")
const c = document.getElementById("commission")
const pf = document.getElementById("provident fund")

function Main2(){
    let salary = parseFloat(s.value)
    let commission = parseFloat(c.value)
    let income = salary + commission
    if (income <= 10000){
        pf.innerHTML = "ไม่ต้องหักเงินสำรองเลี้ยงชีพ"
    }
    else if (income > 10000 && income <= 20000){
        let tax = income * 2 / 100
        pf.innerHTML = " เงินสำรองเลี้ยงชีพ ="+tax.toFixed(2) + " บาท"
    }
    else{
        let tax = income * 5 / 100
        pf.innerHTML = " เงินสำรองเลี้ยงชีพ ="+tax.toFixed(2) + " บาท"
    }
}

function ClearData2(){
    s.value = ""
    c.value = ""
    pf.innerHTML = ""
}

const d = document.getElementById("Day")
const r = document.getElementById("result")

function Main3(){
    let Day = parseFloat(d.value)
    switch(Day){
        case 1 : r.innerHTML = "Day = Monday"
                break
        case 2 : r.innerHTML = "Day = Tuesday"
                break
        case 3 : r.innerHTML = "Day = Wednesday"
                break
        case 4 : r.innerHTML = "Day = Thursday"
                break
        case 5 : r.innerHTML = "Day = Friday"
                break
        case 6 : r.innerHTML = "Day = Saturday"
                break
        case 7 : r.innerHTML = "Day = Sunday"
                break                            
        default : r.innerHTML = "Day =  Wrong Day"                
    }
}

function ClearData3(){
    d.value = ""
    r.innerHTML = ""
}

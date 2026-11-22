const n = document.getElementById("name")
const r = document.getElementById("result")

function main(){
    let name = n.value
    let i = 0
    r.innerHTML = ""
    while(i < name.length){
        r.innerHTML = r.innerHTML + name[i] + "!<br>"
        i++
    }
}

function ClearData(){
    n.value = ""
    r.innerHTML = ""
}

const n1 = document.getElementById("num")
const r1 = document.getElementById("result1")

function main1(){
    let num = parseInt(n1.value)
    let i = 1
    r1.innerHTML = ""
    do{
         r1.innerHTML = r1.innerHTML + num + " x " + i + " = " + (num * i) + "<br>"
         i++
    }while(i <= 12)
}

function ClearData1(){
    n1.value = ""
    r1.innerHTML = ""
}
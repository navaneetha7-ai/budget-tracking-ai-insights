function addExpense(){

let name=document.getElementById("name").value
let amount=document.getElementById("amount").value

let li=document.createElement("li")
li.textContent=name + " - ₹" + amount

document.getElementById("list").appendChild(li)

}

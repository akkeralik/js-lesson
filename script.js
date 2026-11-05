console.log("Привет, мир!");
console.log("Я учу JavaScript");
console.log("Шепелева Алиса");
console.log("ИС 3.2");

let name = prompt("Как тебя зовут?");
let city = prompt("Из какого ты города?");

let age = Number(prompt("Сколько тебе лет?"));

if (age >= 18) {
  console.log("Ты совершеннолетний");
} else {
  console.log("Ты ещё несовершеннолетний");
}

if (age < 7) {
    console.log("Ты ещё школьник");
}

console.log("Привет, " + name + "!");
console.log("Тебе " + age + " лет.");
console.log("Ты из " + city + ".");

let n = Number(prompt("Введи число"));

for (let i = 1; i <= n; i++) {
    if (i%2==0) {
       console.log(i); 
    }
}



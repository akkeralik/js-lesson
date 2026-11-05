
function calculator(a, b, operation) {
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        if (b === 0) {
            return "На ноль делить нельзя";
        }
        return a / b;
    } else {
        return "Неизвестная операция";
    }
}

let a = Number(prompt("Введи первое число:"));
let b = Number(prompt("Введи второе число:"));
let operation = prompt("Введи операцию (+, -, *, /):");

if (isNaN(a) || isNaN(b)) {
    alert("Ошибка! Нужно ввести числа.");
} else {
    let result = calculator(a, b, operation);

    console.log("Результат: " + result);
    alert("Результат: " + result);
}

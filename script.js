let budget = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

let firstExpenses = prompt("Введите обязательную статью расходов в этом месяце");
let firstMoney = +prompt("Во сколько обойдется?");
let secondExpenses = prompt("Введите обязательную статью расходов в этом месяце");
let secondMoney = +prompt("Во сколько обойдется?");

let expenses = {
    firstExpenses: firstMoney,
    secondExpenses: secondMoney
}
let optionalExpenses;

let appData = {
    budget: budget, 
    time: date,
    expenses: expenses, 
    optionalExpenses: optionalExpenses, 
    income: "", 
    savings: false
};





alert(budget/30);

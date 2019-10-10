let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    expenses: {}, 
    optionalExpenses: {}, 
    income: [], 
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдется?", "");
        
            if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log("Что-то не так");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); //округляем
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = a;
            console.log(appData.optionalExpenses)
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
                console.log('done');
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                console.log("Что-то не так");
                i--;
            }
        };

        appData.income.forEach(function(item, i){
            console.log("Способы доп. заработка: " + (i+1) + ' - ' + item);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//         let b = prompt("Во сколько обойдется?", "");
    
//         if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log('done');
//             appData.expenses[a] = b;
//         } else {
//             console.log("Что-то не так");
//             i--;
//         }
//     }
// }

// chooseExpenses();

// function detectDayBudget() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed(); //округляем
//     alert("Ежедневный бюджет: " + appData.moneyPerDay);
// };
// detectDayBudget()

// function detectLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log("Минимальный уровень достатка")
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Средний уровень достатка");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("Высокий уровень достатка");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// detectLevel()


// function chooseOptExpenses() {
//     for (let i = 1; i < 4; i++) {
//         let a = prompt("Статья необязательных расходов?", "");
//         appData.optionalExpenses[i] = a;
//         console.log(appData.optionalExpenses)
//     }
// }
// chooseOptExpenses();


// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений?"),
//             percent = +prompt("Под какой процент?");

//         appData.monthIncome = save/100/12*percent;
//         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//     }
// }

// checkSavings();
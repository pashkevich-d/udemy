let count = document.getElementById('start'),
    income = document.getElementsByClassName('budget-value daybudget-value level-value expenses-value optionalexpenses-value income-value monthsavings-value yearsavings-value'),
    costs = document.getElementsByClassName("expenses-item"),
    approv = document.querySelectorAll('.expenses-item-btn'),
    calc = document.querySelectorAll('button:last-child'),
    optional = document.querySelectorAll('input.optionalexpenses-item');

approv.style.height = '50px';
count.style.color = 'red';

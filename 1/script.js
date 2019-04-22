var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    бюджет: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: null,
    income: null,
    savings: false
};

var stat = prompt("Введите обязательную статью расходов в этом месяце");
var ras = prompt("Во сколько обойдется?");
var stat2 = prompt("Введите обязательную статью расходов в этом месяце");
var ras2 = prompt("Во сколько обойдется?");

var expenses = {
    stat: ras,
    stat2: ras2
};

alert("Бюджет на 1 день: " + (+money - (+ras + +ras2)) / 30);

// console.log(money);
// console.log(time);
// console.log(appData);
// console.log(expenses);
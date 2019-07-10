"use strict";
let money, 
		income = "Фриланс",
		addExpenses,
		deposit = true,
		mission = 333333,
		period,
		expensesAmount,
		sum = 0;

let start = function(){
	do{
		money = prompt("Ваш месячный доход?");
		//console.log(money);
	} while (isNaN(money) || money == "" || money == null);
	return start;
 }
start();


let appData = {
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	expenses: {},
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	income: {},
	period: 3,

asking: function(){
	if(confirm("Есть ли у вас дополнительный заработок?")){
		let itemIncome,
			cashIncome;
			itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
			cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);

			while(itemIncome == "" || itemIncome == null || isNaN(cashIncome)){
				itemIncome = prompt("Какой у вас дополнительный заработок?", "Таксую");
				cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
			}
			appData.income[itemIncome] = cashIncome;
}
	let question, answer,
			addExpenses = prompt("Перечислите возможные расходы через запятую?");
			appData.deposit = confirm("Есть ли у вас депозит в банке?");
			appData.addExpenses = addExpenses.slice(" , ");
			console.log(appData.addExpenses);

	while(isNaN(answer) || answer == "" || answer == null){
	for(let i = 0; i < 2; i++){
	  question = prompt("Какие обязательные ежемесячные расходы у вас есть?"),
		answer = +prompt("Во сколько это обойдется?");
			//console.log(question + " : " + answer);
			appData.expenses[question] = answer;
	};
}
},

toCapLetter: function(str){	
	let stringArray = [];
	for (let key in appData.expenses){
		key = key.charAt(0).toUpperCase() + key.substring(1).toLowerCase();
		stringArray.push(key);
		//console.log(appData.addExpenses[0].toUpperCase() + appData.addExpenses.substr(1));
	}
	console.log("Возможные расходы: " + stringArray.join(", "));
},

getExpensesMonth: function(){
	for(let key in appData.expenses){
		sum += appData.expenses[key];
	}
	return sum;
},

 getBudget: function(){
  	var accumulatedMonth = appData.budget;
  	appData.budgetMonth = appData.budget - appData.getExpensesMonth();
		appData.budgetDay = (Math.floor(appData.budgetMonth/30));
	return("Накопления за месяц: " + appData.budgetMonth + " Бюджет за день: " + appData.budgetDay);
},

	getTargetMonth: function(){
	if (appData.budgetMonth >= 0){
		//console.log("Цель будет достигнута");
	} else {
		console.log("Цель не будет достигнута");
	}
	return("За какой период будет достигнута цель: " + (Math.round(mission / appData.budgetMonth)) + " месяцев");

},

getStatusIncome: function(){
	if (appData.budgetDay >= 800) {
		return("Высокий уровень дохода");
	} else if (appData.budgetDay > 300 && appData.budgetDay < 800 ) {
		return("Средний уровень дохода");
	} else if (appData.budgetDay >= 0 && appData.budgetDay <= 300) {
		return("Низкий уровень дохода"); 
	} else if (appData.budgetDay < 0){
		return("Что-то пошло не так")
	}
},

getInfoDeposit: function(){
	if(appData.deposit){
		appData.percentDeposit = prompt("Какой годовой процент?", "10");
		appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);

	}
},

calcSavedMoney: function(){
	return appData.budgetMonth *appData.period;
}
}

appData.budget = +money;
appData.asking();
appData.expensesMonth = appData.getExpensesMonth();
appData.getBudget();
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
console.log("Сумма ежемесячных расходов: " + appData.expensesMonth + " евро");
appData.toCapLetter();
console.log(appData);	

for (let key in appData){
	console.log("Наша программа включает в себя:  " + key + " " + appData);
}
//appData.getInfoDeposit();
//console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
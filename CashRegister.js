function checkCashRegister(price, cash, cid) {
    var change;
    change = cash - price;
    console.log(cid);
    return change;
}

//example
console.log(
    checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
    ])
);
//should return {status: "OPEN", change: [["QUARTER", 0.5]]}

// purchase price as the first argument (price)
// payment as the second argument (cash)
// cash-in-drawer (cid) as the third argument as a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}
//with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

//create a program that will return an object containing a status key and a change key.
//The value of status is the string INSUFFICIENT_FUNDS, CLOSED, or OPEN, and the value of change is a 2D array of the change due.

//how much money is in your register beforehand
//have a function to assign this information to a variable
//see if you have enough money to complete the transaction and return change, or if you should close the register.
// know the value of each coin in the register, not just the sum of each
//a nickel is worth .05, along with the fact that you have $2.05 worth of nickels in the cash register.
// get as much change from one type of bill or coin before moving to the next, from greater to lesser value
//Keep going until you have calculated all the change due.

console.log(
    checkCashRegister(18.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 9],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
);
//should return {status: "INSUFFICIENT_FUNDS", change: []} because we need 50 cents too

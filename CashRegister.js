// function checkCashRegister(price, customer, register) {
//     let cents = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
//     let change = customer * 100 - price * 100;
//     let output = { status: null, change: [] };
//     let kickOut = true;

//     //array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
//     let ffl4j4f4l = register.reduceRight(myFunction);
//     let myFunction = console.log(ffl4j4f4l);

//     if (price > cash) {
//         let x = { status: "INSUFFICIENT_FUNDS", change: [] };
//     }
//     return change;
// }

// an array of objects which hold the denominations as status and change keys as values
let denomination = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
];

function checkCashRegister(seller, buyer, register) {
    var output = { status: [], change: [] };
    var change = buyer - seller;
    // console.log(change);

    // Transform register array into drawer object
    var drawer = register.reduce(
        function (accumulator, currentValue) {
            accumulator.total += currentValue[1];
            accumulator[currentValue[0]] = currentValue[1];
            return accumulator;
        },
        { total: 0 }
    );
    // console.log(drawer);

    // exact change
    if (drawer.total === change) {
        output.status = "CLOSED";
        output.change = register;
        return output;
    }

    if (drawer.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Loop through the denomination array
    let changeAccumulator = denomination.reduce(function (
        accumulator,
        currentValue
    ) {
        let value = 0;
        // update the change and values while there is still money of this type in the drawer
        // while the denomination is larger than the change remaining
        while (drawer[currentValue.name] > 0 && change >= currentValue.val) {
            change -= currentValue.val;
            drawer[currentValue.name] -= currentValue.val;
            value += currentValue.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
            // console.log(change);
        }
        // now 2D array of the change due, sorted from highest to lowest denomination.
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            accumulator.push([currentValue.name, value]);
        }
        // console.log(accumulator);
        return accumulator; // Return the current changeAccumulator
    },
    []); // Initial value of empty array for reduce

    // If there are no elements in changeAccumulator or we have leftover change
    if (changeAccumulator.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    output.status = "OPEN"; //give exact change as OPEN
    output.change = changeAccumulator; // value of change
    return output;
}

//example returns {status: "OPEN", change: [["QUARTER", 0.5]]}
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

// purchase price as the first argument (price)
// payment as the second argument (cash)
// cash-in-drawer (cid) as the third argument as a 2D array listing available money is in your register.

// The checkCashRegister function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: []} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}
//with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

//create a program that will return an object containing a status key and a change key.
//The value of status is the string INSUFFICIENT_FUNDS, CLOSED, or OPEN, and the value of change is a 2D array of the change due.

// See if you have enough money to complete the transaction and return change, or if you should close the register.
// know the value of each coin in the register, not just the sum of each
// A nickel is worth .05, along with the fact that you have $2.05 worth of nickels in the cash register.
// get as much change from one type of bill or coin before moving to the next, from greater to lesser value
// Keep going until you have calculated all the change due.

console.log(
    checkCashRegister(18.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 1],
    ])
);
// return {status: "INSUFFICIENT_FUNDS", change: []} because we need 50 cents

console.log(
    checkCashRegister(18.5, 20, [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0.5],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
    ])
);
// return {status: "CLOSED", change: Array(9)}

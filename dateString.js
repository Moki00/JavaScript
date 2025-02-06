function getDayName(dateString) {
    const date = new Date(dateString);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getUTCDay()];
}

console.log(getDayName("6/1/2010")); // Output: Tuesday
console.log(getDayName("8/3/2012")); // Output: Friday
console.log(getDayName("2/6/2025"));   // Output: Thursday
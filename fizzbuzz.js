fizzbuzz(30);

function fizzbuzz(input) {
  const response = [];
  for (var i = 1; i <= input; i++) {
    if (i % 15 == 0) response.push("FizzBuzz");
    else if (i % 3 == 0) response.push("Fizz");
    else if (i % 5 == 0) response.push("Buzz");
    else response.push(i);
  }
  console.log(response);
}

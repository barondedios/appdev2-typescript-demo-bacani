let age: any = 31;

// Change values
age = "31";
age = true;
age = {};
age = [];

// Function to describe the type
function describeValue(value: any): string {
  return `Value: ${JSON.stringify(value)} | Type: ${typeof value}`;
}

// Log different examples
console.log(describeValue(31));
console.log(describeValue("hello"));
console.log(describeValue(true));
console.log(describeValue({ name: "Elmer" }));
console.log(describeValue([1, 2, 3]));

// Final value of age
console.log("Final age variable:", describeValue(age));
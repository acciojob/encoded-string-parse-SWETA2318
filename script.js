// Function to parse the encoded string
const parseCode = (str) => {
  // Split the input string using "000" as the separator
  const parts = str.split("000");

  // Extract the values for firstName, lastName, and id
  const firstName = parts[0];
  const lastName = parts[1];
  const id = parts[2];

  // Create and return the result object
  const result = {
    firstName: firstName,
    lastName: lastName,
    id: id
  };

  return result;
};

// Get user input using prompt
const str = prompt("Enter str: ");

// Parse the input string and display the result
alert(JSON.stringify(parseCode(str)));


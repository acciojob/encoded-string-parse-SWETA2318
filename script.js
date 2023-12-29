// Function to parse the encoded string
const parseCode = (str) => {
  // Split the input string using regex to handle consecutive zeros
  const parts = str.split(/0+/);

  // Remove empty strings from the parts array
  const filteredParts = parts.filter(part => part !== "");

  // Extract the values for firstName, lastName, and id
  const [firstName, lastName, id] = filteredParts;

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


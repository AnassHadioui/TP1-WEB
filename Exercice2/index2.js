// Generate a random number between 0 and n-1
function alea(n) {
    return Math.floor(Math.random() * n);
  }
  
  // Create an array with random integers
  function createRandomArray(n, max) {
    if (n <= 0 || max <= 0) {
      return [];
    }
    const array = [];
    for (let i = 0; i < n; i++) {
      array.push(alea(max + 1));
    }
    return array;
  }
  
  // Find the maximum element in an array
  function maxElement(array) {
    if (array.length === 0) {
      return null;
    }
    return Math.max(...array);
  }
  
  // Count the occurrences of an element in an array
  function nbOccurrences(array, element) {
    return array.filter(item => item === element).length;
  }
  
  // DOM Manipulation
  document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");
    let randomArray = [];
  
    // Event listener for generating a random array
    document.getElementById("generateArray").addEventListener("click", () => {
      randomArray = createRandomArray(5, 100);
      outputDiv.textContent = `Generated Array: [${randomArray.join(", ")}]`;
    });
  
    // Event listener for finding the maximum element
    document.getElementById("findMax").addEventListener("click", () => {
      if (randomArray.length === 0) {
        outputDiv.textContent = "Please generate an array first.";
      } else {
        const max = maxElement(randomArray);
        outputDiv.textContent = `Maximum Element: ${max}`;
      }
    });
  
    // Event listener for counting occurrences
    document.getElementById("countOccurrences").addEventListener("click", () => {
      const element = parseInt(prompt("Enter the element to count:"), 10);
      if (isNaN(element)) {
        outputDiv.textContent = "Invalid input. Please enter a number.";
      } else {
        const count = nbOccurrences(randomArray, element);
        outputDiv.textContent = `Occurrences of ${element}: ${count}`;
      }
    });
  });
  
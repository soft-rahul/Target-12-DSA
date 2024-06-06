// O(1) 
const sumBest = n => n * (n+1) /2;

// O(n)
const sum = (n) => {
  let sum = 1;
  if (n < 2) {
    return sum;
  }
  for (let i = 2; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

// O(n2)
const sumWorst = (n) => {
    // Using two nested loops
}

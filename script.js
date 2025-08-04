//your JS code here. If required.
function getInitialArray() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve([1, 2, 3, 4]);
          }, 3000);
        });
      }
      

      function filterEvenNumbers(arr) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const evenNumbers = arr.filter(num => num % 2 === 0);
            resolve(evenNumbers);
          }, 1000);
        });
      }
      
      
      function multiplyByTwo(arr) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const multipliedNumbers = arr.map(num => num * 2);
            resolve(multipliedNumbers);
          }, 2000);
        });
      }
      
      
      function updateOutput(arr) {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = arr.join(',');
      }
      
      
      function manipulateArrayWithPromises() {
        getInitialArray()
          .then(initialArray => {
            console.log('Initial array received:', initialArray);
            return filterEvenNumbers(initialArray);
          })
          .then(evenNumbers => {
            console.log('Filtered even numbers:', evenNumbers);
            updateOutput(evenNumbers);
            return multiplyByTwo(evenNumbers);
          })
          .then(finalArray => {
            console.log('Final array (multiplied by 2):', finalArray);
            updateOutput(finalArray);
          })
          .catch(error => {
            console.error('Error in promise chain:', error);
          });
      }
    
      document.addEventListener('DOMContentLoaded', () => {
        console.log('Starting promise chain...');
        manipulateArrayWithPromises();
      });
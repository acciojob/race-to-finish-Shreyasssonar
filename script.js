window.promises = [];
// Function to create a promise with random delay
    function createRandomPromise() {
      const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Promise resolved after ${randomTime} milliseconds`);
        }, randomTime);
      });
    }

    // Create 5 promises and add them to the array
    for (let i = 0; i < 5; i++) {
      window.promises.push(createRandomPromise());
    }

    // Use Promise.any to wait for the first promise to resolve
    Promise.any(window.promises)
      .then((result) => {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
      })
      .catch((error) => {
        console.error('All promises rejected:', error);
      });
// Do not change the code above this
// add your promises to the array `promises`

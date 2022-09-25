const bubbleSort = (a = array) => {
  const length  = a.length - 1;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }

  return a;
};

bubbleSort([10, -15, 0, 30, 2, -10, 105, 3124, 333, 2, -1, 0, 0, 9]);

// output: [-15, -10, -1, 0, 0, 0, 2, 2, 9, 10, 30, 105, 333, 3124]

const selectionSort = (a = array) => {
  for (let i = 0; i < a.length - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < a.length; j++) {
      if (a[minValueIndex] > a[j]) {
        minValueIndex = j;
      }
    }

    if (minValueIndex !== i) {
      const temp = a[i];
      a[i] = a[minValueIndex];
      a[minValueIndex] = temp;
    }
  }

  return a;
};

selectionSort([1000, 103, 150, -30, 0, -1000, -1, 1, 23, 111]);

// output: [ -1000, -30, -1, 0, 1, 23, 103, 111, 150, 1000 ]

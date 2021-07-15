// HELPER FUNCTION; DO NOT EDIT
Array.isEqual = function (array1, array2) {
  if (!array1 || !array2) return false;

  if (array1.length !== array2.length) return false;

  for (i = 0, l = array1.length; i < l; i++) {
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      if (Array.isEqual(array1[i], array2[i])) return false;
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
// HELPER FUNCTION; DO NOT EDIT

/*
Let's create an array manipulation library called '_' where we implement functions such as:
Map - like each but would return an array with altered contents depending on the function
Reduce - reduce an array into a value, can accept optional initial value
Head - get the initial value of the array
Tail - get the last value of the array
Join - join the array elements into a string given a parameter
*/

// FILL OUT THE FUNCTIONS *****************
const filter = (array, processor) => {
  let matchingItems = [];
  for (let i = 0; i < array.length; i++) {
    const currItem = array[i];
    if (processor(currItem)) {
      matchingItems.push(currItem);
    }
  }
  return matchingItems;
};

const map = (array, processor) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    result = processor(array[i]);
    newArray.push(result);
  }
  return newArray;
};

const reduce = (array, processor, initial) => {
  let result = initial || 0;
  if (array.length === 0 && typeof initial === 'undefined') {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    result = processor(result, array[i]);
  }

  return result;
};

const head = (array) => {
  return array.shift();
};

const tail = (array) => {
  return array.pop();
};

const join = (array, combinator) => {
  return array.join(combinator);
};

const $ = {
  filter,
  map,
  reduce,
  head,
  tail,
  join
};

// *****************************************

// TESTS

((_) => {
  console.log('Running _.filter...');

  // Filtering arraya
  console.log(
    Array.isEqual(
      $.filter([1, 2, 3], function (num) {
        return num < 2;
      }),
      [1]
    )
  );

  // Filtering empty array
  console.log(
    Array.isEqual(
      $.filter([], function (num) {
        return num < 2;
      }),
      []
    )
  );

  console.log('Running _.map...');

  // Mapping array
  console.log(
    Array.isEqual(
      $.map([5, 6, 7], function (num) {
        return num + 3;
      }),
      [8, 9, 10]
    )
  );

  // Mapping empty array
  console.log(
    Array.isEqual(
      $.map([], function (num) {
        return num < 2;
      }),
      []
    )
  );

  console.log('Running _.reduce...');

  // Adding numbers
  console.log(
    $.reduce([1, 2, 3], function (acc, num) {
      return acc + num;
    }) === 6
  );

  // Adding empty list
  console.log(
    Array.isEqual(
      $.reduce([], function (acc, num) {
        return acc + num;
      }),
      []
    )
  );

  // Adding with initial value
  console.log(
    $.reduce(
      [],
      function (acc, num) {
        return acc + num;
      },
      0
    ) === 0
  );

  console.log(
    $.reduce(
      [1, 2, 3],
      function (acc, num) {
        return acc + num;
      },
      4
    ) === 10
  );

  console.log('Running _.head...');

  // Getting top of array
  console.log($.head([1, 2, 3]) === 1);

  // Getting top of empty array
  console.log($.head([]) === undefined);

  console.log('Running _.tail...');

  // Getting tail of array
  console.log($.tail([1, 2, 3]) === 3);

  // Getting tail of empty array
  console.log($.tail([]) === undefined);

  console.log('Running _.join...');

  // Joining array
  console.log($.join(['to', 'be', 1], '-') === 'to-be-1');

  // Joining empty array
  console.log($.join([], '-') === '');
})();

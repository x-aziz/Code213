const conjecture = (n) => {
  while (n != 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    console.log(n);
  }
};
conjecture(7);
//   Arrays: ordered collections of elements that can be of any type.
//   Objects: unordered collections of key-value pairs that represent a single entity.
//   Stacks: a last-in, first-out (LIFO) data structure, where elements are added and removed from the top.
//   Queues: a first-in, first-out (FIFO) data structure, where elements are added to the back and removed from the front.
//   Array.join() is in general faster to execute on bigger lists than string concatenation.

class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = function (a,b) {
      if (a < b) {
         return -1;
      } else if (a === b) {
         return 0;
      } else {
         return 1;
      }
   }
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
         if (indices.indexOf(i) >= 0 && indices.indexOf(j) >= 0 && this.compareFunction(this.array[i], this.array[j]) > 0) {
            let tmp = this.array[j];
            this.array[j] = this.array[i];
            this.array[i] = tmp;
         }
      }
    }
    return this.array;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;

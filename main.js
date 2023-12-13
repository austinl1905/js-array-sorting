import {Bubble, Merge} from './export.js'

const bubble = new Bubble([7, 2, 1, 8, 8, 4]);
// console.log(bubble.sort());

const merge = new Merge([7, 2, 1, 8, 8, 4, 5, 7, 6, 0, 2, 3, 6, 6, 8, 12, 11, 10, 18, 12, 13, 15, 14]);
merge.sort();
console.log(merge);
console.log(merge.search(6));
const student = [
    { id: 21, fname: 'Omor Sunny' },
    { id: 31, fname: 'Manna' },
    { id: 41, fname: 'Moyouri' },
    { id: 71, fname: 'DeepJol' },
];
const fnames = student.map(s => s.fname);
const ids = student.map(s => s.id);
const bigger = student.filter(s => s.id > 40);
const biggerOne = student.filter(s => s.id > 40);

console.log(fnames);
console.log(ids);
console.log(bigger);
console.log(biggerOne);
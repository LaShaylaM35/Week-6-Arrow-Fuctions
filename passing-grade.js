const grades = [
    "100",
    "0",
    "35",
    "54",
    "87",
    "76"
];

const passingGrades = grades.filter(item=> item >= 70)
console.log(passingGrades)
console.log("Congratulations! You passed!")
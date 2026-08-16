// 1) Search Usman

let students = ["Ali", "Hassan", "Usman", "Bilal"];

let found = false;

for (let i = 0; i < students.length; i++) {
    if (students[i] === "Usman") {
        found = true;
        break;
    }
}

if (found) {
    console.log("Usman is found.");
} else {
    console.log("Usman is not found.");
}


// 2) Search 40 using flag and break

let numbers = [10, 20, 30, 40, 50, 60];

let flag = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 40) {
        flag = true;
        break;
    }
}

console.log(flag);


// 3) Positive and Negative Numbers

let nums = [10, -5, 20, -8, 30, -2, 40];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        console.log("Positive: " + nums[i]);
    } else {
        console.log("Negative: " + nums[i]);
    }
}


// 4) Pass or Fail

let marks = [85, 45, 72, 30, 90, 55];

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        console.log(marks[i] + " - Pass");
    } else {
        console.log(marks[i] + " - Fail");
    }
}


// 5) Reverse Loop

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 6) Nested For Loop

for (let i = 3; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " " + j);
    }

    console.log("");
}


// 7) Students with Subjects

let studentNames = ["Naeem", "Hassan", "Ahmed"];
let subjects = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < studentNames.length; i++) {
    for (let j = 0; j < subjects.length; j++) {
        console.log(studentNames[i] + " - " + subjects[j]);
    }

    console.log("");
}
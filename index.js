// Câu 1

let n = +prompt("Nhập số nguyên:");
if (n % 2 === 0) {
  console.log(`${n} là số chẵn`);
} else {
  console.log(`${n} là số lẻ`);
}
if (n > 0) {
  console.log(`${n} là số dương`);
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
} else if (n < 0) {
  console.log(`${n} là số âm`);
  console.log(`Giá trị ${n} không hợp lệ để tạo dãy số`)
} else {
  console.log(`${n} bằng 0`);
}


// Câu 2
let fizz = 0;
let buzz = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
    fizz++;
  } else if (i % 5 === 0) {
    console.log("Buzz");
    buzz++;
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(`${i}`);
  }
}

console.log(`Tổng của tất cả các số đã in ra chữ "Fizz": ${fizz}`);

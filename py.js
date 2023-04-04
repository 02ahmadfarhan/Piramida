console.log("Hi");

// 1. SEGI ORIGINAL
// let res = "";
// for (let i = 0; i < 11; i++) {
//   for (let j = 0; j <= i; j++) {
//     res += "*";
//   }
//   res += "\n";
// }
// for (let i = 12; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     res += "*";
//   }
//   res += `\n`;
// }
// console.log(res);

// 2. COTACT / NUMBER 8
let res = "";
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 0 || i == 9 || j == 0 || j == 9) {
      res += `*`;
    } else if (i == 5) {
      res += "*";
    } else {
      res += " ";
    }
  }
  res += "\n";
}
console.log(res);

// 3. GEGI PERFECT
// V1

// let res = "";
// const h = 5;
// const w = h * 2 - 1; // Calculate thie width of the base row

// for (let i = 1; i <= h; i++) {
//   // Calculate then number of spaces needed for this row
//   const s = (w - (i * 2 - 1)) / 2;

//   // add the spaces
//   for (let j = 0; j <= s; j++) {
//     res += " ";
//   }

//   // add the asterisks
//   for (let k = 1; k <= i * 2 - 1; k++) {
//     res += "*";
//   }

//   // add a newLine character to move to the next row
//   res += "\n";
// }

// console.log(res);

// V2 DOWN
// const height = 5;
// let out = "";

// for (let i = height; i >= 1; i--) {
//   // add space before the first asterisk
//   for (let j = height; j >= 1 + i; j--) {
//     out += " ";
//   }

//   // add asterisks
//   for (let k = 1; k <= i * 2 - 1; k++) {
//     out += "*";
//   }

//   // add a newLine character to move to the next row
//   out += "\n";
// }

// console.log(out);

// V3 UP
// const height = 5;
// let out = "";

// for (let i = 1; i <= height; i++) {
//   // add space before the asterisks
//   out += " ".repeat(height - i);
//   // add asterisks
//   out += "*".repeat(i * 2 - 1);
//   // add a newLine character to move to the next row
//   out += "\n";
// }

// console.log(out);

// V4 Left
// const height = 5;
// let out = "";

// for (let i = 1; i <= height; i++) {
//   out += "*".repeat(i * 2 - 1);
//   out += "\n";
// }
// for (let i = 6; i >= 1; i--) {
//   out += "*".repeat(i * 2 - 1);
//   out += "\n";
// }

// console.log(out);

// V5 Right
// 1
// let res = "";
// for (let i = 5; i >= 1; i--) {
//   res += "";
//   for (let j = 1; j <= i; j++) {
//     res += " ";
//   }

//   for (let k = 1; k <= 6 - i; k++) {
//     res += "*";
//   }
//   res += `\n`;
// }

// for (let i = 1; i <= 5; i++) {
//   res += "";
//   for (let j = 1; j <= i; j++) {
//     res += " ";
//   }

//   for (let k = 1; k <= 6 - i; k++) {
//     res += "*";
//   }
//   res += `\n`;
// }
// console.log(res);

// 2
// const height = 5; // tinggi segitiga

// // loop untuk menggambar setiap baris segitiga
// for (let row = 1; row <= height; row++) {
//   let line = ""; // inisialisasi baris kosong

//   // loop untuk menggambar karakter spasi di setiap kolom
//   for (let col = 1; col <= height - row; col++) {
//     line += " "; // tambahkan spasi jika berada di luar area segitiga
//   }

//   // loop untuk menggambar karakter asterisk di setiap kolom
//   for (let col = 1; col <= row; col++) {
//     line += "*"; // tambahkan karakter asterisk jika berada di dalam area segitiga
//   }

//   console.log(line); // tampilkan baris segitiga
// }

// Right
// let re = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     re += "*";
//   }
//   re += "\n";
// }

// console.log(re);

// Left
// let res = "";

// for (let i = 1; i <= 5; i++) {
//   for (let s = 1; s < i; s++) {
//     res += " ";
//   }
//   for (k = i; k <= 5; k++) {
//     res += "*";
//   }
//   res += "\n";
// }
// console.log(res);

// COMBO V1
let out = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    out += "*";
  }
  out += "\n";
}

for (let i = 1; i <= 5; i++) {
  for (let k = 1; k < i; k++) {
    out += " ";
  }
  for (let r = i; r <= 5; r++) {
    out += "*";
  }
  out += "\n";
}

console.log(out);

// let res = "";
// for (let a = 5; a >= 1; a--) {
//   for (b = 1; b <= a; b++) {
//     res += "*";
//   }
//   res += "\n";
// }
// console.log(res);

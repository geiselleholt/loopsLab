// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26
// As you may have guessed, these values being “comma-separated” means that each comma is also a delimiter. This is why this type of data is traditionally viewed in tables. Here is how the data looks once fully parsed:
// ID	Name	Occupation	Age
// 42	Bruce	Knight	41
// 57	Bob	Fry Cook	19
// 63	Blaine	Quiz Master	58
// 98	Bill	Doctor’s Assistant	26

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let j = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ",") {
    cell1 += str[i];
  } else {
    j=cell1.length + 1
    for (let i = j; i < str.length; i++) {
      if (str[i] !== ",") {
        cell2 += str[i];
      } else {
        j=cell1.length + cell2.length + 2
        for (let i = j; i < str.length; i++) {
          if (str[i] !== ",") {
            cell3 += str[i];
          } else {
            j=cell1.length + cell2.length + cell3.length + 3
            for (let i = j; i < str.length; i++) {
              if (str[i] !== ",") {
                cell4 += str[i];
              }
            }
            break;
          }
        }
        break;
      }
    }
    break;
  }
}
// var stringDelimiter = function (sampleInput, delimiter) {
//   var stringArray = [''];
//   var j = 0;

//   for (var i = 0; i < sampleInput.length; i++) {
//       if (sampleInput.charAt(i) == delimiter) {
//           j++;
//           stringArray.push('');
//       } else {
//           stringArray[j] += sampleInput.charAt(i);
//       }
//   }
//   return stringArray;
// }

// for (let i = 0; i < str.length; i++) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ",") {
//       cell1 += str[i];
//     } else {
//       break;
//     }
//   }

//   for (let i = cell1.length + 1; i < str.length; i++) {
//     if (str[i] !== ",") {
//       cell2 += str[i];
//     } else {
//       break;
//     }
//   }

//   for (let i = cell1.length + cell2.length + 2; i < str.length; i++) {
//     if (str[i] !== ",") {
//       cell3 += str[i];
//     } else {
//       break;
//     }
//   }

//   for (
//     let i = cell1.length + cell2.length + cell3.length + 3;
//     i < str.length;
//     i++
//   ) {
//     if (str[i] !== ",") {
//       cell4 += str[i];
//     } else {
//       break;
//     }
//   }
// }

// console.log(cell1, cell2, cell3, cell4)
console.log(`Cell 1: ${cell1}`);
console.log(`Cell 2: ${cell2}`);
console.log(`Cell 3: ${cell3}`);
console.log(`Cell 4: ${cell4}`);

// if (str[i] == ",") {
//   strIndex = str[i]
//   cell1 += str[i]
//   continue;
//   if (str[strIndex] == ",") {
//     strIndex = str[i]
//     cell2 += str[i]
//       (str[i] == "/n") {
//       break;
//     }
//   }
// }

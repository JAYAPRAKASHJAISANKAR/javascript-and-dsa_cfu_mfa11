/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

function charLength() {
  let upperletter = document.getElementById("uppercase").checked;
  let lowerletter = document.getElementById("lowercase").checked;
  let num = document.getElementById("numbers").checked;
  let sym = document.getElementById("symbols").checked;

  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let number = "0123456789";
  let symbol = "!@#$%^&*()_+=-{}[]><~`"];

  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;

  let sum = "";
  for (let i = 0; i < charLength; i++) {
    if (upperletter) {
      sum += uppercase.charAt(Math.floor(Math.random() * 10));
    }
    if (lowerletter) {
      sum += lowercase.charAt(Math.floor(Math.random() * 10));
    }
    if (num) {
      sum += number.charAt(Math.floor(Math.random() * 10));
    }
    if (sym) {
      sum += symbol.charAt(Math.floor(Math.random() * 10));
    }
  }
  const come = sum.slice(0, charLength);
  document.getElementById("password__result").value = come;
  return charLength;
}
charLength();
document.getElementById("length").addEventListener("input", charLength);
document.getElementById("btn").addEventListener("click", charLength);

// const lengthEl = document.getElementById("length");
// const uppercaseEl = document.getElementById("uppercase");
// const btnEl = document.getElementById("btn");
// const copiedEl = document.querySelector(".copied");

// const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// // Generate password
// function generatePassword() {
//   let password = "";
//   const length = lengthEl.value;

//   const chars = [...(uppercaseEl.checked ? uppercaseChars : [])];

//   if (chars.length === 0) {
//     return "";
//   }

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * chars.length);
//     password += chars[randomIndex];
//   }

//   return password;
// }

// // Update password output
// function updatePassword() {
//   const password = generatePassword();
//   resultEl.value = password;
// }

// // Copy password to clipboard
// function copyPassword() {
//   resultEl.select();
//   document.execCommand("copy");
//   copiedEl.style.display = "block";
//   setTimeout(() => {
//     copiedEl.style.display = "none";
//   }, 2000);
// }

// // Enable Generate button
// function enableButton() {
//   btnEl.disabled = false;
// }

// // Event listeners
// btnEl.addEventListener("click", updatePassword);
// copyEl.addEventListener("click", copyPassword);
// lengthEl.addEventListener("input", enableButton);
// uppercaseEl.addEventListener("click", enableButton);
// lowercaseEl.addEventListener("click", enableButton);
// numbersEl.addEventListener("click", enableButton);
// symbolsEl.addEventListener("click", enableButton);

// document.getElementById("btn").addEventListener("click", generatePassword);

// function generatePassword() {
//   const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
//   const numbers = "0123456789";
//   const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

//   let pass = [];
//   const length = document.getElementById("length").value;
//   const uppercaseChecked = document.getElementById("uppercase").checked;
//   const lowercaseChecked = document.getElementById("lowercase").checked;
//   const numbersChecked = document.getElementById("numbers").checked;
//   const symbolsChecked = document.getElementById("symbols").checked;
//   let word = {
//     length,
//     uppercaseChecked,
//     lowercaseChecked,
//     numbersChecked,
//     symbolsChecked,
//   };
//   pass.push(word);
//   let pword = localStorage.setItem("pword", JSON.stringify(pass));

//   let characters = "";
//   if (uppercaseChecked) {
//     characters += uppercaseLetters;
//   }
//   if (lowercaseChecked) {
//     characters += lowercaseLetters;
//   }
//   if (numbersChecked) {
//     characters += numbers;
//   }
//   if (symbolsChecked) {
//     characters += symbols;
//   }

//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }

//   document.getElementById("password__result").value = password;
// }

// function generatePassword(length, uppercase, lowercase, numbers, symbols) {
//   let charset = "";
//   let password = "";

//   if (uppercase) {
//     charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   }
//   if (lowercase) {
//     charset += "abcdefghijklmnopqrstuvwxyz";
//   }
//   if (numbers) {
//     charset += "0123456789";
//   }
//   if (symbols) {
//     charset += "!@#$%^&*()_+-={}[]|;:,.<>?";
//   }

//   for (let i = 0; i < charset.length; i++) {
//     password += charset.charAt(Math.floor(Math.random() * charset.length));
//   }

//   return password;
// }

// const generateBtn = document.getElementById("btn");

// generateBtn.addEventListener("click", () => {
//   const length = document.getElementById("length").value;
//   conletter= document.getElementById("uppercase").checked;
//   const lowercase = document.getElementById("lowercase").checked;
//   const numbers = document.getElementById("numbers").checked;
//   const symbols = document.getElementById("symbols").checked;

//   const password = generatePassword(
//     length,
//     uppercase,
//     lowercase,
//     numbers,
//     symbols
//   );

//   document.getElementById("password__result").value = password;
// });

// let Password = () => {
//   //let length = document.getElementById('length').value;
//   let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   let password = "";

//   for (let i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random() * charLength.length);
//     password += characters[randomIndex];
//   }

//   //   document.getElementById("password-display").innerText = password;
// };

// document.getElementById('generator-btn').addEventListener('click', Password);

// let uppercase = document.getElementById("uppercase");

// function click() {
//   let password = " ";

//   let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// }

// let lowercase = "abcdefghijklmnopqrstuvwxyz";
// let number = "0123456789";
// let symbol = "!@#$%^&*()_+=-{}[]><~`";

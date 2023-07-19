let lengtsOfArray = parseInt(prompt("Введіть, будь ласка, довжину масиву?"));
let array = [];

for (i = 0; i < lengtsOfArray; i++) {
  let elementArray = prompt("Введіть елемент масиву:");
  array.push(elementArray);
}
console.log(`Масив до сортування: ${array}`);

array.sort();
console.log(`Відсортований масив: ${array}`);

array.splice(1, 3);
console.log(`Масив з видаленими елементами: ${array}`);

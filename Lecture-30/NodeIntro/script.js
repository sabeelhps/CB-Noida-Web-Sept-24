const arr = process.argv;

const names = arr.slice(2);

console.log(names);

for (let name of names) {
    console.log(`Hello from ${name}`);
}

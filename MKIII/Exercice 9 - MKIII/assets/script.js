let result = '';

for (let i = 1; i <= 10; i ++) {
    result += i;
    if (i < 10) {
        result += '-';
    }
}
console.log(result);
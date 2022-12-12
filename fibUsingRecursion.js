let fibRecursion = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return fibRecursion(n - 1) + fibRecursion(n - 2);
    }
}
console.log(fibRecursion(5));
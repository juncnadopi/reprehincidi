function logArguments() {
    for (let i = 0, n = arguments.length; i < n; ++i) {
        console.log(`Argument ${i + 1}: ${arguments[i]}`);
    }
}

logArguments('Hello', 'world', 2024);

const flattened = [[0,1],[2,3],[4,5]].reduce((a, b) => a.concat(b), []);

const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator, array) => {
    debugger;
    console.log('array', array);
    console.log('accumulator', accumulator);
    return accumulator.concat(array);
});

const flattened = [[0,1],[2,3],[4,5]].reduce((accumulator, array) => {
    debugger;
    return accumulator.concat(array);
});
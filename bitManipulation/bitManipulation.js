/*

Write a function that takes an unsigned integer and returns the number of ’1' bits it has
(also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011,
so the function should return 3.

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const ToString = n.toString(2);
    let count = 0;
    for(let char of ToString){
        if(char === '1'){
            count++;
        }
    }
    return count;
};

// better solution
/*
var hammingWeight = function(n) {
    var count = 0;
    while (n != 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
};
*/

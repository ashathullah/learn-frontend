function matrixSum(arr1, arr2) {
    var resultantArr = [];
    for(let i = 0; i < 3; i++) {
        let resultantRow =[];
        for(let j = 0; j < 3; j++) {
            resultantRow.push(arr1[i][j] + arr2[i][j]);
        }
        resultantArr.push(resultantRow);
    }
    return resultantArr;
}

var a = [
    [1,2,3],
    [2,3,4],
    [3,4,5]
];
var b = [
    [5,6,7],
    [6,7,8],
    [7,8,9]
];
console.log(matrixSum(a, b));

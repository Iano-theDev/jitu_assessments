function checkAmstrong(num) {
    let separate = num.toString().split('').map(Number)
    // console.log(separate)
    const amstrongPositive = "AN AMSTRONG NUMBER";
    const amstrongNegative = "NOT AN AMSTRONG NUMBER";
    let firstSquare = Math.pow(separate[0], separate[0]);
    let secondSquare = Math.pow(separate[1], separate[0]);
    let thirdSquare = Math.pow(separate[2], separate[0]);
    let checkSum = firstSquare + secondSquare + thirdSquare;
    if (num === checkSum) {
        console.log(`${num} is ${amstrongPositive}`)
    } else {
        console.log(`${num} is ${amstrongNegative}`)
    }

}

checkAmstrong(370)
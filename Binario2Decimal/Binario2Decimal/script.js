// Bin2Dec allows the user to enter stings of up to 8 binary digits, 0's and 1's, in any sequence and 
// then displays its decimal equivalent.


let bits
let sum = 0
let exponent
let binary
let i

function conversao() {
    sum = 0
    exponent = 0
    binary = document.getElementById("binaryDigit").value

    exponent = binary.length
    console.log(binary.length)

    for (i = 0; i < binary.length; i++) {
        bits = binary.slice(i, i + 1)
        console.log(bits)
        if (bits !== "1" && bits !== "0") {
            var text = `"A binary number is a number expressed in the base-2 numeral system 
            or binary numeral system, a method of mathematical expression which uses only
            two symbols: typically "0" (zero) and "1" (one)."`
            document.getElementById("result").value = `"Non binary number typed.`
            document.getElementById("screenCalculus").innerHTML = `<blockquote> ${text}</blockquote>`
            return;

        }
        exponent = exponent - 1
        sum = sum + (Number(bits) * (2 ** (exponent)))
        show()
    }
    document.getElementById("result").value = `${sum}`
}

function show() {
    if (i == 0) {
        document.getElementById("calculus").innerHTML = `${binary}<sub>2</sub> = `
    }
    if (exponent == 0) {
        document.getElementById("calculus").innerHTML += `(${bits} x 2<sup>${exponent}</sup>) = ${sum}<sub>10</sub>`

    } else {
        document.getElementById("calculus").innerHTML += `(${bits} x 2<sup>${exponent}</sup>) + `
    }
}



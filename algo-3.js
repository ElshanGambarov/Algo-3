document.getElementById('calculateBtn').addEventListener('click', function() {
    const sumOfThreeDigitNumbersDivisibleBy7And8 = calculateSumOfThreeDigitNumbersDivisibleBy7And8();
    document.getElementById('result').innerText = `3 rəqəmli, həm 7 həm 8-ə bölünə bilən ədədlərin toplamı: ${sumOfThreeDigitNumbersDivisibleBy7And8}`;
});

function calculateSumOfThreeDigitNumbersDivisibleBy7And8() {
    let sum = 0;
    for (let i = 100; i < 1000; i++) {
        if (i % 7 === 0 && i % 8 === 0) {
            sum += i;
        }
    }
    return sum;
}
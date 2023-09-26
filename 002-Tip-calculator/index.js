let billAmount = document.querySelector('.bill-amount');
let tipPercentage = document.querySelector('.tip-percentage');
let calculate = document.querySelector('.btn-calculate');
let res = document.querySelector('.res');

calculate.addEventListener('click', () => {
    let total = billAmount.value * (1 + (tipPercentage.value / 100));
    res.innerHTML = `<p class="res">Total: ${total.toFixed(2)}</p>`;
    console.log(billAmount, tipPercentage);
});
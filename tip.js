document.getElementById('test').innerHTML = calculateTip(10, 100);

function calculateTip(tipPercentage, subtotal) {
    var total = (tipPercentage/100) * subtotal;
    return total;
}

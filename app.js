function updateProductNumber(product, isIncreasing, productPrice){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;

    }else if (isIncreasing == false && productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total 
        const productTotal = document.getElementById(product + '-total');
        productTotal.innerText = productNumber * productPrice;
        // calculte total 
        calculateTotal();
}
function totalQuantity(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = 1219 * totalQuantity('phone');
    const caseTotal = 59 * totalQuantity('case');
    const subTotalProduct = phoneTotal + caseTotal;
    const tax = subTotalProduct / 10;
    const total = subTotalProduct + tax;
    // update on the html 
    document.getElementById('sub-total').innerText = subTotalProduct;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}
// handle phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', true, 1219)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', false, 1219)
})
// handle phone case increase decrease event 
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', true, 59);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', false, 59);
})
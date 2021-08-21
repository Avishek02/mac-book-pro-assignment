//-------------Function declarations--------
// -----Common function of individual costs----
function extraCost(inputID, cost) {

    const inputIDText = document.getElementById(inputID);
    inputIDText.innerHTML = cost;
}


// ------Common function of total cost
function totalCost() {
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerHTML);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerHTML);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerHTML);
    const total = memoryCost + storageCost + deliveryCost + 1299;

    const totalCostValue = document.getElementById('total-cost');
    totalCostValue.innerHTML = total;
    const finalCost = document.getElementById('final-cost');
    finalCost.innerText = total;

}

function promoCode() {
    const promoCodeText = document.getElementById('promo-code-input');
    const promoCodeValue = promoCodeText.value;
    if (promoCodeValue === "stevekaku") {
        const finalCostText = document.getElementById('final-cost');
        let finalCost = parseFloat(finalCostText.innerText);
        finalCost -= (finalCost * 0.2);
        finalCostText.innerText = finalCost;
    }
    promoCodeText.value = "";
}




//---------Function calls-------
//--------Memory event listener----
document.getElementById('8gb-memory-button').addEventListener('click', function () {
    extraCost('memory-cost', 0);
    totalCost();
});


document.getElementById('16gb-memory-button').addEventListener('click', function () {
    extraCost('memory-cost', 180);
    totalCost();
});



//--------Storage event listener----
document.getElementById('256gb-storage-button').addEventListener('click', function () {
    extraCost('storage-cost', 0);
    totalCost();
});

document.getElementById('512gb-storage-button').addEventListener('click', function () {
    extraCost('storage-cost', 100);
    totalCost();
});

document.getElementById('1tb-storage-button').addEventListener('click', function () {
    extraCost('storage-cost', 180);
    totalCost();
});


//--------Delivery charge event listener----
document.getElementById('prime-delivery-button').addEventListener('click', function () {
    extraCost('delivery-cost', 0);
    totalCost();
});

document.getElementById('fast-delivery-button').addEventListener('click', function () {
    extraCost('delivery-cost', 20);
    totalCost();
});




//--------Promo code event listener----
document.getElementById('promo-code-button').addEventListener('click', function () {
    promoCode();
});
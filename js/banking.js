// function of deposit
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear deposit input
    inputField.value = '';

    return amountValue;
};

function updateTotalField(totalFieldId, ammount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = ammount + previousTotal;
};

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(ammount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + ammount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - ammount;
    }
};


// deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // call the deposit function
    const depositAmmount = getInputValue('deposit-ammount');
    if (depositAmmount > 0) {
        updateTotalField('total-deposit', depositAmmount);
        updateBalance(depositAmmount, true);
    }
    // update ammount
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmmount;
});

// withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // call the withdraw function
    const withdrawAmmount = getInputValue('withdraw-ammount');
    const currentBalance = getCurrentBalance();
    if (withdrawAmmount > 0 && withdrawAmmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmmount);
        updateBalance(withdrawAmmount, false);
    }
    if (withdrawAmmount > currentBalance) {
        alert('You can not withdraw more than what you have in your account')
    }
    // update total ammount after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmmount;
});
// deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-ammount');
    const depositAmmountText = depositInput.value;
    const depositAmmount = parseFloat(depositAmmountText);

    // get current deposit
    const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmmount + previousDepositAmmount;

    // total ammount
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmmount;

    // clear deposit input
    depositInput.value = '';
});

// withdraw handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-ammount');
    const withdrawAmmountText = withdrawInput.value;
    const withdrawAmmount = parseFloat(withdrawAmmountText);

    // update withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmmount;

    // update total ammount after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    
    balanceTotal.innerText = previousBalanceTotal - withdrawAmmount;

    withdrawInput.value = '';
});
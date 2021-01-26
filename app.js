// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
  const loginPage = document.getElementById('login_page');
  loginPage.style.display = 'none';
  const transactionArea = document.getElementById('transaction_area');
  transactionArea.style.display = 'block';
});

// deposit button event handler
const depositBtn = document.getElementById('deposit_btn');
depositBtn.addEventListener('click', function(){
  const depositeNum = getInputNumber('deposit_amount');

  updateSpanText('current-_deposit', depositeNum);
  updateSpanText('current_balance', depositeNum);

  document.getElementById('deposit_amount').value = "";
});


// withdraw button event handler
const withdrawBtn = document.getElementById('withdraw_btn');
withdrawBtn.addEventListener('click', function(){
  const withdrawNum = getInputNumber('withdraw_amount');

  updateSpanText('current_withdraw', withdrawNum);  

  const currentBalance = document.getElementById('current_balance').innerText;
  const currentBalanceNum = parseFloat(currentBalance);
  let totalCurrent = currentBalanceNum - withdrawNum;
  document.getElementById('current_balance').innerText = totalCurrent;

  document.getElementById('withdraw_amount').value = "";
});


function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const number = parseFloat(amount);
  return number;
}

function updateSpanText(id, number) {
  const current = document.getElementById(id).innerText;
  const currentNum = parseFloat(current);
  let totalBalance = currentNum + number;
  document.getElementById(id).innerText = totalBalance;
}
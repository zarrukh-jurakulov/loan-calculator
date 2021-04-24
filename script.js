// add button



function calculateLoan() {
 let message
 let loanAmount = document.getElementById("loanAmountInputId").value


 if (loanAmount.length == null) {
  message = "Enter number"
 } else {
  return null;
 }


 let percentRate = document.getElementById("percentRateInputId").value
 let monthlyPay = document.getElementById("monthlyToPayId").value
 let percent = 100
 let totalLoanWithPercent = loanAmount / percent * percentRate
 let dividePerMonth = totalLoanWithPercent / monthlyPay
 document.getElementById("monthlyPayment").innerHTML = "Monthly Payment : " + dividePerMonth
}


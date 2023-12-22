let balance = 0;

function checkBalance() {
    alert("Your balance is "+ balance);
}

function deposit() {
    const amount = Number(prompt("Enter the amount to deposit:"));
    if(amount > 0){
    // if(amount > 0  && amount.typeof() == "Number"){
        balance += amount;
        alert("Deposit of " + amount+"successfull. Your new balance is "+ balance);
        
    }
    else {
        alert("Invalid amount for deposit.");
    }
}

function withdraw () {
    const amount = Number(prompt("Enter the amount to withdraw:"));
    if (amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            alert("Withdraw of " + amount+"successfull. Your new balance is" + balance);
        } else {
            alert("Insufficient balance for withdraw.");
        }
    }
}
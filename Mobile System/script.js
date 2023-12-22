let userBalance = 50000;

function theMenu() {
    return `
    <div id="menu">
        <p>1. Send Money</p>
        <p>2. Buy</p>
        <p>3. Pay</p>
        <p>4. Loan and Saving</p>
        <p>5. Momo Account</p>
        <p>6. Pending Services</p>
        <p>7. Momo pay</p>
        <p>8. Momo Security</p>
        <p>9. Healthy Services</p>
        <p>10. Rules and Regulations</p>
    </div>`;
}

function checkBalance() {
  return `<p>Your balance: $${userBalance}</p>`;
}

function sendMoney() {
  let amount = prompt("Enter the amount to send: ");
  amount = parseFloat(amount);

  if (isNaN(amount) || amount <= 0) {
    return "<p>Invalid amount. Please enter a valid number.</p>";
  }

  if (amount > userBalance) {
    return "<p>Insufficient funds. Cannot send money.</p>";
  } else {
    let recipient = prompt("Enter the recipient's phone number: ");
    userBalance -= amount;
    return `<p>Sent $${amount} to ${recipient}</p>`;
  }
}

function checkCode() {
  let accessCode = document.getElementById("code").value;

  if (accessCode === "*182#") {
    document.getElementById("accessForm").style.display = "none";
    document.getElementById("momo").style.display = "block";
    document.getElementById("menu").innerHTML = theMenu();
    document.getElementById("output").innerHTML = "Enter the number corresponding to your choice:";
    document.getElementById("output").innerHTML += theMenu();
    document.getElementById("output").innerHTML += '<input type="text" id="userChoice" placeholder="Enter your choice">';
    document.getElementById("output").innerHTML += '<button type="button" onclick="processUserChoice()">Submit</button>';
  } else {
    alert("Invalid code. Exiting...");
  }
}

function processUserChoice() {
  let userChoice = document.getElementById("userChoice").value;

  switch (userChoice) {
    case "1":
      document.getElementById("output").innerHTML = sendMoney();
      break;
    case "2":
      document.getElementById("output").innerHTML = "Buy functionality coming soon.";
      break;
    case "3":
      document.getElementById("output").innerHTML = "Pay functionality coming soon.";
      break;
    case "4":
      document.getElementById("output").innerHTML = "Loan and Saving functionality coming soon.";
      break;
    case "5":
      document.getElementById("output").innerHTML = "Momo Account functionality coming soon.";
      break;
    case "6":
      document.getElementById("output").innerHTML = "Pending Services functionality coming soon.";
      break;
    case "7":
      document.getElementById("output").innerHTML = "Momo pay functionality coming soon.";
      break;
    case "8":
      document.getElementById("output").innerHTML = "Momo Security functionality coming soon.";
      break;
    case "9":
      document.getElementById("output").innerHTML = "Healthy Services functionality coming soon.";
      break;
    case "10":
      document.getElementById("output").innerHTML = "Rules and Regulations functionality coming soon.";
      break;
    default:
      document.getElementById("output").innerHTML = "Invalid choice. Please enter a number between 1 and 10.";
  }
}

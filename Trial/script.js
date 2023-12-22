let userBalance = 1000;

function displayMenu() {
  return `
    <div id="menu">
      <p>1. Check Balance</p>
      <p>2. Send Money</p>
      <p>3. Top-Up Airtime</p>
      <p>4. Exit</p>
    </div>
  `;
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

function topUpAirtime() {
  let airtimeAmount = prompt("Enter the airtime amount: ");
  airtimeAmount = parseFloat(airtimeAmount);

  if (isNaN(airtimeAmount) || airtimeAmount <= 0) {
    return "<p>Invalid airtime amount. Please enter a valid number.</p>";
  }

  userBalance += airtimeAmount;
  return `<p>Airtime worth $${airtimeAmount} added to your account.</p>`;
}

function checkAccessCode() {
  let accessCode = document.getElementById("accessCode").value;

  if (accessCode === "*182#") {
    document.getElementById("accessForm").style.display = "none";
    document.getElementById("mobileMoneySystem").style.display = "block";
    document.getElementById("menu").innerHTML = displayMenu();

    // Add event listener to handle user input
    document.getElementById("output").innerHTML = "Enter the number corresponding to your choice:";
    document.getElementById("output").innerHTML += displayMenu();
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
      document.getElementById("output").innerHTML = checkBalance();
      break;
    case "2":
      document.getElementById("output").innerHTML = sendMoney();
      break;
    case "3":
      document.getElementById("output").innerHTML = topUpAirtime();
      break;
    case "4":
      alert("Exiting Mobile Money System. Goodbye!");
      location.reload(); // Refresh the page
      break;
    default:
      document.getElementById("output").innerHTML = "Invalid choice. Please enter a number between 1 and 4.";
  }
}
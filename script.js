let expenses = [];

function addExpense() {
    const date = document.getElementById('date').value;
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    if (!date || !name || isNaN(amount) || amount <= 0) {
        alert('Please fill all fields with valid data.');
        return;
    }

    expenses.push({ date, name, amount, description });
    displayExpenses();
}

function displayExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    let totalAmount = 0;
    let categories = {};

    expenses.forEach(expense => {
        totalAmount += expense.amount;
        const { name, amount, description } = expense;
        const listItem = document.createElement('div');
        listItem.innerHTML = `<p><strong>${name}</strong> - $${amount.toFixed(2)} - ${description}</p>`;
        expenseList.appendChild(listItem);
        if (!categories[name]) {
            categories[name] = 0;
        }
        categories[name] += expense.amount;
    });
    const totalAmountDiv = document.getElementById('totalAmount');
    totalAmountDiv.textContent = `Total Amount Spent: $${totalAmount.toFixed(2)}`;
    const categoryBreakdownDiv = document.getElementById('categoryBreakdown');
    let breakdownHTML = '<h2>Category Breakdown:</h2>';
    for (const category in categories) {
        breakdownHTML += `<p>${category}: $${categories[category].toFixed(2)}</p>`;
    }
    categoryBreakdownDiv.innerHTML = breakdownHTML;
}

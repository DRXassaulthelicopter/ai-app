function addInvoice() {
    const container = document.getElementById('invoice-container');
    const title = document.getElementById('title').value;
    const amount = document.getElementById('amount').value;
    const dueDate = document.getElementById('dueDate').value;
    const type = document.getElementById('type').value;

    if (title && amount && dueDate) {
        const invoiceBox = document.createElement('div');
        invoiceBox.className = 'invoice-box';
        invoiceBox.innerHTML = `
            <h3>${title}</h3>
            <p>Amount: $${amount}</p>
            <p>Due: ${dueDate}</p>
            <p>Type: ${type}</p>
            <button onclick="removeInvoice(this)">Paid/Completed</button>
        `;
        container.appendChild(invoiceBox);

        // Clear inputs after adding
        document.getElementById('title').value = '';
        document.getElementById('amount').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('type').selectedIndex = 0; // Reset dropdown
    } else {
        alert('Please fill all fields!');
    }
}

function removeInvoice(button) {
    const invoiceBox = button.parentNode;
    invoiceBox.parentNode.removeChild(invoiceBox);
}

// Define a constructor function for creating Customer objects
function Customer(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

// Array to store customer objects
let customers = [];

// Function to add a new customer
function addCustomer(name, email, phone) {
    let newCustomer = new Customer(name, email, phone);
    customers.push(newCustomer);
}

// Function to display all customers
function displayAllCustomers() {
    console.log("All Customers:");
    customers.forEach(customer => {
        console.log(`Name: ${customer.name}, Email: ${customer.email}, Phone: ${customer.phone}`);
    });
    console.log("\n");
}

// Function to search for customers by email
function searchCustomerByEmail(email) {
    let foundCustomer = customers.find(customer => customer.email === email);
    if (foundCustomer) {
        console.log("Customer Found:");
        console.log(`Name: ${foundCustomer.name}, Email: ${foundCustomer.email}, Phone: ${foundCustomer.phone}\n`);
    } else {
        console.log(`No customer found with email: ${email}\n`);
    }
}

// Adding some customers
addCustomer('John Doe', 'john@example.com', '555-1234');
addCustomer('Jane Smith', 'jane@example.com', '555-5678');
addCustomer('Bob Johnson', 'bob@example.com', '555-9876');

// Display all customers
displayAllCustomers();

// Search for a customer by email
searchCustomerByEmail('jane@example.com');
searchCustomerByEmail('notfound@example.com');

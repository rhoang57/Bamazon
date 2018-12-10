const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    // Enter your port; if not 3306
    port: 3306,

    // Enter your username; if not root
    user: "root",

    // Your password and database name
    password: "Now116116",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("\n-------------------------WELCOME TO BAMAZON------------------------\n");
    console.log("\n----------Check out our items for sale in the table below----------\n\n")
    displayProducts();
});


function displayProducts() {
    connection.query("SELECT item_id, product_name, price, stock_quantity FROM products",
        function (error, results) {
            if (error) throw error;
            console.table(results);
            purchaseInquiry();
        });
}

function purchaseInquiry() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        //console.log(results);
        inquirer.prompt([

            {
                type: "input",
                message: "Please enter the 'item_id' for the product you would like to purchase?",
                name: "itemId"
            },
            {
                type: "input",
                message: "How many units would you like to purchase?",
                name: "quantity"

            }]).then(function (answer) {
                var y = parseInt(parseInt(answer.itemId) - 1);
                var z = parseInt(answer.quantity) * results[y].price

                if (parseInt(answer.quantity) <= results[y].stock_quantity) {
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: (parseInt(results[y].stock_quantity) - answer.quantity)
                            },
                            { item_id: answer.itemId }
                        ],
                        function (error) {
                            if (error) throw error;
                            console.log("Thank you for your order! Your total is " + "$" + z.toFixed(2));
                            console.log("\n\n");
                            connection.end();
                        });
                }
                else {
                    console.log("-----------------------------------------------------------------------------------------------------");
                    console.log("***** Quantity entered is larger than available stock, please lower your quantity and try again *****");
                    console.log("-----------------------------------------------------------------------------------------------------");

                    purchaseInquiry();

                }
            });
    })
};

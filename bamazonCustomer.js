var inq = require('inquirer');
var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'vegetable',
	database: 'bamazon_DB',
});

function query(){
    inq.prompt([
        {
            name: 'product_id',
            type: 'input',
            message: 'Product Id?',
        },{
            name:'product_quantity', 
            type: 'input',
            message: 'How many?',
        }
    ]).then(function(ans){
        if (ans.product_id < 27){
            IdSearch(ans.product_id, ans.product_quantity);
        } else {
            console.log('Sorry, we don\'t have that id number on file. Please try again!')
        }
    });
};

function menuFxn(){
    con.connect(function(err){
        if (err) throw (err);
        con.query("SELECT * FROM merch;", function(err, res){
            if (err) throw (err);
            var result = JSON.parse(JSON.stringify(res));
            console.log('| ID#  | Product Name --- Quantity')
            for ( var i = 0; i < 26; i++){
                console.log('|' + result[i].id + '|' + result[i].product_name + ' --- ' + result[i].stock_quantity + ' left!');
            }
            query();
        });
    });
};

function IdSearch(idNumber, num){
    con.query("SELECT * FROM merch WHERE id = \"" + idNumber + "\";", function (err, res){
        if (err) throw err;
        var result = JSON.parse(JSON.stringify(res[0]));
        console.log('You have selected ' + result.product_name + ' from the ' + result.department_name + ' department. There are ' + result.stock_quantity + ' left!');
        Quantity(idNumber, result.product_name, num, result.stock_quantity, result.price)
    });
};
function Quantity(id, name, num, stock, price){
    if (num <= stock){
        var newStock = stock - num;
        var totalPrice = num * price;
        con.query('UPDATE merch SET stock_quantity = ' + newStock + ' WHERE id = ' + id + ';' , function(err){
            if (err) throw err
            console.log(num + ' ' + name + ' at ' + price + ' per unit = $' + totalPrice);
            inq.prompt(
                {
                    name: 'confirm',
                    type: 'confirm',
                    message:'Would you like to continue?',
                }
            ).then(function(ans){
                if(ans.confirm === true){
                    console.log('Thank you!');
                    con.end();
                } else{
                    con.query('UPDATE merch SET stock_quantity = ' + stock + ' WHERE id = ' + id + ';' , function(err){
                        if (err) throw err    
                        con.end();
                    });
                }
            });
        });
    } else if (num > stock) {
        console.log('Sorry, there\'s not enough in the inventory');
    }
}

menuFxn();
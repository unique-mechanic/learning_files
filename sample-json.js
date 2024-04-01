const jsonText =
  '{"orders":[{"id":"O001","product":[{"id":"P010","name":"Blue paint","price":35.00,"quantity":2},{"id":"P512","name":"Roller Brush","price":2.50,"quantity":6},{"id":"P3010","name":"Tape","price":6.50,"quantity":2}],"address":"63 Faraday Lane","payment":"Paid"},{"id":"O006","product":[{"id":"P009","name":"White Sealer","price":30.00,"quantity":4},{"id":"P512","name":"Roller Brush","price":2.50,"quantity":6},{"id":"P864","name":"Mixing Motor","price":650.90,"quantity":1},{"id":"P840","name":"Li-Ion Battery","price":145.90,"quantity":1}],"address":"1342 Lith Drive","payment":"Cash on Delivery"},{"id":"O152","product":[{"id":"P934","name":"Paint Job","price":5100.00,"quantity":1}],"address":"10 Oxy Avenue 13-478","payment":"Paid"}],"inventory":{"product":[{"id":"P010","name":"Blue paint","price":35.00,"quantity":200},{"id":"P512","name":"Roller Brush","price":2.50,"quantity":2000},{"id":"P3010","name":"Tape","price":6.50,"quantity":5000},{"id":"P009","name":"White Sealer","price":30.00,"quantity":1600},{"id":"P864","name":"Mixing Motor","price":650.90,"quantity":10},{"id":"P840","name":"Li-Ion Battery","price":145.90,"quantity":100},{"id":"P934","name":"Paint Job","price":5100.00,"quantity":99999}]}}';
  const jsonObject = JSON.parse(jsonText);

  var orders =  jsonObject.orders;

  for (var i = 0; i < orders.length; i++) {
  if (orders[i].payment === "Cash on Delivery") {
    for (var j = 0; j < orders[i].product.length; j++) {
      orders[i].product[j].price *= 1.1; // Increase the price by 10%
    }
  }
}

var inventory = jsonObject.inventory;

for (var i = 0; i < inventory.product.length ; i++){
  inventory.product[i].price *= 1.1;
}

const updatedData = {
  orders: orders,
  inventory : inventory
};

const printData = JSON.stringify(updatedData);
console.log(printData);

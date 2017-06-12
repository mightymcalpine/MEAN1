function getItemFromDB(query, callback) {
  setTimeout(function () {
    // returned info from query
    var data = {
      name: 'Barty',
      dojo: 'online',
    }

    callback(data);
  }, 1000);
}

var things = getItemFromDB('items', function(data) {
  // do something with data from database
  console.log('inside callback');
  console.log(data.name);
});
console.log(things);





function orderSupplies(item, callback) {
  var warehouse; //undefined
  var deliveryTime = Math.random() * 3000;

  setTimeout(function(){
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() { return 'mix it!' }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() { return 'start painting!' }
      }
    };

    callback(warehouse[item]);
  }, deliveryTime);
}


orderSupplies('paint', function (item) {
  console.log(`Received ${ item.product }! Time to ${ item.directions() }`);
});
orderSupplies('brush', function (item) {
  console.log(`Received ${ item.product }! Time to ${ item.directions() }`);
});





//

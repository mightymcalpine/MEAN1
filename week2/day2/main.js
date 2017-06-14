function orderSupplies(item) {
  var warehouse; //undefined
  var deliveryTime = Math.random() * 3000;

  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: function() { return 'cover the floor' }
        }
      };

      resolve(warehouse[item]);
    }, deliveryTime);
  })
}

function receivedItem(item) {
  console.log(`Received ${item.product}. Time to ${item.directions()}!`);
  return item;
}


var paint = orderSupplies("paint");
var brush = orderSupplies("brush");
orderSupplies("tarp")
  .then(function(item) {
    receivedItem(item);
    return paint;
  })
  .then(function(item) {
    paint = receivedItem(item);
    return brush;
  })
  .then(receivedItem)
  .catch(function(error) {
    console.log(error.message);
  })




// orderSupplies("paint", function(item){
//   receivedItem(item);
//   orderSupplies("brush", receivedItem);
// });


// var havePaint = false;
//
// orderSupplies("paint", function(item) {
//   havePaint = true;
//   receivedItem(item);
// })
//
//
// orderSupplies("brush", brush)
//
// function brush(item) {
//   if(havePaint) {
//     return receivedItem(item);
//   }
//   setTimeout(brush, 100, item);
// }


var havePaint = false;
var haveBrush = false;

// orderSupplies("paint", function(item) {
//   // always log paint
//   receivedItem(item);
//
//   // if we have brush it has not bee logged yet
//   if(haveBrush) {
//     // log brush out now
//     return receivedItem(haveBrush);
//   }
//
//   // if no brush yet, save paint to havePaint
//   havePaint = item;
// });

// orderSupplies("brush", function(item) {
//   // if we have paint, it has been logged
//   if(havePaint) {
//     // therefore we have not yet logged brush, lets do so now
//     return receivedItem(item);
//   }
//
//   // if no paint, save brush to haveBrush
//   haveBrush = item;
// });


// const paint = new Promise(function(resolve, reject) {
//   orderSupplies('paint', resolve);
// });
//
// const brush = new Promise(function(resolve, reject) {
//   orderSupplies('brush', resolve);
// });
//
// const tarp = new Promise(function(resolve, reject) {
//   orderSupplies('tarp', resolve);
// });
//
// tarp
//   .then(function(item) {
//     receivedItem(item)
//     return paint;
//   })
//   .then(function(item) {
//     receivedItem(item)
//
//     return brush.then(receivedItem);
//   })
//   // .then(function(item) {
//   //   receivedItem(item);
//   // })
//   .catch(function(error) {
//     console.log(error.message);
//   });


//
